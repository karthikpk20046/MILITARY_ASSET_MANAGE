import { 
  Asset, 
  Base, 
  Transfer, 
  User, 
  AssetMovement, 
  UserRole, 
  AssetCategory, 
  AssetStatus, 
  TransferStatus, 
  MovementType 
} from '../types';

// Current user for the demo
export const currentUser: User = {
  id: 'user1',
  name: 'John Doe',
  role: UserRole.Commander,
  base: 'base1'
};

// Bases
export const bases: Base[] = [
  { id: 'base1', name: 'Alpha Base', location: 'Northern Region' },
  { id: 'base2', name: 'Bravo Base', location: 'Eastern Region' },
  { id: 'base3', name: 'Charlie Base', location: 'Southern Region' },
  { id: 'base4', name: 'Delta Base', location: 'Western Region' },
];

// Assets
export const assets: Asset[] = [
  { id: 'asset1', name: 'M1 Abrams Tank', category: AssetCategory.Vehicle, quantity: 12, base: 'base1', status: AssetStatus.Available, assignedTo: null },
  { id: 'asset2', name: 'Humvee', category: AssetCategory.Vehicle, quantity: 30, base: 'base1', status: AssetStatus.Available, assignedTo: null },
  { id: 'asset3', name: 'M4 Carbine', category: AssetCategory.Weapon, quantity: 150, base: 'base1', status: AssetStatus.Available, assignedTo: null },
  { id: 'asset4', name: '5.56mm Ammunition', category: AssetCategory.Ammunition, quantity: 10000, base: 'base1', status: AssetStatus.Available, assignedTo: null },
  { id: 'asset5', name: 'Bradley Fighting Vehicle', category: AssetCategory.Vehicle, quantity: 8, base: 'base2', status: AssetStatus.Available, assignedTo: null },
  { id: 'asset6', name: 'Javelin Missile System', category: AssetCategory.Weapon, quantity: 15, base: 'base2', status: AssetStatus.Available, assignedTo: null },
  { id: 'asset7', name: 'Black Hawk Helicopter', category: AssetCategory.Vehicle, quantity: 5, base: 'base3', status: AssetStatus.Available, assignedTo: null },
  { id: 'asset8', name: '7.62mm Ammunition', category: AssetCategory.Ammunition, quantity: 8000, base: 'base3', status: AssetStatus.Available, assignedTo: null },
  { id: 'asset9', name: 'Stryker APC', category: AssetCategory.Vehicle, quantity: 10, base: 'base4', status: AssetStatus.Available, assignedTo: null },
  { id: 'asset10', name: 'M777 Howitzer', category: AssetCategory.Weapon, quantity: 4, base: 'base4', status: AssetStatus.Available, assignedTo: null },
];

// Transfers
export const transfers: Transfer[] = [
  { 
    id: 'transfer1', 
    assetId: 'asset2', 
    assetName: 'Humvee', 
    quantity: 5, 
    fromBase: 'base1', 
    toBase: 'base2', 
    date: '2023-10-15', 
    status: TransferStatus.Completed, 
    initiatedBy: 'user1' 
  },
  { 
    id: 'transfer2', 
    assetId: 'asset3', 
    assetName: 'M4 Carbine', 
    quantity: 20, 
    fromBase: 'base1', 
    toBase: 'base3', 
    date: '2023-11-02', 
    status: TransferStatus.InTransit, 
    initiatedBy: 'user1' 
  },
  { 
    id: 'transfer3', 
    assetId: 'asset4', 
    assetName: '5.56mm Ammunition', 
    quantity: 2000, 
    fromBase: 'base1', 
    toBase: 'base4', 
    date: '2023-11-10', 
    status: TransferStatus.Pending, 
    initiatedBy: 'user1' 
  },
];

// Asset Movements
export const assetMovements: AssetMovement[] = [
  { 
    id: 'mov1', 
    assetId: 'asset1', 
    assetName: 'M1 Abrams Tank', 
    category: AssetCategory.Vehicle,
    type: MovementType.Purchase, 
    quantity: 2, 
    base: 'base1', 
    date: '2023-09-01' 
  },
  { 
    id: 'mov2', 
    assetId: 'asset2', 
    assetName: 'Humvee', 
    category: AssetCategory.Vehicle,
    type: MovementType.TransferOut, 
    quantity: 5, 
    base: 'base1', 
    date: '2023-10-15',
    relatedTransferId: 'transfer1' 
  },
  { 
    id: 'mov3', 
    assetId: 'asset2', 
    assetName: 'Humvee', 
    category: AssetCategory.Vehicle,
    type: MovementType.TransferIn, 
    quantity: 5, 
    base: 'base2', 
    date: '2023-10-15',
    relatedTransferId: 'transfer1' 
  },
  { 
    id: 'mov4', 
    assetId: 'asset3', 
    assetName: 'M4 Carbine', 
    category: AssetCategory.Weapon,
    type: MovementType.Assignment, 
    quantity: 50, 
    base: 'base1', 
    date: '2023-10-20' 
  },
  { 
    id: 'mov5', 
    assetId: 'asset4', 
    assetName: '5.56mm Ammunition', 
    category: AssetCategory.Ammunition,
    type: MovementType.Expenditure, 
    quantity: 1000, 
    base: 'base1', 
    date: '2023-10-25' 
  },
];

// Helper functions to simulate API calls
export const getAssetsByBase = (baseId: string): Asset[] => {
  return assets.filter(asset => asset.base === baseId);
};

export const getAssetMovementsByBase = (baseId: string): AssetMovement[] => {
  return assetMovements.filter(movement => movement.base === baseId);
};

export const getTransfersByBase = (baseId: string): Transfer[] => {
  return transfers.filter(transfer => transfer.fromBase === baseId || transfer.toBase === baseId);
};

// Define BalanceData interface
export interface BalanceData {
  totalPurchased: number;
  totalTransferredIn: number;
  totalTransferredOut: number;
  totalAssigned: number;
  totalExpended: number;
  netMovement: number;
}

// Calculate balance data for a base within a date range
export const calculateBalanceData = (baseId: string, startDate: string, endDate: string): BalanceData => {
  // Filter movements by base and date range (inclusive)
  const relevantMovements = assetMovements.filter(
    movement => 
      movement.base === baseId &&
      movement.date >= startDate &&
      movement.date <= endDate
  );

  let totalPurchased = 0;
  let totalTransferredIn = 0;
  let totalTransferredOut = 0;
  let totalAssigned = 0;
  let totalExpended = 0;

  relevantMovements.forEach(movement => {
    switch (movement.type) {
      case MovementType.Purchase:
        totalPurchased += movement.quantity;
        break;
      case MovementType.TransferIn:
        totalTransferredIn += movement.quantity;
        break;
      case MovementType.TransferOut:
        totalTransferredOut += movement.quantity;
        break;
      case MovementType.Assignment:
        totalAssigned += movement.quantity;
        break;
      case MovementType.Expenditure:
        totalExpended += movement.quantity;
        break;
    }
  });

  const netMovement = totalPurchased + totalTransferredIn - totalTransferredOut - totalExpended;

  return {
    totalPurchased,
    totalTransferredIn,
    totalTransferredOut,
    totalAssigned,
    totalExpended,
    netMovement,
  };
};
