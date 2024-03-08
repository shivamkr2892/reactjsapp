import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, update, fetchapi } from './features/counter/counterSlice';

function Home(props){

    const count = useSelector((state)=>state.counter.value);

    const userapi = useSelector((state)=>state.counter.userapidata);

    console.log(JSON.stringify(userapi));

    const count1 = {};

    const dispatch = useDispatch();
    
    return (
        <>
                <h1>Home Component</h1>
                {/* {JSON.stringify(userapi)} */}
                <h1>{count}</h1>
                <button onClick={()=>dispatch({type: 'counter/increment', payload: 1})}>Increment</button>
                <button onClick={()=>dispatch({type: 'counter/decrement', payload: 1})}>Decrement</button>
                <button onClick={()=>dispatch(fetchapi())}>Click</button>

                {/* <div><button style={{marginLeft:117}} onClick={()=>props.param(msg)}>say</button></div> */}
        </>
       
    ); 
}

export default Home;