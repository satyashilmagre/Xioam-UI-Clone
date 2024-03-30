import React from 'react';
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <img alt='mi logo' className='mi-logo' src='Images/mi logo.png'/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav  navbar-links">
                            <a class="nav-link mx-3" aria-current="page" href="/">Store</a>
                            <a class="nav-link mx-3" href="/">Phone</a>
                            <a class="nav-link mx-3" href="/">TV & Smart Home</a>
                            <a class="nav-link mx-3" href="/">Tablet</a>
                            <a class="nav-link mx-3" href="/">LifeStyle</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
