import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom px-4">
        <div className="container-fluid">

          {/* Logo */}
          <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
            <span className="text-primary">ROSTER</span>&nbsp;GRID
          </a>

          {/* Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Center Menu */}
          <div className="collapse navbar-collapse  justify-content-center" id="navbarMain">
            <ul className="navbar-nav gap-2 bg-light rounded-5 p-2">

              <li className="nav-item">
                <a className="nav-link" href="#">Dashboard</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Roster</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Communications</a>
              </li>

              <li className="nav-item ">
                <a className="nav-link active fw-semibold text-primary bg-primary bg-opacity-10 rounded-pill px-3" href="#">
                  CRM
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Contracts</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Settings</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">More</a>
              </li>

            </ul>
          </div>

          {/* Right Section */}
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-bell fs-5 text-secondary"></i>
            <span className="fw-medium">Michael</span>

            <div
              className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
              style={{ width: "32px", height: "32px" }}
            >
              M
            </div>
          </div>

        </div>
      </nav>

         {/* Hero Section */}
      <div
        className="container-fluid"
        style={{
          background: "linear-gradient(180deg, #f5f9ff, #eef3ff)",
          padding: "60px",
        }}
      >
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'><h1 className="fw-bold">
          Manage your <span className="text-primary">Deals</span>
        </h1>

        <button className="btn btn-primary mt-3 px-4">
          Get Started
        </button></div>
          <div className='col-lg-6 col-md-6 col-sm-12 mt-2 '><img style={{height:"200px",float:'right'}} src="./client-cover.png" alt="" /></div>
        
        </div>
      </div>
    </>
  );
};

export default Navbar;
