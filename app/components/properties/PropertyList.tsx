import PropertyItem from './PropertyItem';
const PropertyList = ()=>{
    return (
        <div className="mt-4 grid gird-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <PropertyItem/>
            <PropertyItem/>
            <PropertyItem/>
            <PropertyItem/>
            <PropertyItem/>
            <PropertyItem/>
        </div>
    );
}

export default PropertyList;