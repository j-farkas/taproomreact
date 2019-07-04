import React from 'react';
import stockPhoto from '../assets/img/GFMCKE.jpg';


function IntroImg() {
    return (
        <div>
            <style jsx>{`
                img {
                    max-width: 100%;
                }

            `}</style>
            <img src={stockPhoto} alt=""/>
        </div>
    );
}

export default IntroImg;
