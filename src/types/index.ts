// Enums
export enum UserRole {
  Commander = 'commander',
  Logistics = 'logistics'
}

export enum AssetCategory {
  Vehicle = 'vehicle',
  Weapon = 'weapon',
  Ammunition = 'ammunition'
}

export enum AssetStatus {
  Available = 'available',
  Assigned = 'assigned',
  InTransit = 'in-transit',
  Expended = 'expended'
}

export enum TransferStatus {
  Pending = 'pending',
  InTransit = 'in-transit',
  Completed = 'completed'
}

export enum MovementType {
  Purchase = 'purchase',
  TransferIn = 'transfer-in',
  TransferOut = 'transfer-out',
  Assignment = 'assignment',
  Expenditure = 'expenditure'
}

// Interfaces
export interface User {
  id: string;
  name: string;
  role: UserRole;
  base: string;
}

export interface Asset {
  id: string;
  name: string;
  category: AssetCategory;
  quantity: number;
  base: string;
  status: AssetStatus;
  assignedTo: string | null;
}

export interface Base {
  id: string;
  name: string;
  location: string;
}

export interface Transfer {
  id: string;
  assetId: string;
  assetName: string;
  quantity: number;
  fromBase: string;
  toBase: string;
  date: string;
  status: TransferStatus;
  initiatedBy: string;
}

export interface AssetMovement {
  id: string;
  assetId: string;
  assetName: string;
  category: AssetCategory;
  type: MovementType;
  quantity: number;
  base: string;
  date: string;
  relatedTransferId?: string;
}

export interface BalanceData {
  opening: number;
  closing: number;
  netMovement: number;
  purchases: number;
  transfersIn: number;
  transfersOut: number;
  assigned: number;
  expended: number;
}
