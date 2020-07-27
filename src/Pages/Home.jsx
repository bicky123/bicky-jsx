import React from 'react';
import Common from '../Components/Common';
import web from "../images/img2.svg";
const Home = () =>{

    return(
        <>
            <Common
                name="Grow your business with"
                imgsrc={web}
                visit="/services"
                btname="Get Started"
            />

        </>
    );
};

export default Home;