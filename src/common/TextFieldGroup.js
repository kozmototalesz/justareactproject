import React from 'react';


const TextFieldGroup = ({
    placeholder,
    value,
    onChange,
    name
}) => {
    return(
        <div>
            <input className="searchField" type="name" name={name} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    );
};


export default TextFieldGroup;