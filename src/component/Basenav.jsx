import React from 'react'

const Basenav = () => {
  return (
    <div>
     <div className="container mt-4 basenav-1">
      <div className="row pt-3">
      <div className="col-md-2 d-none-2 pt-5">
     <a class="navbar-brand text-white mt-5 ms-2" href="#">
     <span className="h1">Jumia</span>
     <img src="Capture.PNG" class = "ms-2 mb-3" alt="" width = "30px" height ="30px" />
    </a>
    </div>
    
    <div className="col-md-6 d-none-2">
    <div className="d-flex flex-column">
      <h5 className="text-center text-light h5">New to Jumia?</h5>
      <h5 className="text-center text-light fs-13 mt-2">Subscribe to our newsletter to get updates on our latest offers!</h5>
      <div className="d-flex input-div">
      <div class="form-floating mb-3 col-8 mx-auto mt-2">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>

    <button className="btn btn-transparent m-2 borderr text-white">Male</button>
    <button className="btn btn-transparent m-2 text-white borderr">Female</button>
      </div>

     
 
    </div>
    
    <div className="d-flex text-light">
      <input class="form-check-input m-2" type="checkbox" value="" aria-label="Checkbox for following text input"/>
       <h1 className="fs-13">
       I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe from newsletters at any time.
       </h1>
      </div>
    </div>
    <div className="col-md mt-3">
      <div className="d-flex text-light">
        <img src="jumialogo2.PNG" alt="" class = "m-2" />
        <span className="d-flex flex-column mt-2">
          <h1 className="fs-13 mt-2">DOWNLOAD JUMIA FREE APP</h1>
          <h1 className="fs-13">Get access to exclusive offers!</h1>
        </span>
      </div>
    </div>

    </div>  

   
    </div>

    <div className="container mt-2">
    <div className="row mt-3 basenav-2">
    <div className="col-md-3 col-xs-12 p-2 text-light">
      <h1 className="h6 mb-2"> Need Help?</h1>  
      <h1 className="h5 mb-2"> <a href="">Chat With US</a> </h1>  
      <h1 className="h5 mb-2"> <a href="">Help Center</a> </h1>  
      <h1 className="h5 mb-2"> <a href="">Contact Us</a> </h1> 
      <h1 className="h5 mb-2">Useful Links</h1>  
      <h1 className="h5 mb-2"> <a href="">Service Center</a> </h1>  
      <h1 className="h5 mb-2"> <a href="">How to Return A product on jumia</a> </h1>  
      <h1 className="h5 mb-2"> <a href="">Delivery Options And Timelines</a> </h1>  
      <h1 className="h5 mb-2"> <a href="">How to shop on jumia</a> </h1> 
      <h1 className="h5 mb-2"> <a href="">Corporate and bulk purchases </a> </h1> 
      <h1 className="h5 mb-2"> <a href=""> Report a product </a></h1> 
      <h1 className="h5 mb-2"> <a href=""> Dispute Resolution Policy </a></h1> 
      <h1 className="h5 mb-2"> <a href=""> Returns and Refunds Timeline </a></h1> 
    </div>  

    <div className="col-md-3 col-xs-12 p-2 text-light">
    <h1 className="h6 mb-3"> About Jumia</h1>  
     <h1 className="h5 mb-2"><a href="">About us</a></h1>
     <h1 className="h5 mb-2"><a href="">Jumia careers</a></h1>
     <h1 className="h5 mb-2"><a href="">Jumia Express</a></h1>
     <h1 className="h5 mb-2"><a href="">Terms and Conditions</a></h1>
     <h1 className="h5 mb-2"><a href="">Privacy Notice</a></h1>
     <h1 className="h5 mb-2"><a href="">Jumia Store Credit Terms & Conditions</a></h1>
     <h1 className="h5 mb-2"><a href="">Jumia Payment Information Guidelines</a></h1>
     <h1 className="h5 mb-2"><a href="">Cookie Notice</a></h1>
     <h1 className="h5 mb-2"><a href="">Jumia Global</a></h1>
     <h1 className="h5 mb-2"><a href="">Official Stores</a></h1>
     <h1 className="h5 mb-2"><a href="">Flash Sales</a></h1>
    </div>
  

<div className="col-md-3 col-xs-12 p-2 text-light">
     <h1 className="h6 mb-3">MAKE MONEY WITH JUMIA</h1>  
     <h1 className="h5 mb-2"><a href="">Sell on Jumia</a></h1>
     <h1 className="h5 mb-2"><a href="">Vendor hub</a></h1>
     <h1 className="h5 mb-2"><a href="">Become a Sales Consultant</a></h1>
     <h1 className="h5 mb-2"><a href="">Join the Jumia KOL Program</a></h1>
</div>

<div className="col-md-3 col-xs-12 p-2 text-light">
    <h1 className="h6 mb-3">JUMIA INTERNATIONAL</h1>  
    <h1 className="h5 mb-2"><a href="">Algeria</a></h1>
    <h1 className="h5 mb-2"><a href="">Egypt</a></h1>
    <h1 className="h5 mb-2"><a href="">Ghana</a></h1>
    <h1 className="h5 mb-2"><a href="">Ivory Coast</a></h1>
    <h1 className="h5 mb-2"><a href="">Kenya</a></h1>
    <h1 className="h5 mb-2"><a href="">Morocco</a></h1>
    <h1 className="h5 mb-2"><a href="">Senegal</a></h1>
    <h1 className="h5 mb-2"><a href="">Uganda</a></h1>
    <h1 className="h5 mb-2"><a href=""></a></h1>

</div>
    </div> 
    </div>
    </div>
  )
}


export default Basenav





