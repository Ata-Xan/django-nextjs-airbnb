import Category from './Category';

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <Category category="Beach" src="/beach.jpeg" />
            <Category category="Cabin" src="/cabins.jpeg" />
            <Category category="Tiny Homes" src="/tiny-homes.jpg" />
            <Category category="Vilas" src="/vilas.jpg" />
        </div>
    );
}

export default Categories;