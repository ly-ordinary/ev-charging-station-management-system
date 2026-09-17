import mongoose from 'mongoose';

const maintenanceRecordSchema = new mongoose.Schema<Model.MaintenanceRecord>(
  {
    station_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ChargingStation',
      required: true,
    },

    maintainer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    operate_type: {
      type: String,
      required: true,
      trim: true,
    },

    operation: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    collection: 'maintenance_records',
    timestamps: {
      createdAt: 'created_time',
      updatedAt: 'updated_time',
    },
  },
);

const MaintenanceRecord = mongoose.model<Model.MaintenanceRecord>('MaintenanceRecord', maintenanceRecordSchema);

export default MaintenanceRecord;
