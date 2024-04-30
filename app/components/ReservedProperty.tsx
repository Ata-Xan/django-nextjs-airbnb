
import Image from 'next/image';
const ReservedProperty = (
    { src, propertyName, checkinDate, checkoutDate, numberOfNights, toalPrice }:
        { src: string, propertyName: string, checkinDate: string, checkoutDate: string, numberOfNights: string, toalPrice: string }) => {
    return (

        <div className="space-y-4">
            <div className="p-5 mt-4 grid grid-cols-1  md:grid-cols-4 gap-4 shadow-md rounded-xl border border-gray-300">

                <div className="col-span-1">
                    <div className="relative overflow-hidden aspect-square rounded-xl ">
                        <Image src={src} layout="fill" objectFit="cover" alt={propertyName}
                            className="hover:scale-110 object-cover transition h-full w-full" />
                    </div>
                </div>

                <div className="col-span-1 md:col-span-3">
                    <h2 className="mb-4 text-xl"><strong>{propertyName}</strong></h2>

                    <p className="mb-2"><strong>Check-in: </strong>{checkinDate}</p>
                    <p className="mb-2"><strong>Check-out: </strong>{checkoutDate}</p>



                    <p className="mb-2"><strong>Number of Nights: </strong>{numberOfNights}</p>
                    <p className="mb-4"><strong>Total Price: {toalPrice}$</strong></p>

                    {/* <div className="flex justify-end"> */}
                    <div className="mt-6 inline-block px-6 cursor-pointer py-4 bg-airbnb text-white rounded-xl">Go to the Property</div>
                    {/* </div> */}

                </div>

            </div>
        </div>



    )
}

export default ReservedProperty;
