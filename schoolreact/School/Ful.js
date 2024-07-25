import React from "react";

import './Sch.css'
import Head from "./Head";
import Hr from "./Hr";
import Abt from "./Abt";
import Fct from "./Fct";
import Grd from "./Grd";
import Glry from "./Glry";
import Cont from "./Cont";

export default function Ful(){
    return(
        <div className="Ful">
            <Head/>
            <Hr/>
            <Abt/>
            <Fct/>
            <Grd/>
            <Glry/>
            <Cont/>
        </div>
    )
}