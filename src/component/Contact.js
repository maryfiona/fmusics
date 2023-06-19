import React from "react";
import  imgs  from './../assets/imgs';
import  './Contact.css'





const Contact =  () => {
    return (


        <div className="container-fluid music"> 
        <div className="row">
            <div className="col-md-6 b">
            <img width={400} src={imgs} alt="Imagee"/>
            </div>
            <div className="col-md-6  b">
            <form className="contact1-form validate-form" action="https://formspree.io/f/xqkorgvp" method="POST">
				<span className="contact1-form-title ">
					Get in touch
				</span>

				<div className="wrap-input1 validate-input " data-validate = "Name is required">
					<input className="input1" type="text" name="name" placeholder="Name" />
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input " data-validate = "Valid email is required: aguchidimmamaryfiona@gmail.com">
					<input className="input1" type="text" name="email" placeholder="Email" />
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input " data-validate = "Subject is required">
					<input className="input1" type="text" name="subject" placeholder="Subject" />
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea className="input1" name="message" placeholder="Message"></textarea>
					<span className="shadow-input1"></span>
				</div>

				<div className="container-contact1-form-btn">
					<button className="contact1-form-btn">
						<span>
							Send Email
							<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>
				</div>
			</form>
            </div>
        </div>
        </div>
    )
    
        
		
    


};
export default Contact ;