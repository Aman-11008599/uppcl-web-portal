import { getDictionary } from "@/lib/getDictionary";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function IntroductionPage({ params }: PageProps) {
  const { lang } = await params;

  const dictionary = await getDictionary(lang as "en" | "hi");
  const data = dictionary.introductionPage;

  return (
    <>
      {/* Breadcrumb Bar */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <span>{data.breadcrumb.home}</span> /{" "}
          <span>{data.breadcrumb.about}</span> /{" "}
          <span className="active">{data.breadcrumb.current}</span>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container header-inner">
          <h1>{data.title}</h1>
        </div>
      </section>

      {/* Page Content */}
      <section className="page-content">
        <div className="container content-box intro-text">

          {/* Main Paragraphs */}
          {data.content.paragraphs.map(
            (para: string, index: number) => (
              <p key={index}>{para}</p>
            )
          )}

          {/* Dynamic Sections */}
          {data.content.sections.map(
            (section: any, index: number) => (
              <div className="info-box" key={index}>
                <h3>{section.heading}</h3>

                {section.texts.map(
                  (text: string, i: number) => (
                    <p key={i}>{text}</p>
                  )
                )}
              </div>
            )
          )}

          {/* Additional Paragraphs */}
          {data.content.additionalParagraphs.map(
            (para: string, index: number) => (
              <p key={`add-${index}`}>{para}</p>
            )
          )}

          {/* Performance Table */}
          <div className="table-responsive">
            <table className="performance-table">
              <thead>
                <tr>
                  {data.content.performanceTable.headers.map(
                    (header: string, index: number) => (
                      <th key={index}>{header}</th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {data.content.performanceTable.rows.map(
                  (row: any, index: number) => (
                    <tr key={index}>
                      <td>{row.parameter}</td>
                      <td>{row.value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>

          {/* Closing Paragraphs */}
          {data.content.closingParagraphs.map(
            (para: string, index: number) => (
              <p key={`close-${index}`}>{para}</p>
            )
          )}

        </div>
      </section>
    </>
  );
}
