import React from 'react';

function Logo() {
    return (
        <div className='header-logo' >
            <img src={require("../../assets/images/dmlogo.avif")} alt='app logo' />
            <h2>
                Digital Boost Pro
            </h2>
        </div>
    );
}

export default Logo;
