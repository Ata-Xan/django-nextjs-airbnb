import Categories from "./components/categories/Categories"
import PropertyList from "./components/properties/PropertyList";


export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
     <Categories/>
     <PropertyList/>
    </main>
  );
}
