import Image from 'next/image';
import ReservationSidebar from '@/app/components/properties/ReservationSidebar';
const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6  pb-6">

            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative ">
                <Image src="/beach-1.jpeg" className="object-cover w-full h-full" layout="fill" objectFit="cover" alt="Beach" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                <div className="col-span-3">
                    <h1 className="text-4xl font-bold mb-4">Beach House</h1>
                    <p className="text-lg text-gray-500">4 guests - 2 bedrooms - 1 bathroom</p>
                    <hr/>
                    <div className="py-6 flex items-center space-x-4">
                        <Image src="/profile.jpg" width={50} height={50} alt="Username" className='rounded-full' />
                        <p className="text-lg font-bold">Ata Xan</p>
                        <p className="text-gray-500">is your Host</p>
                        
                    </div>
                    <hr />
                    <div className="py-6">
                        <h2 className="text-2xl font-bold mb-4">About this place</h2>
                        <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</p>
                    </div>
                </div>

                <div className="col-span-3">
                    <ReservationSidebar />
                </div>

                {/* <div className="col-span-2">
                    <div className="flex items-center justify-end space-x-4">
                        <span className="text-2xl font-bold">$200</span>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Book Now</button>
                    </div>
                </div> */}





            </div>




        </main>
    );
}
export default PropertyDetailPage;