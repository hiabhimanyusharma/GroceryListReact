import React, {useEffect} from 'react'

const Message = ({message,removeMessage}) => {
    const {msg,type} = message;
    useEffect(() => {
    const timeout = setTimeout(() => {
            removeMessage();
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <h4 className={type}>{msg}</h4>
    );
}

export default Message
