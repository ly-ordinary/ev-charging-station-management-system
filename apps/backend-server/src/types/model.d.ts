declare namespace Model {
  interface Role {
    type: 1 | 2 | 3;
    name: 'admin' | 'maintainer' | 'common';
  }

  interface User {
    name: string;
    username: string;
    role_id: mongoose.Types.ObjectId;
    phone?: string;
    password: string;
  }

  interface ChargingStation {
    name: string;
    status: 'available' | 'occupied' | 'maintenance' | 'offline';
    longitude: number;
    latitude: number;
    address: string;
    created_by: mongoose.Types.ObjectId;
    updated_by?: mongoose.Types.ObjectId;
    description?: string;
  }

  interface MaintenanceRecord {
    station_id: mongoose.Types.ObjectId;
    maintainer_id: mongoose.Types.ObjectId;
    operate_type: string;
    operation: string;
  }
}
