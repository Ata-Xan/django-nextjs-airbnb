import ProfileImage from "./ProfileImage";
import Message from "./Message";


const MessageBox = ({ isSent, content, time, date, profilePicture, profileName }: {
    isSent: boolean, content: string, time: string, date: string,
    profilePicture: string, profileName: string
}) => {
    const base_style = 'py-4 px-6 grid grid-cols-8 gap-4';
    const messageStyle = isSent ? base_style : base_style + ' ml-[20%] bg-blue-200';

    if (isSent) {
        return (
            <div className={`${base_style}`}>
            <div className="col-span-2  items-center flex justify-self-end">
                <ProfileImage src={profilePicture} username={profileName}  />
            </div>

            <div className={`w-[80%] py-4 px-6 bg-gray-200 rounded-xl col-span-6`} >
                <Message content={content} date={date} time={time} />
            </div>

        </div>
        )
    }

    else {

        return (
            <div className={`${base_style}  rounded-xl `}>
                <div className="col-span-6 ml-[20%] w-[80%] bg-blue-200 py-4 px-6 rounded-xl flex">
                    <Message content={content} date={date} time={time} />
                </div>
                <div className="col-span-1  items-center flex">
                    <ProfileImage src={profilePicture} username={profileName} />
                </div>
            </div>
        )

    }
}


export default MessageBox;