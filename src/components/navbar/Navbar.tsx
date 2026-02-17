import Link from "next/link";
import AccessibilityControls from "@/components/navbar/AccessibilityControls";

export default function Navbar() {
  return (
    <header className="new-nav-header">

      {/* ================= TOP BLUE BAR ================= */}
      <section className="top-nav">
        <div className="container">
          <ul className="nav justify-content-end align-items-center flex-nowrap mb-0">

            <li className="nav-item">
              <Link href="/" className="nav-link text-white">
                <i className="fa fa-home"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#" className="nav-link text-white">
                Screen Reader Access
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#" className="nav-link text-white">
                Skip to Main Content
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#" className="nav-link text-white">
                Sitemap
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#" className="nav-link text-white">
                Outsource Karmi Portal
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#" className="nav-link text-white">
                हिंदी संस्करण
              </Link>
            </li>

            {/* Accessibility (CLIENT ONLY) */}
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle text-white"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-wheelchair"></i>
              </a>

              <AccessibilityControls />
            </li>

            <li className="nav-item">
              <Link href="#" className="nav-link text-white">
                VBTS
              </Link>
            </li>

            <li className="nav-item ms-1">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Search"
                style={{ width: "160px" }}
              />
            </li>
          </ul>
        </div>
      </section>

      {/* ================= LOGO + MAIN MENU ================= */}
      <section className="logo-section py-3">
        <div className="container">
          <div className="row align-items-center">

            {/* LOGO */}
            <div className="col-md-3">
              <Link href="/">
                <img
                  src="/images/logo.png"
                  alt="UP Power Corporation Limited"
                  className="img-fluid"
                />
              </Link>
            </div>

            {/* NAVIGATION */}
            <div className="col-md-9">
              <nav className="navbar navbar-expand-lg navbar-light p-0 main-navbar">

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#mainNavbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNavbar">
                  <ul className="navbar-nav ms-auto">

                    {/* ABOUT */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#">
                        About UPPCL
                      </a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="#">Introduction</Link></li>
                        <li><Link className="dropdown-item" href="#">Mission / Vision Statement</Link></li>
                        <li><Link className="dropdown-item" href="#">Organisation Structure</Link></li>
                        <li><Link className="dropdown-item" href="#">Role / Functions / Responsibilities</Link></li>
                        <li><Link className="dropdown-item" href="#">Agencies under Administrative Control</Link></li>
                      </ul>
                    </li>

                    {/* ACT & RULES */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#">
                        Act & Rules
                      </a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="#">Acts</Link></li>
                        <li><Link className="dropdown-item" href="#">Rules</Link></li>
                        <li><Link className="dropdown-item" href="#">Policy</Link></li>

                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">Public Notice</a>
                          <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" href="#">Case1 & Case2</Link></li>
                          </ul>
                        </li>

                        <li className="dropdown-submenu">
                          <Link className="dropdown-item dropdown-toggle" href="#">Orders</Link>
                          <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" href="#">Circular</Link></li>
                            <li><Link className="dropdown-item" href="#">Office Orders</Link></li>
                            <li><Link className="dropdown-item" href="#">Sports Order</Link></li>
                          </ul>
                        </li>

                        <li><Link className="dropdown-item" href="#">Corporate Tax and GST</Link></li>
                        <li><Link className="dropdown-item" href="#">Cyber Security</Link></li>
                        <li><Link className="dropdown-item" href="#">Supply Code</Link></li>
                      </ul>
                    </li>

                    {/* INVESTORS */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#">
                        Investors
                      </a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="#">Financial Information</Link></li>
                        <li><Link className="dropdown-item" href="#">Annual Report</Link></li>
                        <li><Link className="dropdown-item" href="#">Board of Directors & KMP</Link></li>
                      </ul>
                    </li>

                    {/* TENDERS */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#">
                        Tenders
                      </a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="#">Tenders</Link></li>
                        <li><Link className="dropdown-item" href="#">Black List Company</Link></li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" href="#">RTI</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" href="#">Vacancy/Results</Link>
                    </li>

                    {/* CONTACT */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#">
                        Contact Us
                      </a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="#">Reach Us</Link></li>
                        <li><Link className="dropdown-item" href="#">Headquarter / Discom</Link></li>

                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">Discoms</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="https://www.dvvnl.org/" target="_blank">DVVNL</a></li>
                            <li><a className="dropdown-item" href="https://kesco.co.in/" target="_blank">KESCO</a></li>
                          </ul>
                        </li>

                        <li><Link className="dropdown-item" href="#">Feedback</Link></li>
                      </ul>
                    </li>

                  </ul>
                </div>

              </nav>
            </div>

          </div>
        </div>
      </section>

    </header>
  );
}
