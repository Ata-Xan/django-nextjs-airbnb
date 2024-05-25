'use client'
import PropertyItem from './PropertyItem';
import { useEffect, useState } from 'react';
import apiService from '../../services/apiService';

export type PropertyType = {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
}


const PropertyList = () => {
    const [properties, setProperties] = useState<PropertyType[]>([]); // [{}
    const getProperties = async () => {
        const response = await apiService.get('/api/properties/');
        setProperties(response.data);
    };

    useEffect(() => {
        getProperties();
    }, []);

    return (
        <div className="mt-4 grid gird-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {properties.map((property) => 
                (<PropertyItem key={property.id} property= {property}  />)
            )}
        </div>
    );
}

export default PropertyList;