import { useState, useEffect } from 'react';
import { transfers, bases } from '../data/mockData';
import FilterBar from '../components/FilterBar';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function Transfers() {
  const [filteredTransfers, setFilteredTransfers] = useState(transfers);
  const [expandedTransfer, setExpandedTransfer] = useState<string | null>(null);
  
  const handleFilterChange = (filters: {
    base: string;
    equipmentType: string;
    dateRange: [string, string];
  }) => {
    let filtered = [...transfers];
    
    // Apply base filter
    if (filters.base !== 'all') {
      filtered = filtered.filter(
        transfer => transfer.fromBase === filters.base || transfer.toBase === filters.base
      );
    }
    
    // Apply date range filter
    filtered = filtered.filter(
      transfer => transfer.date >= filters.dateRange[0] && transfer.date <= filters.dateRange[1]
    );
    
    setFilteredTransfers(filtered);
  };

  const getBaseName = (baseId: string) => {
    const base = bases.find(b => b.id === baseId);
    return base ? base.name : 'Unknown Base';
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-transit':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleExpand = (transferId: string) => {
    if (expandedTransfer === transferId) {
      setExpandedTransfer(null);
    } else {
      setExpandedTransfer(transferId);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Transfer Requests & History</h1>
      
      <FilterBar onFilterChange={handleFilterChange} />
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Asset
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  From
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  To
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTransfers.map((transfer) => (
                <tr key={transfer.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button 
                      onClick={() => toggleExpand(transfer.id)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {expandedTransfer === transfer.id ? 
                        <ChevronDown size={20} /> : 
                        <ChevronRight size={20} />
                      }
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{transfer.assetName}</div>
                    <div className="text-sm text-gray-500">{transfer.assetId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{transfer.quantity}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{getBaseName(transfer.fromBase)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{getBaseName(transfer.toBase)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{transfer.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(transfer.status)}`}>
                      {transfer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
