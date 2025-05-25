import { useState } from 'react';
import { bases, getAssetsByBase } from '../data/mockData';
import { Box, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function Bases() {
  const [selectedBase, setSelectedBase] = useState(bases[0]);
  
  const baseAssets = getAssetsByBase(selectedBase.id);
  const vehicleCount = baseAssets.filter(a => a.category === 'vehicle').reduce((sum, a) => sum + a.quantity, 0);
  const weaponCount = baseAssets.filter(a => a.category === 'weapon').reduce((sum, a) => sum + a.quantity, 0);
  const ammoCount = baseAssets.filter(a => a.category === 'ammunition').reduce((sum, a) => sum + a.quantity, 0);
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Military Bases</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Base Directory</h2>
          <div className="space-y-2">
            {bases.map((base) => (
              <button
                key={base.id}
                onClick={() => setSelectedBase(base)}
                className={`w-full flex items-center justify-between p-3 rounded-md ${
                  selectedBase.id === base.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  <span>{base.name}</span>
                </div>
                <span className="text-xs text-gray-500">{base.location}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold">{selectedBase.name}</h2>
            <p className="text-gray-500">{selectedBase.location}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-3">
                <Box size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Vehicles</p>
                <p className="text-lg font-semibold">{vehicleCount}</p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-orange-100 text-orange-600 mr-3">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Weapons</p>
                <p className="text-lg font-semibold">{weaponCount}</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-3">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Ammunition</p>
                <p className="text-lg font-semibold">{ammoCount}</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-3">Assets at {selectedBase.name}</h3>
          <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Asset
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {baseAssets.map((asset) => (
                  <tr key={asset.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{asset.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 capitalize">{asset.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{asset.quantity.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        asset.status === 'available' ? 'bg-green-100 text-green-800' : 
                        asset.status === 'assigned' ? 'bg-blue-100 text-blue-800' : 
                        asset.status === 'in-transit' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {asset.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { bases, getAssetsByBase } from '../data/mockData';
import { Box, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function Bases() {
  const [selectedBase, setSelectedBase] = useState(bases[0]);
  
  const baseAssets = getAssetsByBase(selectedBase.id);
  const vehicleCount = baseAssets.filter(a => a.category === 'vehicle').reduce((sum, a) => sum + a.quantity, 0);
  const weaponCount = baseAssets.filter(a => a.category === 'weapon').reduce((sum, a) => sum + a.quantity, 0);
  const ammoCount = baseAssets.filter(a => a.category === 'ammunition').reduce((sum, a) => sum + a.quantity, 0);
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Military Bases</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Base Directory</h2>
          <div className="space-y-2">
            {bases.map((base) => (
              <button
                key={base.id}
                onClick={() => setSelectedBase(base)}
                className={`w-full flex items-center justify-between p-3 rounded-md ${
                  selectedBase.id === base.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  <span>{base.name}</span>
                </div>
                <span className="text-xs text-gray-500">{base.location}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold">{selectedBase.name}</h2>
            <p className="text-gray-500">{selectedBase.location}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-3">
                <Box size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Vehicles</p>
                <p className="text-lg font-semibold">{vehicleCount}</p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-orange-100 text-orange-600 mr-3">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Weapons</p>
                <p className="text-lg font-semibold">{weaponCount}</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-3">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Ammunition</p>
                <p className="text-lg font-semibold">{ammoCount}</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-3">Assets at {selectedBase.name}</h3>
          <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Asset
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {baseAssets.map((asset) => (
                  <tr key={asset.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{asset.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 capitalize">{asset.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{asset.quantity.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        asset.status === 'available' ? 'bg-green-100 text-green-800' : 
                        asset.status === 'assigned' ? 'bg-blue-100 text-blue-800' : 
                        asset.status === 'in-transit' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {asset.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { bases, getAssetsByBase } from '../data/mockData';
import { Box, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function Bases() {
  const [selectedBase, setSelectedBase] = useState(bases[0]);
  
  const baseAssets = getAssetsByBase(selectedBase.id);
  const vehicleCount = baseAssets.filter(a => a.category === 'vehicle').reduce((sum, a) => sum + a.quantity, 0);
  const weaponCount = baseAssets.filter(a => a.category === 'weapon').reduce((sum, a) => sum + a.quantity, 0);
  const ammoCount = baseAssets.filter(a => a.category === 'ammunition').reduce((sum, a) => sum + a.quantity, 0);
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Military Bases</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Base Directory</h2>
          <div className="space-y-2">
            {bases.map((base) => (
              <button
                key={base.id}
                onClick={() => setSelectedBase(base)}
                className={`w-full flex items-center justify-between p-3 rounded-md ${
                  selectedBase.id === base.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  <span>{base.name}</span>
                </div>
                <span className="text-xs text-gray-500">{base.location}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold">{selectedBase.name}</h2>
            <p className="text-gray-500">{selectedBase.location}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-3">
                <Box size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Vehicles</p>
                <p className="text-lg font-semibold">{vehicleCount}</p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-orange-100 text-orange-600 mr-3">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Weapons</p>
                <p className="text-lg font-semibold">{weaponCount}</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-3">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Ammunition</p>
                <p className="text-lg font-semibold">{ammoCount}</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-3">Assets at {selectedBase.name}</h3>
          <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Asset
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {baseAssets.map((asset) => (
                  <tr key={asset.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{asset.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 capitalize">{asset.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{asset.quantity.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        asset.status === 'available' ? 'bg-green-100 text-green-800' : 
                        asset.status === 'assigned' ? 'bg-blue-100 text-blue-800' : 
                        asset.status === 'in-transit' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {asset.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { bases, getAssetsByBase } from '../data/mockData';
import { Box, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function Bases() {
  const [selectedBase, setSelectedBase] = useState(bases[0]);
  
  const baseAssets = getAssetsByBase(selectedBase.id);
  const vehicleCount = baseAssets.filter(a => a.category === 'vehicle').reduce((sum, a) => sum + a.quantity, 0);
  const weaponCount = baseAssets.filter(a => a.category === 'weapon').reduce((sum, a) => sum + a.quantity, 0);
  const ammoCount = baseAssets.filter(a => a.category === 'ammunition').reduce((sum, a) => sum + a.quantity, 0);
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Military Bases</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Base Directory</h2>
          <div className="space-y-2">
            {bases.map((base) => (
              <button
                key={base.id}
                onClick={() => setSelectedBase(base)}
                className={`w-full flex items-center justify-between p-3 rounded-md ${
                  selectedBase.id === base.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  <span>{base.name}</span>
                </div>
                <span className="text-xs text-gray-500">{base.location}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold">{selectedBase.name}</h2>
            <p className="text-gray-500">{selectedBase.location}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-3">
                <Box size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Vehicles</p>
                <p className="text-lg font-semibold">{vehicleCount}</p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-orange-100 text-orange-600 mr-3">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Weapons</p>
                <p className="text-lg font-semibold">{weaponCount}</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-3">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Ammunition</p>
                <p className="text-lg font-semibold">{ammoCount}</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-3">Assets at {selectedBase.name}</h3>
          <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Asset
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {baseAssets.map((asset) => (
                  <tr key={asset.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{asset.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 capitalize">{asset.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{asset.quantity.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        asset.status === 'available' ? 'bg-green-100 text-green-800' : 
                        asset.status === 'assigned' ? 'bg-blue-100 text-blue-800' : 
                        asset.status === 'in-transit' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {asset.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { bases, getAssetsByBase } from '../data/mockData';
import { Box, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function Bases() {
  const [selectedBase, setSelectedBase] = useState(bases[0]);
  
  const baseAssets = getAssetsByBase(selectedBase.id);
  const vehicleCount = baseAssets.filter(a => a.category === 'vehicle').reduce((sum, a) => sum + a.quantity, 0);
  const weaponCount = baseAssets.filter(a => a.category === 'weapon').reduce((sum, a) => sum + a.quantity, 0);
  const ammoCount = baseAssets.filter(a => a.category === 'ammunition').reduce((sum, a) => sum + a.quantity, 0);
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Military Bases</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Base Directory</h2>
          <div className="space-y-2">
            {bases.map((base) => (
              <button
                key={base.id}
                onClick={() => setSelectedBase(base)}
                className={`w-full flex items-center justify-between p-3 rounded-md ${
                  selectedBase.id === base.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  <span>{base.name}</span>
                </div>
                <span className="text-xs text-gray-500">{base.location}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold">{selectedBase.name}</h2>
            <p className="text-gray-500">{selectedBase.location}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-3">
                <Box size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Vehicles</p>
                <p className="text-lg font-semibold">{vehicleCount}</p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-orange-100 text-orange-600 mr-3">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Weapons</p>
                <p className="text-lg font-semibold">{weaponCount}</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-3">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Ammunition</p>
                <p className="text-lg font-semibold">{ammoCount}</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-3">Assets at {selectedBase.name}</h3>
          <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Asset
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {baseAssets.map((asset) => (
                  <tr key={asset.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{asset.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 capitalize">{asset.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{asset.quantity.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        asset.status === 'available' ? 'bg-green-100 text-green-800' : 
                        asset.status === 'assigned' ? 'bg-blue-100 text-blue-800' : 
                        asset.status === 'in-transit' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {asset.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { bases, getAssetsByBase } from '../data/mockData';
import { Box, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function Bases() {
  const [selectedBase, setSelectedBase] = useState(bases[0]);
  
  const baseAssets = getAssetsByBase(selectedBase.id);
  const vehicleCount = baseAssets.filter(a => a.category === 'vehicle').reduce((sum, a) => sum + a.quantity, 0);
  const weaponCount = baseAssets.filter(a => a.category === 'weapon').reduce((sum, a) => sum + a.quantity, 0);
  const ammoCount = baseAssets.filter(a => a.category === 'ammunition').reduce((sum, a) => sum + a.quantity, 0);
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Military Bases</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Base Directory</h2>
          <div className="space-y-2">
            {bases.map((base) => (
              <button
                key={base.id}
                onClick={() => setSelectedBase(base)}
                className={`w-full flex items-center justify-between p-3 rounded-md ${
                  selectedBase.id === base.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  <span>{base.name}</span>
                </div>
                <span className="text-xs text-gray-500">{base.location}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold">{selectedBase.name}</h2>
            <p className="text-gray-500">{selectedBase.location}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-3">
                <Box size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Vehicles</p>
                <p className="text-lg font-semibold">{vehicleCount}</p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-orange-100 text-orange-600 mr-3">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Weapons</p>
                <p className="text-lg font-semibold">{weaponCount}</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-3">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Ammunition</p>
                <p className="text-lg font-semibold">{ammoCount}</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-3">Assets at {selectedBase.name}</h3>
          <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Asset
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {baseAssets.map((asset) => (
                  <tr key={asset.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{asset.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 capitalize">{asset.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{asset.quantity.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        asset.status === 'available' ? 'bg-green-100 text-green-800' : 
                        asset.status === 'assigned' ? 'bg-blue-100 text-blue-800' : 
                        asset.status === 'in-transit' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {asset.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { bases, getAssetsByBase } from '../data/mockData';
import { Box, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function Bases() {
  const [selectedBase, setSelectedBase] = useState(bases[0]);
  
  const baseAssets = getAssetsByBase(selectedBase.id);
  const vehicleCount = baseAssets.filter(a => a.category === 'vehicle').reduce((sum, a) => sum + a.quantity, 0);
  const weaponCount = baseAssets.filter(a => a.category === 'weapon').reduce((sum, a) => sum + a.quantity, 0);
  const ammoCount = baseAssets.filter(a => a.category === 'ammunition').reduce((sum, a) => sum + a.quantity, 0);
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Military Bases</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Base Directory</h2>
          <div className="space-y-2">
            {bases.map((base) => (
              <button
                key={base.id}
                onClick={() => setSelectedBase(base)}
                className={`w-full flex items-center justify-between p-3 rounded-md ${
                  selectedBase.id === base.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  <span>{base.name}</span>
                </div>
                <span className="text-xs text-gray-500">{base.location}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold">{selectedBase.name}</h2>
            <p className="text-gray-500">{selectedBase.location}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-3">
                <Box size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Vehicles</p>
                <p className="text-lg font-semibold">{vehicleCount}</p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-orange-100 text-orange-600 mr-3">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Weapons</p>
                <p className="text-lg font-semibold">{weaponCount}</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-3">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Ammunition</p>
                <p className="text-lg font-semibold">{ammoCount}</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-3">Assets at {selectedBase.name}</h3>
          <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Asset
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {baseAssets.map((asset) => (
                  <tr key={asset.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{asset.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 capitalize">{asset.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{asset.quantity.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        asset.status === 'available' ? 'bg-green-100 text-green-800' : 
                        asset.status === 'assigned' ? 'bg-blue-100 text-blue-800' : 
                        asset.status === 'in-transit' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {asset.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { bases, getAssetsByBase } from '../data/mockData';
import { Box, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function Bases() {
  const [selectedBase, setSelectedBase] = useState(bases[0]);
  
  const baseAssets = getAssetsByBase(selectedBase.id);
  const vehicleCount = baseAssets.filter(a => a.category === 'vehicle').reduce((sum, a) => sum + a.quantity, 0);
  const weaponCount = baseAssets.filter(a => a.category === 'weapon').reduce((sum, a) => sum + a.quantity, 0);
  const ammoCount = baseAssets.filter(a => a.category === 'ammunition').reduce((sum, a) => sum + a.quantity, 0);
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Military Bases</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Base Directory</h2>
          <div className="space-y-2">
            {bases.map((base) => (
              <button
                key={base.id}
                onClick={() => setSelectedBase(base)}
                className={`w-full flex items-center justify-between p-3 rounded-md ${
                  selectedBase.id === base.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  <span>{base.name}</span>
                </div>
                <span className="text-xs text-gray-500">{base.location}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold">{selectedBase.name}</h2>
            <p className="text-gray-500">{selectedBase.location}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-3">
                <Box size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Vehicles</p>
                <p className="text-lg font-semibold">{vehicleCount}</p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-orange-100 text-orange-600 mr-3">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Weapons</p>
                <p className="text-lg font-semibold">{weaponCount}</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-3">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Ammunition</p>
                <p className="text-lg font-semibold">{ammoCount}</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-3">Assets at {selectedBase.name}</h3>
          <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Asset
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {baseAssets.map((asset) => (
                  <tr key={asset.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{asset.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 capitalize">{asset.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{asset.quantity.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        asset.status === 'available' ? 'bg-green-100 text-green-800' : 
                        asset.status === 'assigned' ? 'bg-blue-100 text-blue-800' : 
                        asset.status === 'in-transit' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {asset.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { bases, getAssetsByBase } from '../data/mockData';
import { Box, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function Bases() {
  const [selectedBase, setSelectedBase] = useState(bases[0]);
  
  const baseAssets = getAssetsByBase(selectedBase.id);
  const vehicleCount = baseAssets.filter(a => a.category === 'vehicle').reduce((sum, a) => sum + a.quantity, 0);
  const weaponCount = baseAssets.filter(a => a.category === 'weapon').reduce((sum, a) => sum + a.quantity, 0);
  const ammoCount = baseAssets.filter(a => a.category === 'ammunition').reduce((sum, a) => sum + a.quantity, 0);
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Military Bases</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Base Directory</h2>
          <div className="space-y-2">
            {bases.map((base) => (
              <button
                key={base.id}
                onClick={() => setSelectedBase(base)}
                className={`w-full flex items-center justify-between p-3 rounded-md ${
                  selectedBase.id === base.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  <span>{base.name}</span>
                </div>
                <span className="text-xs text-gray-500">{base.location}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold">{selectedBase.name}</h2>
            <p className="text-gray-500">{selectedBase.location}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-3">
                <Box size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Vehicles</p>
                <p className="text-lg font-semibold">{vehicleCount}</p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-orange-100 text-orange-600 mr-3">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Weapons</p>
                <p className="text-lg font-semibold">{weaponCount}</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-3">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Ammunition</p>
                <p className="text-lg font-semibold">{ammoCount}</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-3">Assets at {selectedBase.name}</h3>
          <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Asset
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {baseAssets.map((asset) => (
                  <tr key={asset.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{asset.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 capitalize">{asset.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{asset.quantity.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        asset.status === 'available' ? 'bg-green-100 text-green-800' : 
                        asset.status === 'assigned' ? 'bg-blue-100 text-blue-800' : 
                        asset.status === 'in-transit' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {asset.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { bases, getAssetsByBase } from '../data/mockData';
import { Box, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function Bases() {
  const [selectedBase, setSelectedBase] = useState(bases[0]);
  
  const baseAssets = getAssetsByBase(selectedBase.id);
  const vehicleCount = baseAssets.filter(a => a.category === 'vehicle').reduce((sum, a) => sum + a.quantity, 0);
  const weaponCount = baseAssets.filter(a => a.category === 'weapon').reduce((sum, a) => sum + a.quantity, 0);
  const ammoCount = baseAssets.filter(a => a.category === 'ammunition').reduce((sum, a) => sum + a.quantity, 0);
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Military Bases</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Base Directory</h2>
          <div className="space-y-2">
            {bases.map((base) => (
              <button
                key={base.id}
                onClick={() => setSelectedBase(base)}
                className={`w-full flex items-center justify-between p-3 rounded-md ${
                  selectedBase.id === base.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  <span>{base.name}</span>
                </div>
                <span className="text-xs text-gray-500">{base.location}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold">{selectedBase.name}</h2>
            <p className="text-gray-500">{selectedBase.location}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-3">
                <Box size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Vehicles</p>
                <p className="text-lg font-semibold">{vehicleCount}</p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-orange-100 text-orange-600 mr-3">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Weapons</p>
                <p className="text-lg font-semibold">{weaponCount}</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-3">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Ammunition</p>
                <p className="text-lg font-semibold">{ammoCount}</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-3">Assets at {selectedBase.name}</h3>
          <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Asset
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {baseAssets.map((asset) => (
                  <tr key={asset.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{asset.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 capitalize">{asset.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{asset.quantity.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        asset.status === 'available' ? 'bg-green-100 text-green-800' : 
                        asset.status === 'assigned' ? 'bg-blue-100 text-blue-800' : 
                        asset.status === 'in-transit' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {asset.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { bases, getAssetsByBase } from '../data/mockData';
import { Box, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function Bases() {
  const [selectedBase, setSelectedBase] = useState(bases[0]);
  
  const baseAssets = getAssetsByBase(selectedBase.id);
  const vehicleCount = baseAssets.filter(a => a.category === 'vehicle').reduce((sum, a) => sum + a.quantity, 0);
  const weaponCount = baseAssets.filter(a => a.category === 'weapon').reduce((sum, a) => sum + a.quantity, 0);
  const ammoCount = baseAssets.filter(a => a.category === 'ammunition').reduce((sum, a) => sum + a.quantity, 0);
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Military Bases</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Base Directory</h2>
          <div className="space-y-2">
            {bases.map((base) => (
              <button
                key={base.id}
                onClick={() => setSelectedBase(base)}
                className={`w-full flex items-center justify-between p-3 rounded-md ${
                  selectedBase.id === base.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  <span>{base.name}</span>
                </div>
                <span className="text-xs text-gray-500">{base.location}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold">{selectedBase.name}</h2>
            <p className="text-gray-500">{selectedBase.location}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-3">
                <Box size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Vehicles</p>
                <p className="text-lg font-semibold">{vehicleCount}</p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-orange-100 text-orange-600 mr-3">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Weapons</p>
                <p className="text-lg font-semibold">{weaponCount}</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-3">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Ammunition</p>
                <p className="text-lg font-semibold">{ammoCount}</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-3">Assets at {selectedBase.name}</h3>
          <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Asset
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {baseAssets.map((asset) => (
                  <tr key={asset.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-
