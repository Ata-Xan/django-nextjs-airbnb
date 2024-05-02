import ConversationDetail from '@/app/components/inbox/ConversationDetail';
import Conversation from '@/app/components/inbox/ConversationDetail';
import Image from 'next/image';



const ConversationPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6">
            <ConversationDetail/>
        </main>
    )
}

export default ConversationPage;