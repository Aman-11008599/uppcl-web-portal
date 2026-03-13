"use client"
import Link from "next/link";
import AccessibilityControls from "@/components/navbar/AccessibilityControls";
import { usePathname } from "next/navigation";

export default function Navbar({
      dictionary,
      lang,
    }: {
      dictionary: any;
      lang: "en" | "hi";
    }) {
      const switchLang = lang === "en" ? "hi" : "en";

  return (
    <header className="new-nav-header">

      {/* ================= TOP BLUE BAR ================= */}
      <section className="top-nav">
        <div className="container">
          <ul className="nav justify-content-end align-items-center flex-nowrap mb-0">

            <li className="nav-item">
              <Link href={`/${lang}`} className="nav-link text-white">
                <i className="fa fa-home"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#" className="nav-link text-white">
                {dictionary.navbar.screenReader}
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#" className="nav-link text-white">
                {dictionary.navbar.skipContent}
              </Link>
            </li>

            <li className="nav-item">
              <Link href="#" className="nav-link text-white">
                {dictionary.navbar.sitemap}
              </Link>
            </li>

            <li className="nav-item">
              <Link href="https://opp.uppclonline.com" className="nav-link text-white">
                {dictionary.navbar.outsourcedPortal}
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/${switchLang}`} className="nav-link text-white">
                {dictionary.navbar.languageSwitch}
              </Link>
              {/* <Link href={switchPath} className="nav-link text-white">
                {lang === "en" ? "हिंदी संस्करण" : "English Version"}
              </Link> */}
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
              <Link href="https://vbts.uppcl.org/" className="nav-link text-white">
                {dictionary.navbar.vbts}
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
                        {dictionary.navbar.about.title}
                      </a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href={`/${lang}/about-uppcl/introduction`}>{dictionary.navbar.about.introduction}</Link></li>
                        <li><Link className="dropdown-item" href={`/${lang}/about-uppcl/mission-vision`}>{dictionary.navbar.about.missionVision}</Link></li>
                        <li><Link className="dropdown-item" href={`/${lang}/about-uppcl/organization-structure`}>{dictionary.navbar.about.organizationStructure}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.about.role}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.about.agencies}</Link></li>
                      </ul>
                    </li>

                    {/* ACT & RULES */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#">
                        {dictionary.navbar.actRules.title}
                      </a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.actRules.acts}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.actRules.rules}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.actRules.policy}</Link></li>

                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">{dictionary.navbar.actRules.publicNotice.title}</a>
                          <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" href="#">{dictionary.navbar.actRules.publicNotice.case1}</Link></li>
                          </ul>
                        </li>

                        <li className="dropdown-submenu">
                          <Link className="dropdown-item dropdown-toggle" href="#">{dictionary.navbar.actRules.orders.title}</Link>
                          <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" href="#">{dictionary.navbar.actRules.orders.circular}</Link></li>
                            <li><Link className="dropdown-item" href="#">{dictionary.navbar.actRules.orders.officeOrders}</Link></li>
                            <li><Link className="dropdown-item" href="#">{dictionary.navbar.actRules.orders.sportsOrder}</Link></li>
                          </ul>
                        </li>

                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.actRules.tax}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.actRules.cyber}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.actRules.supplyCode}</Link></li>
                      </ul>
                    </li>

                    {/* INVESTORS */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#">
                        {dictionary.navbar.investors.title}
                      </a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.investors.financial}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.investors.informationLodr}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.investors.disclosuresLodr}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.investors.policies}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.investors.iepfDetails}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.investors.noticeTds}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.investors.financialInfo}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.investors.annualReport}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.investors.board}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.investors.noticeTan}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.investors.investorsGrievances}</Link></li>
                      </ul>
                    </li>

                    {/* TENDERS */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#">
                        {dictionary.navbar.tenders.title}
                      </a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.tenders.tenders}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.tenders.blacklist}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.tenders.cancellationAgreement}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.tenders.withdrawalBlackListed}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.tenders.stayOrder}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.tenders.BaningBlackListed}</Link></li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" href="#">{dictionary.navbar.rti}</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" href="#">{dictionary.navbar.vacancy}</Link>
                    </li>

                    {/* CONTACT */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#">
                        {dictionary.navbar.contact.title}
                      </a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.contact.reach}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.contact.hq}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.contact.vigilanceTeam}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.contact.government}</Link></li>

                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">{dictionary.navbar.contact.discoms.title}</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="https://www.dvvnl.org/" target="_blank">{dictionary.navbar.contact.discoms.dvvnl}</a></li>
                            <li><a className="dropdown-item" href="https://kesco.co.in/" target="_blank">{dictionary.navbar.contact.discoms.kesco}</a></li>
                            <li><a className="dropdown-item" href="https://www.dvvnl.org/" target="_blank">{dictionary.navbar.contact.discoms.mvvnl}</a></li>
                            <li><a className="dropdown-item" href="https://kesco.co.in/" target="_blank">{dictionary.navbar.contact.discoms.pvvnl}</a></li>
                            <li><a className="dropdown-item" href="https://kesco.co.in/" target="_blank">{dictionary.navbar.contact.discoms.puvvnl}</a></li>
                          </ul>
                        </li>

                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.contact.usefulLinks}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.contact.feedback}</Link></li>
                        <li><Link className="dropdown-item" href="#">{dictionary.navbar.contact.faq}</Link></li>
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

// "use client";

// import Link from "next/link";

// export default function Navbar({
//   dictionary,
//   lang,
// }: {
//   dictionary: any;
//   lang: "en" | "hi";
// }) {
//   const switchLang = lang === "en" ? "hi" : "en";

//   return (
//     <nav className="navbar">
//       <Link href={`/${lang}`}>
//         Home
//       </Link>

//       <Link href={`/${lang}/about-uppcl`}>
//         {dictionary.navbar.about}
//       </Link>

//       <Link href={`/${switchLang}`}>
//         {dictionary.navbar.hindi}
//       </Link>
//     </nav>
//   );
// }


// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import AccessibilityControls from "@/components/navbar/AccessibilityControls";

// export default function Navbar() {
//   const pathname = usePathname();

//   // Example: /en/about-uppcl/introduction
//   const segments = pathname.split("/");
//   const currentLang = segments[1] || "en";

//   const supportedLanguages = ["en", "hi"];
//   const lang = supportedLanguages.includes(currentLang)
//     ? currentLang
//     : "en";

//   const switchLang = lang === "en" ? "hi" : "en";

//   // Remove current language from path
//   const pathWithoutLang = "/" + segments.slice(2).join("/");

//   const switchPath =
//     pathWithoutLang === "/"
//       ? `/${switchLang}`
//       : `/${switchLang}${pathWithoutLang}`;

//   return (
//     <header className="new-nav-header">
//       {/* ================= TOP BLUE BAR ================= */}
//       <section className="top-nav">
//         <div className="container">
//           <ul className="nav justify-content-end align-items-center flex-nowrap mb-0">

//             <li className="nav-item">
//               <Link href={`/${lang}`} className="nav-link text-white">
//                 <i className="fa fa-home"></i>
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link href={switchPath} className="nav-link text-white">
//                 {lang === "en" ? "हिंदी संस्करण" : "English Version"}
//               </Link>
//             </li>

//             <li className="nav-item dropdown">
//               <a
//                 href="#"
//                 className="nav-link dropdown-toggle text-white"
//                 data-bs-toggle="dropdown"
//               >
//                 <i className="fa fa-wheelchair"></i>
//               </a>
//               <AccessibilityControls />
//             </li>

//           </ul>
//         </div>
//       </section>

//       {/* ================= LOGO + MAIN MENU ================= */}
//       <section className="logo-section py-3">
//         <div className="container">
//           <div className="row align-items-center">

//             <div className="col-md-3">
//               <Link href={`/${lang}`}>
//                 <img
//                   src="/images/logo.png"
//                   alt="UP Power Corporation Limited"
//                   className="img-fluid"
//                 />
//               </Link>
//             </div>

//             <div className="col-md-9">
//               <nav className="navbar navbar-expand-lg navbar-light p-0 main-navbar">
//                 <div className="collapse navbar-collapse">
//                   <ul className="navbar-nav ms-auto">

//                     <li className="nav-item dropdown">
//                       <a className="nav-link dropdown-toggle" href="#">
//                         About UPPCL
//                       </a>
//                       <ul className="dropdown-menu">
//                         <li>
//                           <Link
//                             className="dropdown-item"
//                             href={`/${lang}/about-uppcl/introduction`}
//                           >
//                             Introduction
//                           </Link>
//                         </li>
//                         <li>
//                           <Link
//                             className="dropdown-item"
//                             href={`/${lang}/about-uppcl/mission-vision`}
//                           >
//                             Mission / Vision Statement
//                           </Link>
//                         </li>
//                       </ul>
//                     </li>

//                   </ul>
//                 </div>
//               </nav>
//             </div>

//           </div>
//         </div>
//       </section>
//     </header>
//   );
// }