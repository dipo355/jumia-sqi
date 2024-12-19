import React from 'react'
import Carousel from './arousel'
import Banner from './Banner'

const Card = () => {
  return (
    <>
    <div className="container card-jumia-2 mt-3 pt-2 ">
      <div className="col-12 row">
    <div className="col-sm-2 col-xs-5 col-md-3 me-3 mt-2 one shadow d-none-2">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <ul class="navbar-nav justify-content-end flex-grow-1 d-flex flex-column card-nav">
          <li class="nav-item ms-3 d-flex items-card-Appliances">
            <i className="fa fa-television icons-card"></i>
            <a class="nav-link text-dark" aria-current="page" href="#">Appliances</a>
          </li>

          <li class="nav-item ms-3 d-flex items-card-Phones">
            <i className="fa fa-mobile-phone icons-card"></i>
            <a class="nav-link text-dark" aria-current="page" href="#">Phones</a>
          </li>

          <li class="nav-item ms-3 d-flex items-card-Health">
            <i className="fa fa-stethoscope icons-card "></i>
            <a class="nav-link text-dark" aria-current="page" href="#">Health and Beauty</a>
          </li>

          <li class="nav-item ms-3 d-flex items-card-House">
            <i className="fa fa-home icons-card "></i>
            <a class="nav-link text-dark" aria-current="page" href="#">Home & Office</a>
          </li>

          <li class="nav-item ms-3 d-flex items-card-Electronics">
            <i className="fa fa-fax icons-card "></i>
            <a class="nav-link text-dark" aria-current="page" href="#">Electronics</a>
          </li>

          <li class="nav-item ms-3 d-flex items-card-appliances">
            <i className="fa fa-child icons-card "></i>
            <a class="nav-link text-dark" aria-current="page" href="#">Baby Products</a>
          </li>

          <li class="nav-item ms-3 d-flex items-card-appliances">
            <i className="fa fa-apple icons-card "></i>
            <a class="nav-link text-dark" aria-current="page" href="#">SuperMarket</a>
          </li>

          <li class="nav-item ms-3 d-flex items-card-appliances">
            <i className="fa fa-desktop icons-card"></i>
            <a class="nav-link text-dark" aria-current="page" href="#">Computing</a>
          </li>

          <li class="nav-item ms-3 d-flex items-card-appliances">
            <i className="fa fa-television icons-card"></i>
            <a class="nav-link text-dark" aria-current="page" href="#">Appliances</a>
          </li>
        </ul>
        
     </nav> 
      </div>

          <div className="col-sm-12 me-3 col-md-6">
            <Carousel/>
          </div>

      <div className="col-md row mt-2 right-card pb-2">
       <div className="col col-md-12 me-3 p-0 ms-2 ps-2 box-111">
       <ul class="list-group navbar-nav box shadow ps-2">
       <li class="nav-item mt-3">
        <span className="call d-flex">
          <i className="fa fa-phone mt-2 me-3 fs-5"></i>
          <span className="d-flex flex-column ms-2">
            <h1 className="h6 m-0">CALL TO ORDER</h1>
            <p className="p m-0">070-600-0000</p>
          </span>
        </span>
       </li>
     
     
       <li class="nav-item mt-3">
        <span className="call d-flex">
          <i className="fa fa-home m-0 fs-5"></i>
          <span className="d-flex flex-column ms-4">
            <h1 className="h6 m-0">Sell on Jumia</h1>
          </span>
        </span>
       </li>
   
       <li class="nav-item mt-3">
        <span className="call d-flex">
          <i className="fa fa-dropbox m-0 fs-5"></i>
          <span className="d-flex flex-column ms-4">
            <h1 className="h6 m-0">Best Deals</h1>
          </span>
        </span>
       </li>
        </ul>
      
      </div> 

       <div className="col col-md-12 p-0 ms-2 box-111 ps-2">
      <img src="https://ng.jumia.is/cms/0-1-initiatives/jforce/2024/Untitled-3.gif"  class="d-block w-100  jumia-gif shadow" alt="" />
        </div> 
        </div>    
      </div>
    </div>
  
    </>
  )
}

export default Card