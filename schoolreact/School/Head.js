import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Head(){
    return(
        <div class="Head">
            <div className="Head1" id="hm">
            <div class="I0"></div>
            <div class="I1">
                <h2>SPRINGDALE PUBLIC SCHOOL</h2>
                <h1><SchoolIcon style={{"fontSize":"55","color":"black"}}/>  VIDYA BHAVAN</h1>
            </div>
            <div class="I2">
                <p ><PhoneIcon/> +91 22 4589 2345</p><br />
                <p ><PhoneIcon/> +91 54 1245 3687</p>
            </div>
            </div>

            <div class="Navb">
        <ul class="n">
            <li id="p"><a href="#hm">HOME</a></li>
            <li id="p"><a href="#about">ABOUT US</a>
                <ul class="n1">
                    <li><a href="">PVG History</a></li>
                    <li><a href="*">Founders</a></li>
                    <li><a href="*">Governing Body</a></li>
                    <li class="n3"><a href="*">Branches    <ArrowForwardIosIcon/> </a>
                        <ul class="n2">
                            <li><a href=".">Munbai</a></li>
                            <li><a href=".">Pune</a></li>
                            <li><a href=".">Kolhapur</a></li>
                            <li><a href=".">Sangali</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li id="p"><a href="#">SECTIONS</a>
                <ul class="s">
                    <li><a href="@">Pre-Primary</a></li>
                    <li><a href="@">Primary</a></li>
                    <li><a href="@">Secondary</a></li>
                    <li><a href="@">Jr.Clg</a></li>
                    <li><a href="@">Degree College</a></li>
                </ul>
            </li>
            <li id="p"><a href="#">ACADEMIC</a>
                <ul class="acd">
                    <li><a href="z">Achivement</a></li>
                    <li><a href="z">Event</a></li>
                    <li><a href="z">Result</a></li>
                </ul>
            </li>
            <li id="p"><a href="#fc">FACILIY</a>
                <ul class="fac">
                    <li><a href="x">Facility</a></li>
                    <li><a href="x">Turf</a></li>
                </ul>
            </li>
            <li id="p"><a href="#">ADMISSION</a></li>
            <li id="p"><a href="#glr">GALLERY</a></li>
            <li id="p"><a href="#cts">CONTECTS US</a></li>
        </ul>

        
    </div>
        </div>
    )
}