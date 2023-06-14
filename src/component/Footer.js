import React from "react";
import './Footer.css';
import { FaInstagram, FaWhatsapp ,FaGithub} from 'react-icons/fa';





const Footer = () => {
    return(
        <>
        <footer className="music ">
            <div className="container-fluid bg-dark text-light musics">
                <div className="row  justify-content-center">
                    <div className="col-md-12 text-center">
                        <h2 className="footer-heading">
                           <p href="#" className="logo"> 
                                FMUSICS
                                

                            </p>

                        </h2>
                        <h6 className="menu">
                       <p> <a href="Home.js">Home</a></p>
							  <p><a href="Home.js">section1</a> </p>

							 <p><a href="Home.js">section2</a></p>
							<p><a href="Home.js">Fotter</a> </p>
						
							<p><a href="Home.js">Contact</a></p>

                        </h6>


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
                <div className="row mt-5">
					<div className="col-md-12 text-center">
						<p className="copyright">
					  Copyright &copy; All rights reserved<i className="ion-ios-heart" aria-hidden="true"></i> by <a href="http://wa.me/+2349078398501" >fiotech</a>
					 </p>
					</div>
				</div>

            </div>
            

        </footer>
		
        </>
    );
}
export default Footer;