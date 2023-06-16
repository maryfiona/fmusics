import React from "react";
import './Landingpage.css';
// import LandingPage2 from './../assets/LandingPage2.jpg'
// import LandingPage3 from './../assets/LandingPage3.jpg'
// import LandingPage4 from './../assets/LandingPage4.jpg'
import musicc from './../assets/musicc.jpg'




const Landingpage = () => {
    


    return (
        <>


            <div className="container-fluid p-0 mb-5 pb-5">
                <img className="wid" src={musicc} alt ="iimm" />
                 <div className="  fiona">
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3 fio">
                                    <h6 className="text-white text-uppercase  mb-3 animate__animated animate__fadeInDown fiii">MUSIC</h6>
                                    <h3 className="display-3 text-capitalize mb-3">Fiona .9ja</h3>
                                    <p className="mx-md-5 px-5 ">Get unlimited access to our music and sound effects catalog for your videos, streams and podcasts. Our license comes with all necessary rights included.</p>
                                    <a className="btn btn-outline-dark py-3 px-4 mt-3 animate__animated animate__fadeInUp" href="/">Get started</a>
                                </div>
                            </div>
                        </div>
                        
                    
                
                <form className="navbar-form navbar-left" action="/action_page.php">
                    <div className="form-group">
                        <input type="text" className="form-control ariyo" placeholder="Search " />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>





        </>
    );
}
export default Landingpage;