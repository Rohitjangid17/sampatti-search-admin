import React, { useState } from "react";

const Property: React.FC = () => {
    const [view, setView] = useState<'grid' | 'list'>('grid');

    // Static property data
    const properties = [
        {
            id: 1,
            name: "Luxury Ocean View Villa",
            price: 1200000,
            location: "Malibu, California",
            images: [
                "https://via.placeholder.com/300x200?text=Property+Image+1",
                "https://via.placeholder.com/300x200?text=Property+Image+2",
                "https://via.placeholder.com/300x200?text=Property+Image+3",
            ],
            description: "Experience luxury living in this stunning ocean view villa with modern amenities and spacious interiors.",
        },
        {
            id: 2,
            name: "Modern Family Home",
            price: 850000,
            location: "San Francisco, California",
            images: [
                "https://via.placeholder.com/300x200?text=Property+Image+4",
                "https://via.placeholder.com/300x200?text=Property+Image+5",
                "https://via.placeholder.com/300x200?text=Property+Image+6",
            ],
            description: "A beautiful family home located in a quiet neighborhood.",
        },
        // Add more properties as needed
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Page Title and Actions */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-bold text-gray-800">Properties</h1>
                <div>
                    <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 mr-2">
                        Add Property
                    </button>
                    <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-400">
                        Search Property
                    </button>
                </div>
            </div>

            {/* View Toggle */}
            <div className="mb-4">
                <button
                    className={`mr-2 px-4 py-2 font-semibold ${view === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'} rounded-md`}
                    onClick={() => setView('grid')}
                >
                    Grid View
                </button>
                <button
                    className={`px-4 py-2 font-semibold ${view === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'} rounded-md`}
                    onClick={() => setView('list')}
                >
                    List View
                </button>
            </div>

            {/* Property Listings */}
            <div className={`grid ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'gap-4'}`}>
                {properties.map(property => (
                    <div key={property.id} className={`bg-white rounded-lg shadow-lg p-4 ${view === 'list' ? 'flex' : ''}`}>
                        {view === 'list' && (
                            <img className="w-48 h-32 object-cover rounded-md mr-4" src={property.images[0]} alt={property.name} />
                        )}
                        <div className={`${view === 'list' ? 'flex-1' : ''}`}>
                            <h2 className="text-xl font-semibold text-gray-800">{property.name}</h2>
                            <p className="text-blue-600 font-bold">${property.price.toLocaleString()}</p>
                            <p className="text-gray-600">{property.location}</p>
                            {view === 'grid' && (
                                <img className="w-full h-40 object-cover rounded-md my-2" src={property.images[0]} alt={property.name} />
                            )}
                            <p className="text-gray-600">{property.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Property;
