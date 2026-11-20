import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { services } from "@/data/portfolio";

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero page-shell">
        <p className="eyebrow"><span className="eyebrow-mark" /> OUR SERVICES</p>
        <h1>
          Practical tools.
          <br />
          <span>Meaningful growth.</span>
        </h1>
        <div className="page-hero-bottom">
          <p>
            Thoughtful digital and technology solutions to help your business
            connect, simplify and move forward.
          </p>
          <Link className="inline-link" href="#service-list">
            Explore what we do <ArrowDown size={16} />
          </Link>
        </div>
      </section>

      <section className="services-page-list" id="service-list">
        <div className="page-shell services-page-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className="service-detail-card" key={service.title}>
                <div className="detail-card-top">
                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="detail-icon">
                    <Icon size={24} strokeWidth={1.7} />
                  </span>
                </div>
                <p className="eyebrow">BRIGHTBYTES SOLUTIONS</p>
                <h2>{service.title}</h2>
                <p className="detail-summary">{service.summary}</p>
                <ul>
                  {service.deliverables.map((item) => (
                    <li key={item}>
                      <span className="check-mark"><Check size={13} /></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  className="card-link"
                  href="/contact"
                  aria-label={`Discuss ${service.title}`}
                >
                  Let&apos;s talk about it <ArrowUpRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="simple-cta page-shell">
        <div>
          <p className="eyebrow">NOT SURE WHERE TO BEGIN?</p>
          <h2>Tell us what you&apos;re working toward.</h2>
        </div>
        <Link className="button" href="/contact">
          Start a conversation
        </Link>
      </section>
    </main>
  );
}
