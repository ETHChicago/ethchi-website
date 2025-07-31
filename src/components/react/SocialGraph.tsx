import React, { useState, useEffect } from 'react';

const SocialGraph = () => {
  const [attestations, setAttestations] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAttestations = async () => {
      try {
        setLoading(true);
        setError('');
        
        console.log('Starting to fetch attestations...');
        
        const response = await fetch('https://base.easscan.org/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
              query Attestations {
                attestations(where: {
                  schemaId: {equals: "0x9de0a92bb14e92843a7403687baeadddef1cc34a477dd22a88c71c0be71a173d"}, 
                  decodedDataJson: {contains: "Chicagoan"}
                }) {
                  id
                  attester
                  recipient
                  decodedDataJson
                }
              }
            `,
          }),
        });

        console.log('Response status:', response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('GraphQL result:', result);

        if (result.errors) {
          console.error('GraphQL errors:', result.errors);
          throw new Error(`GraphQL error: ${JSON.stringify(result.errors)}`);
        }

        const allAttestations = result.data.attestations;
        console.log('Fetched attestations:', allAttestations);

        const formattedAttestations = allAttestations.map((attestation) => {
          const decodedData = JSON.parse(attestation.decodedDataJson);
          console.log('Decoded data for', attestation.id, ':', decodedData);
          
          // Extract data from the nested structure
          const nameData = decodedData.find(item => item.name === 'name');
          const roleData = decodedData.find(item => item.name === 'role');
          const contextData = decodedData.find(item => item.name === 'context');
          
          const name = nameData?.value?.value || 'N/A';
          const role = roleData?.value?.value || 'N/A';
          const context = contextData?.value?.value || '';
          
          // For organization, we'll use the name field since it contains "Chicagoan"
          const organization = name === 'Chicagoan' ? 'ETHChicago Community' : name;
          
          console.log('Parsed attestation:', { id: attestation.id, name, role, organization, context });

          return {
            id: attestation.id,
            attester: attestation.attester,
            recipient: attestation.recipient,
            name,
            organization,
            role,
            context,
          };
        });

        console.log('Formatted attestations:', formattedAttestations);
        setAttestations(formattedAttestations);

        const uniqueOrgs = [...new Set(formattedAttestations.map(att => att.organization))];
        console.log('Unique organizations:', uniqueOrgs);
        setOrganizations(uniqueOrgs);

      } catch (e) {
        console.error('Error fetching attestations:', e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAttestations();
  }, []);

  const filteredAttestations = attestations
    .filter(att => !selectedOrganization || att.organization === selectedOrganization)
    .filter(att => !roleFilter || att.role.toLowerCase().includes(roleFilter.toLowerCase()));

  const truncateAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-brand mx-auto mb-4"></div>
          <p className="text-xl">Loading attestations...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Filters Section */}
      <div className="bg-secondary-brand/10 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-primary-brand mb-6">Filters</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Role Filter */}
          <div>
            <label htmlFor="roleFilter" className="block text-sm font-medium mb-2">
              Search by Role
            </label>
            <input
              id="roleFilter"
              type="text"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              placeholder="Enter role (e.g., developer, founder, designer)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-brand text-gray-900"
            />
          </div>

          {/* Organization Filter */}
          <div>
            <label htmlFor="orgFilter" className="block text-sm font-medium mb-2">
              Filter by Organization
            </label>
            <select
              id="orgFilter"
              value={selectedOrganization}
              onChange={(e) => setSelectedOrganization(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-brand text-gray-900"
            >
              <option value="">All Organizations</option>
              {organizations.map((org) => (
                <option key={org} value={org}>
                  {org}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Clear Filters */}
        {(selectedOrganization || roleFilter) && (
          <button
            onClick={() => {
              setSelectedOrganization('');
              setRoleFilter('');
            }}
            className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Organizations List */}
      {organizations.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary-brand mb-4">Organizations</h2>
          <div className="flex flex-wrap gap-2">
            {organizations.map((org) => (
              <button
                key={org}
                onClick={() => setSelectedOrganization(org === selectedOrganization ? '' : org)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedOrganization === org
                    ? 'bg-primary-brand text-white'
                    : 'bg-secondary-brand/20 text-primary-type hover:bg-secondary-brand/40'
                }`}
              >
                {org}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results Summary */}
      <div className="mb-6">
        <p className="text-lg">
          Showing <span className="font-bold text-primary-brand">{filteredAttestations.length}</span> of{' '}
          <span className="font-bold">{attestations.length}</span> attestations
          {selectedOrganization && (
            <span> from <span className="font-bold text-primary-brand">{selectedOrganization}</span></span>
          )}
          {roleFilter && (
            <span> with role containing "<span className="font-bold text-primary-brand">{roleFilter}</span>"</span>
          )}
        </p>
      </div>

      {/* Attestations Grid */}
      {filteredAttestations.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No attestations found matching your filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAttestations.map((attestation) => (
            <div
              key={attestation.id}
              className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="space-y-3">
                {/* Name/Title */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {attestation.name}
                  </h3>
                </div>

                {/* Organization */}
                {attestation.organization && (
                  <div>
                    <span className="text-sm font-medium text-gray-600">Organization:</span>
                    <p className="text-sm font-semibold text-primary-brand">
                      {attestation.organization}
                    </p>
                  </div>
                )}

                {/* Role */}
                {attestation.role && attestation.role !== 'N/A' && (
                  <div>
                    <span className="text-sm font-medium text-gray-600">Role:</span>
                    <p className="text-sm text-gray-900">{attestation.role}</p>
                  </div>
                )}

                {/* Recipient Address */}
                <div>
                  <span className="text-sm font-medium text-gray-600">Address:</span>
                  <p className="text-sm font-mono text-gray-800 break-all">
                    {truncateAddress(attestation.recipient)}
                  </p>
                </div>

                {/* Attester */}
                <div>
                  <span className="text-sm font-medium text-gray-600">Attested by:</span>
                  <p className="text-sm font-mono text-gray-700 break-all">
                    {truncateAddress(attestation.attester)}
                  </p>
                </div>

                {/* Context */}
                {attestation.context && (
                  <div>
                    <span className="text-sm font-medium text-gray-600">Context:</span>
                    <p className="text-xs text-gray-600 break-all">{attestation.context}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialGraph;
