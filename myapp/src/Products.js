import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Products(){

    const userapi = useSelector((state)=>state.counter.userapidata);

    console.log(JSON.stringify(userapi));

    return (
        <>
                <h1>Products Component</h1>
        </>
       
    ); 
}

export default Products;