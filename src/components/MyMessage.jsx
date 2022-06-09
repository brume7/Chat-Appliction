const MyMessage = ({message}) => {

    if(message.attachments && message.attachments.lenght > 0){
        return(
            <img src={message.attachment[0].file} alt="message-attachment" className="messge-image" style={{float:'right'}} />
        )
    }
    
    return(
        <div className="message" style={{float:'right', marginRight: '18px', color:"white",backgroundColor:'#3b2a50'}}>
            {message.text}
        </div>
    )

}

export default MyMessage;