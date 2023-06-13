import React from "react";
import './Footer.css';
import { FaInstagram, FaWhatsapp ,FaGithub} from 'react-icons/fa';





const Footer = () => {
    return(
        <>
        <footer className="music">
            <div className="container">
                <div className="row  justify-content-center">
                    <div className="col-md-12 text-center">
                        <h2 className="footer-heading">
                           <p href="#" className="logo"> 
                                FMUSICS
                                

                            </p>

                        </h2>
                        <p className="menu">
                       <p> <a href="Home.js">Home</a></p>
							  <p><a href="Home.js">Agent</a> </p>

							 <p><a href="Home.js">About</a></p>
							<p><a href="Home.js">Listing</a> </p>
							<p><a href="Home.js">Blog</a></p>
							<p><a href="Home.js">Contact</a></p>

                        </p>


                    </div>
                    <a href="https://www.instagram.com/annafiona11/">
        <FaInstagram size={32} />
      </a>
      <a href="http://wa.me/+2349078398501">
        <FaWhatsapp size={32} />
      </a>
      <a href="https://github.com/maryfiona">
      <FaGithub size={32} />
      </a>
      

                </div>

            </div>

        </footer>
		
        </>
    );
}
export default Footer;