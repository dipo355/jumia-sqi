import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div class="container">
    <a class="navbar-brand col-3" href="#">
     <img src="jumialogo.png" class = "me-1" alt="" width = "15px" height ="15px" />
     <span className="h6 jumia-top">Sell on Jumia</span>
    </a>

    <a href="" class ="col-2"></a>
    <a class="navbar-brand col" href="#">
     <span className="h6 jumia-top">Jumia</span>
     <img src="jumialogo.png" class = "ms-1" alt="" width = "15px" height ="15px" />
    </a>
  </div>
    </nav>

    <nav class="navbar navbar-expand-lg bg-body-tertiary  bg-light fixed-top">
  <div class="container">

  <a class="navbar-brand" href="#">
     <span className="h1 text-dark">Jumia</span>
     <img src="jumialogo.png" class = "ms-2 mb-3" alt="" width = "30px" height ="30px" />
    </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex col-12 justify-content-evenly align-items-center">

      <form class="d-flex ">
      <div className="border d-flex">
      <span class ="span"><i class = "fa fa-search p-2"></i></span>
      <input class="form-control me-2 jumia-input" type="search" placeholder="Search products, brands and categories" aria-label="Search"  />
      </div>
        <button class="btn ms-3 btn-search" type="submit">Search</button>
      </form>

      <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle user" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  <a href="#"><i className="fa fa-user me-2"></i></a>
  Hi oyedeji
  </a>

  <ul class="dropdown-menu">
    <li class = 'info'>
      <a class="dropdown-item d-flex" href="#">
       <a href="#"><i className="fa faa fa-user-circle mb-3"></i></a>
       <h1 class ='ms-5 ' >My accounts</h1>
      </a>
      </li>

      <li class = 'info'>
      <a class="dropdown-item d-flex" href="#">
       <a href="#"><i className="fa faa fa-file-text mb-3"></i></a>
       <h1 class ='ms-5 ' >Orders</h1>
      </a>
      </li>

      <li class = 'info'>
      <a class="dropdown-item d-flex" href="#">
       <a href="#"><i className="fa faa fa-envelope mb-3"></i></a>
       <h1 class ='ms-5 ' >Inboxs</h1>
      </a>
      </li>

      <li class = 'info'>
      <a class="dropdown-item d-flex" href="#">
       <a href="#"><i className="fa faa fa-heart-o mb-3"></i></a>
       <h1 class ='ms-5 ' >Saved Items</h1>
      </a>
      </li>

      <li class = 'info'>
      <a class="dropdown-item d-flex" href="#">
       <a href="#"><i className="fa faa fa-file-text-o mb-3"></i></a>
       <h1 class ='ms-5 ' >Voucher</h1>
      </a>
      </li>

  </ul>
        </div>      

<span className="d-flex help mt-2">
      <i className="fa faa mt-1 me-2 fa-question-circle-o"></i>
      <p className="p">Help</p>
    </span>

    <span className="d-flex help mt-2">
     <span> <i className="fa faa mt-1 me-2 fa-shopping-cart"></i></span>
      <p className="p">Cart</p>
    </span>

    
    <div class="dropdown d-nonne">
  <a class="btn btn-secondary dropdown-toggle user" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  <a href="#"></a>  Products </a>
    <ul class="dropdown-menu">
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
     </div>   

      </ul>
    </div>
  </div>
</nav>



    </>
  )
}

export default Navbar