import React, { useReducer } from 'react';
import Footer from './Footer';
import "./style.css";

const reducer = (state, action) => {
    if (action.type === "Increasing") {
        state = state + 1;
    }
    if (action.type === "Decreasing") {
        state = state - 1;
    }
    return state;
};

const UseReducer = () => {
    // const initialData = 20;
    // const [myNum, setMyNum] = React.useState(10);

    const initialData = 10;
    const [state, dispatch] = useReducer(reducer, initialData)

    return (
        <>
            <div className='center_div'>
                <p>{state}</p>
                <div className='button2' onClick={() => dispatch({ type: "Increasing" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Increasing
                </div>
                <div className='button2' onClick={() => dispatch({ type: "Decreasing" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Decreasing
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default UseReducer;