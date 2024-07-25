import React from "react";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ScienceIcon from '@mui/icons-material/Science';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
export default function Fct(){
    return(
 <div class="Fct">
       <div className="fc1">
        <h1 id="fc">Facilities</h1>
       </div>
    <div class="ic">
        <div class="ic1">
            <h2><LibraryBooksIcon style={{"fontSize":"100"}}/> </h2>
            <h1>Library</h1>
        </div>
        <div class="ic2">
            <h2><ScienceIcon style={{"fontSize":"100"}}/> </h2>
            <h1>Laboratory</h1>
        </div>
        <div class="ic3">
        <h2><SportsCricketIcon style={{"fontSize":"100"}}/></h2>
            <h1>Playground</h1>
        </div>
    </div>
 </div>
    )
}