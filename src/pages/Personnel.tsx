import { useState } from 'react';
import { bases } from '../data/mockData';
// Remove the unused import:
// import { UserRound } from 'lucide-react';

// Mock personnel data since it's not in the original mock data
const mockPersonnel = [
  { id: 'person1', name: 'Major James Wilson', role: 'Base Commander', base: 'base1', contactInfo: { email: 'jwilson@military.gov', phone: '555-123-4567' }, assignedAssets: ['asset1', 'asset3'] },
  { id: 'person2', name: 'Captain Sarah Johnson', role: 'Logistics Officer', base: 'base1', contactInfo: { email: 'sjohnson@military.gov', phone: '555-234-5678' }, assignedAssets: ['asset2'] },
  { id: 'person3', name: 'Lieutenant Michael Chen', role: 'Supply Officer', base: 'base1', contactInfo: { email: 'mchen@military.gov', phone: '555-345-6789' }, assignedAssets: ['asset4'] },
  { id: 'person4', name: 'Colonel Robert Davis', role: 'Base Commander', base: 'base2', contactInfo: { email: 'rdavis@military.gov', phone: '555-456-7890' }, assignedAssets: ['asset5'] },
  { id: 'person5', name: 'Major Emily Rodriguez', role: 'Operations Officer', base: 'base2', contactInfo: { email: 'erodriguez@military.gov', phone: '555-567-8901' }, assignedAssets: ['asset6'] },
  { id: 'person6', name: 'Captain Thomas Williams', role: 'Logistics Officer', base: 'base3', contactInfo: { email: 'twilliams@military.gov', phone: '555-678-9012' }, assignedAssets: ['asset7'] },
  { id: 'person7', name: 'Major Olivia Martinez', role: 'Base Commander', base: 'base3', contactInfo: { email: 'omartinez@military.gov', phone: '555-789-0123' }, assignedAssets: ['asset8'] },
  { id: 'person8', name: 'Lieutenant Daniel Kim', role: 'Supply Officer', base: 'base4', contactInfo: { email: 'dkim@military.gov', phone: '555-890-1234' }, assignedAssets: ['asset9'] },
  { id: 'person9', name: 'Colonel Jessica Thompson', role: 'Base Commander', base: 'base4', contactInfo: { email: 'jthompson@military.gov', phone: '555-901-2345' }, assignedAssets: ['asset10'] },
];

export default function Personnel() {
  const [selectedBase, setSelectedBase] = useState('all');
  const [selectedRole, setSelectedRole] = useState('all');
  
  const getBaseName = (baseId: string) => {
    const base = bases.find(b => b.id === baseId);
    return base ? base.name : 'Unknown Base';
  };
  
  const filteredPersonnel = mockPersonnel.filter(person => {
    if (selectedBase !== 'all' && person.base !== selectedBase) return false;
    if (selectedRole !== 'all' && person.role !== selectedRole) return false;
    return true;
  });
  
  const roles = Array.from(new Set(mockPersonnel.map(p => p.role)));
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Personnel Management</h1>
      
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="baseFilter" className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Base
            </label>
            <select
              id="baseFilter"
              className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedBase}
              onChange={(e) => setSelectedBase(e.target.value)}
            >
              <option value="all">All Bases</option>
              {bases.map((base) => (
                <option key={base.id} value={base.id}>
                  {base.name}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="roleFilter" className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Role
            </label>
            <select
              id="roleFilter"
              className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="all">All Roles</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPersonnel.map(person => (
          <div key={person.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-slate-800 p-4 text-white">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-slate-600 flex items-center justify-center text-xl font-bold">
                  {person.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">{person.name}</h3>
                  <p className="text-slate-300 text-sm">{person.role}</p>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <MapPin size={16} className="text-gray-500 mr-2" />
                  <span>{getBaseName(person.base)}</span>
                </div>
                
                <div className="flex items-center text-sm">
                  <Mail size={16} className="text-gray-500 mr-2" />
                  <span>{person.contactInfo.email}</span>
                </div>
                
                <div className="flex items-center text-sm">
                  <Phone size={16} className="text-gray-500 mr-2" />
                  <span>{person.contactInfo.phone}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 flex items-center">
                  <Shield size={16} className="mr-2" />
                  Assigned Assets
                </h4>
                <div className="mt-2 text-xs text-gray-600">
                  {person.assignedAssets.length > 0 ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {person.assignedAssets.map(assetId => (
                        <li key={assetId}>{assetId}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No assets currently assigned</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
