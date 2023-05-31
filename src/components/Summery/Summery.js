// import React, { useState } from 'react'
import './Summery.css'
const Summery = () => {
        // const summery =({times}) =>{
        //     const notify =() =>("Wow !! Completed all Events");
        //     const [breakTime, setBreakTime]=useState([0]);
        //     let totalTime =0;
        //     for(let time of times){
        //         totalTime=totalTime.time;
        //     }
        //     const addBreakTime=(time)=>{
        //         setBreakTime(time)
        //         localStorage.setItem('time', time)
        //     }
        //     useState(() =>{
        //         const prevtime= localStorage.getItem('time')
        //         if(prevtime){
        //             setBreakTime(prevTime);
        //         }
        //     },[])
        // }
    return (
        <div className='cart-container'>
            <div className='user-info'>
                <img src="..//../images/images.jpeg" alt="" />
                <p>Raisa</p>
            </div>
        
            <div>
                <h2>Add a break time !!</h2>
                <div className='break-info'>  
                    {/* <p onClick={() => addBreakTime('10')}>10s</p>
                    <p onClick={() => addBreakTime('20')}>20s</p>
                    <p onClick={() => addBreakTime('30')}>30s</p>
                    <p onClick={() => addBreakTime('40')}>40s</p>
                    <p onClick={() => addBreakTime('50')}>50s</p>        */}
                    <p>10s</p>
                    <p>20s</p>
                    <p>30s</p>
                    <p>40s</p>
                    <p>50s</p>
                </div>
            </div>
            <div className='exercise-info'>
                    <h2>Exercise info :</h2>
                <div className='time'>
                    <p>Exercise time:</p>
                    <p> seconds</p>
                </div>
                <div className='btn'>
                    <button >Completed Event</button>
                </div>
            </div>
        </div>
    );
};

export default Summery;