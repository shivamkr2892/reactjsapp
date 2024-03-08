import React from 'react';
import { useSelector } from 'react-redux';


function Contact(props){

    const apidata = useSelector((state)=>state.counter.value);
    console.log("contact=>",apidata);
    return (
        <>
            <h1>Contact Component</h1>
        </>        
    ); 
}

export default Contact;