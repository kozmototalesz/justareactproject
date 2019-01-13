import React from 'react';


const ContactCard = ({
    id,
    name,
    email,
    phone,
    address,
    onDelete
}) => {
        return (
            <div className="contactCard">
                    <div className="rows">{name}</div>
                    <div className="rows">{email}</div>
                    <div className="rows">{phone}</div>
                    <div className="rows">{address}</div>
                    { onDelete && <button onClick={onDelete} id={id}>remove</button> }
            </div>
        );
};


export default ContactCard;