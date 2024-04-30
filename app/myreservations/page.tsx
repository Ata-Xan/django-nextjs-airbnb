import Image from 'next/image';
import ReservedProperty from '../components/ReservedProperty';


const MyReservations = () => {
    return (
        <div className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="pt-6 pb-2">
                <h1 className="mt-6 mb-2 text-2xl">
                    My Resevations
                </h1>
            </div>
            <ReservedProperty src="/beach-1.jpeg" propertyName="Beach House" checkinDate="2022-12-12" checkoutDate="2022-12-16" numberOfNights="4" toalPrice="800" />
            <ReservedProperty src="/beach-1.jpeg" propertyName="Beach House" checkinDate="2022-12-12" checkoutDate="2022-12-16" numberOfNights="4" toalPrice="800" />

            <ReservedProperty src="/beach-1.jpeg" propertyName="Beach House" checkinDate="2022-12-12" checkoutDate="2022-12-16" numberOfNights="4" toalPrice="800" />


        </div>
    )
}

export default MyReservations
