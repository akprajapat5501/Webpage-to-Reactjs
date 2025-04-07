import React from "react";

const Contact=()=>{
    return(
        <>
        <div className="container">
            <div className="row text-center">
                <h1>Contact</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, dolore?</p>
            </div>
            <div className="row">
                <div className="col">
                <form>

<div data-mdb-input-init className="form-outline mb-4">
  <input type="email" id="form2Example1" className="form-control" />
  <label className="form-label" htmlFor="form2Example1">Email address</label>
</div>


<div data-mdb-input-init className="form-outline mb-4">
  <input type="password" id="form2Example2" className="form-control" />
  <label className="form-label" htmlFor="form2Example2">Password</label>
</div>


<div className="row mb-4">
  <div className="col d-flex justify-content-center">
    
    <div className="form-check">
      <input className="form-check-input" type="checkbox"  id="form2Example34" defaultChecked />
      <label className="form-check-label" htmlFor="form2Example34"> Remember me </label>
    </div>
  </div>

  <div className="col">
    
    <a href="#!">Forgot password?</a>
  </div>
</div>


<button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Sign in</button>


<div className="text-center">
  <p>Not a member? <a href="#!">Register</a></p>
  <p>or sign up with:</p>
  <button  data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
    <i className="fab fa-facebook-f"></i>
  </button>

  <button  data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
    <i className="fab fa-google"></i>
  </button>

  <button  data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
    <i className="fab fa-twitter"></i>
  </button>

  <button  data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
    <i className="fab fa-github"></i>
  </button>
</div>
</form>
                </div>
                <div className="col">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.018828551701!2d72.55409277516455!3d23.023080879173335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85558e268fcd%3A0xe5ba6fa8382060ed!2sFelix%20IT%20Systems%20%7C%20UI%20UX%20Design%20Courses%20in%20Ahmedabad%20%7C%20Fullstack%20courses%20with%20Placement!5e0!3m2!1sen!2sin!4v1743099811994!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;