import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './features/counter/counterSlice';

function Home(){

    // console.log("storeeee=>",store.getState());

    // const storeval = store.getState();

    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
                <h1>Home Component</h1>
                {/* <h1>{count}</h1>
                <button onClick={()=>dispatch(increment())}>Click Here</button> */}
        </>
       
    ); 
}

export default Home;