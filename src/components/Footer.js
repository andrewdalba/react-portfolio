import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages.css';


function Footer() {
    return (
        <Fragment>
            <footer className="footer">
                <p className="footerText">Created by: Andrew D'Alba  -- <a href="mailto:andrewdalba@gmail.com">andrewdalba@gmail.com</a></p>
            </footer>
        </Fragment>
    )
}

export default Footer;