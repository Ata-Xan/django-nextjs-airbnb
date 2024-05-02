'use client';
import CustomButton from '../forms/CustomButton';
import MessageBox from './MessageBox';

const ConversationDetail = () => {

    return (

        <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">

            <MessageBox isSent={true} content={`On the March afternoon when I met Brittney Griner in Phoenix, the wildflowers were in peak efflorescence, California poppies and violet cones of lupine exploding everywhere. Griner was in bloom too. She was practicing with some local ballers brought in by her W.N.B.A. team, the Mercury, to prepare its players for the start of the season in May. On the court, Griner was loose, confident, trading jokes with the other players between runs. She snatched a pass out of the air, drove it hard in the paint and pulled up to shoot, the ball kissing the net as it sailed through. Everyone, including Nate Tibbetts, the Mercury’s newly hired head coach, who dropped by to watch, erupted in cheers. Griner nodded to herself in quiet satisfaction, keeping her head down as she jogged back to run the play again.`} time={"20:53"} date={"2024-4-30"} profilePicture={"/profile.jpg"} profileName={"Ata"} />
            <MessageBox isSent={false} content={`On the March afternoon when I met Brittney Griner in Phoenix, the wildflowers were in peak efflorescence, California poppies and violet cones of lupine exploding everywhere. Griner was in bloom too. She was practicing with some local ballers brought in by her W.N.B.A. team, the Mercury, to prepare its players for the start of the season in May. On the court, Griner was loose, confident, trading jokes with the other players between runs. She snatched a pass out of the air, drove it hard in the paint and pulled up to shoot, the ball kissing the net as it sailed through. Everyone, including Nate Tibbetts, the Mercury’s newly hired head coach, who dropped by to watch, erupted in cheers. Griner nodded to herself in quiet satisfaction, keeping her head down as she jogged back to run the play again.`} time={"20:53"} date={"2024-4-30"} profilePicture={"/profile.jpg"} profileName={"Amin"} />
            <MessageBox isSent={true} content={`On the March afternoon when I met Brittney Griner in Phoenix, the wildflowers were in peak efflorescence, California poppies and violet cones of lupine exploding everywhere. Griner was in bloom too. She was practicing with some local ballers brought in by her W.N.B.A. team, the Mercury, to prepare its players for the start of the season in May. On the court, Griner was loose, confident, trading jokes with the other players between runs. She snatched a pass out of the air, drove it hard in the paint and pulled up to shoot, the ball kissing the net as it sailed through. Everyone, including Nate Tibbetts, the Mercury’s newly hired head coach, who dropped by to watch, erupted in cheers. Griner nodded to herself in quiet satisfaction, keeping her head down as she jogged back to run the play again.`} time={"20:53"} date={"2024-4-30"} profilePicture={"/profile.jpg"} profileName={"Ata"} />
            <MessageBox isSent={false} content={`On the March afternoon when I met Brittney Griner in Phoenix, the wildflowers were in peak efflorescence, California poppies and violet cones of lupine exploding everywhere. Griner was in bloom too. She was practicing with some local ballers brought in by her W.N.B.A. team, the Mercury, to prepare its players for the start of the season in May. On the court, Griner was loose, confident, trading jokes with the other players between runs. She snatched a pass out of the air, drove it hard in the paint and pulled up to shoot, the ball kissing the net as it sailed through. Everyone, including Nate Tibbetts, the Mercury’s newly hired head coach, who dropped by to watch, erupted in cheers. Griner nodded to herself in quiet satisfaction, keeping her head down as she jogged back to run the play again.`} time={"20:53"} date={"2024-4-30"} profilePicture={"/profile.jpg"} profileName={"Amin"} />

            <div className="mt-4 py-4 px-6 flex space-x-4">
                <input type="text" placeholder="Type a message" className="p-4 w-full bg-gray-200 rounded-xl" />
                <CustomButton label="send" onClick={()=>{console.log("clicked")}} className={`w-[100px]`}/>
            </div>
        </div>

    )
}

export default ConversationDetail;
