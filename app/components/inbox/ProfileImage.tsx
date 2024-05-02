import Image from 'next/image';
const ProfileImage = ({src, username}:{src:string, username:string})=>{
    return(
        <div className="space-y-4">
            <div>
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src={src} alt="Profile Picture" width={40} height={40} />
                </div>
                <p className="text-sm text-center">{username}</p>
            </div>
        </div>
    )   

}

export default ProfileImage;