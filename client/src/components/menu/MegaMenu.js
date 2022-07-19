//importing bootstrap 5 css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./mega.css";

const MegaMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg p-0 ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          id="navbarSupportedContent"
          className="collapse navbar-collapse "
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown megamenu">
              <a
                 /* Coded by: Sabira Tahsin Khan, github: hello-sabira */
                href="#"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="nav-link dropdown-toggle font-weight-bold dropdown-toggle p-0 "
              >
                All Categories
              </a>
              <div
                aria-labelledby="dropdownMenuButton1"
                className="dropdown-menu border-0 p-0 m-0"
              >
                <div className="container  shadow-sm">
                  <div className=" row  rounded-0 m-2 ">
                    <div className="col-lg-8 col-xl-12">
                      <div className="p-4">
                        <div className="row">
                          <div className="col-lg-6 mb-4">
                            <h6 className="font-weight-bold text-uppercase">
                              Computers & Tablets
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a href="" className="nav-link text-small pb-0">
                                  Laptops
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Computers
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Tablets
                                </a>
                              </li> 
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="font-weight-bold text-uppercase">
                              Phones & Personal Audio
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Mobiles
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Headphones
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Tablets
                                </a>
                              </li>
                              
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="font-weight-bold text-uppercase">
                              Digital Cards
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  iTunes Cards
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  PS4/5 cards
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Anghami Cards
                                </a>
                              </li>
                             
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="font-weight-bold text-uppercase">
                              Home Entertainment
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  TV & Screens
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Audio Equipment
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  TV Stands & Mounts
                                </a>
                              </li>
                             
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="font-weight-bold text-uppercase">
                              Large Home Appliances
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Washing
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Cooking
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Refrigeration
                                </a>
                              </li>
                             
                            </ul>
                          </div>
                          <div className="col-lg-6 mb-4">
                            <h6 className="font-weight-bold text-uppercase">
                              Small Home Appliances
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Food Prep
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Vacuums & Cleanin
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href=""
                                  className="nav-link text-small pb-0 "
                                >
                                  Irons & Steamers
                                </a>
                              </li>
                             
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MegaMenu;
