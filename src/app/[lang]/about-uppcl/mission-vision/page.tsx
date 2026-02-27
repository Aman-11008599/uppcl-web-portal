import { getDictionary } from "@/lib/getDictionary";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function MissionVisionPage({ params }: PageProps) {

  const { lang } = await params;

  const dictionary = await getDictionary(lang as "en" | "hi");
  const data = dictionary.missionVisionPage;

  return (
    <>
      {/* Breadcrumb */}
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
          <div className="info-box text-content">
            {data.sections.map((section: any, index: number) => (
              <ul key={index}>
                <li>{section.heading}</li>
                <ul>
                  {section.points.map((point: string, i: number) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </ul>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}