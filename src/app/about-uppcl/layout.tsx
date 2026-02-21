export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="inner-page">
      {/* Page Content */}
      <section className="page-content">
        <div className="container content-box">
          {children}
        </div>
      </section>
    </main>
  );
}

// export default function AboutLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <main className="inner-page">

//       {/* Breadcrumb Bar */}
//       <div className="breadcrumb-bar">
//         <div className="container breadcrumb-inner">
//           <span>Home</span> / <span>About UPPCL</span> / <span className="active">Introduction</span>
//         </div>
//       </div>

//       {/* Page Header */}
//       <section className="page-header">
//         <div className="container header-inner">
//           <h1>INTRODUCTION</h1>
//         </div>
//       </section>

//       {/* Page Content */}
//       <section className="page-content">
//         <div className="container content-box">
//           {children}
//         </div>
//       </section>

//     </main>
//   );
// }