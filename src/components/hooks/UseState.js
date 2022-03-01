import React from 'react';
import Footer from './Footer';
import "./style.css";



const UseState = () => {
    // const initialData = 20;
    const [myNum, setMyNum] = React.useState(10);

    return (
        <>
            <div className='center_div'>
                <p>{myNum}</p>
                <div className='button2' onClick={() => setMyNum(myNum + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Increasing
                </div>
                <div className='button2' onClick={() => setMyNum(myNum - 1)}>
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

export default UseState;