const Message = ({ content, date, time }: { content: string, date: string, time: string }) => {
    return (
        <div className="flex flex-col">
            <div className="">{content}</div>
            <div className="text-right">
                <p className="text-sm">{time}</p>
            </div>

        </div>
    )
}

export default Message;