import { useState } from "react";
import React from 'react';
const ShowMore=()=>{
    const [show, setShow]=useState(false);
    return(
        <div>
        <div>
            <button onClick={e=>{setShow(!show)}}>Show More</button>
        </div>
        {show?<Content/>:""}
        </div>
      
    );
}

const Content=()=>{
    return(
        <div>
            content
        </div>
    );
}

export default ShowMore;