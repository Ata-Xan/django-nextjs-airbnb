import Image from 'next/image';
import ReservedProperty from '../components/ReservedProperty';
import Conversation from '../components/inbox/conversation';


const InboxPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6 ">
            <div className="pt-6 pb-2 space-y-4">
                <Conversation />
                <Conversation />
                <Conversation />

            </div>
        </main>
    )
}

export default InboxPage;