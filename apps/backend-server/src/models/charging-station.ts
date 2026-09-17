import mongoose from 'mongoose';

const chargingStationSchema = new mongoose.Schema<Model.ChargingStation>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      required: true,
      enum: ['available', 'occupied', 'maintenance', 'offline'],
    },

    longitude: {
      type: Number,
      required: true,
    },

    latitude: {
      type: Number,
      required: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    updated_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    description: {
      type: String,
      trim: true,
    },
  },
  {
    collection: 'charging_stations',
    timestamps: {
      createdAt: 'created_time',
      updatedAt: 'updated_time',
    },
  },
);

const ChargingStation = mongoose.model<Model.ChargingStation>('ChargingStation', chargingStationSchema);

export default ChargingStation;
