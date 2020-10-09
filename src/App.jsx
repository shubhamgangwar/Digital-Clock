import React, { useState } from 'react'

const App = () => {

    const state = useState();

    let Time = new Date().toLocaleTimeString();
    
    const[ctime,Settime] = useState(Time);


    const Updatetime = () => {

        let Time = new Date().toLocaleString();
        Settime(Time);

    };
    setInterval(Updatetime, 1000);

    return(
        <>  <h2 id="heading"> 🕦 Digital Clock 🕦</h2>
            <h1>{ctime}</h1>
            <h2>"Time changes everything except something within us which is always surprised by change."<br/> <span align="center">"Thomas Hardy"</span></h2>
            
        </>
    )
};

export default App;
