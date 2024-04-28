import Image from 'next/image';

const Category = ({ category, src }: { category: string; src: string }) =>{
    return (
        <div className="pb-4 flex flex-col items-center spce-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-200">
            <Image src={src} width={20} height={20} alt={`Category - ${category}`} />
            <span className="text-xs">{category}</span>
        </div>
    )
}

export default Category;