import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe2,
  Lightbulb,
  Workflow,
} from "lucide-react";
import { processSteps, services } from "@/data/portfolio";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-grid page-shell">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="eyebrow-mark" />
              NAIROBI, KENYA <span className="eyebrow-divider">/</span> BUILT
              FOR WHAT&apos;S NEXT
            </p>
            <h1>
              Smart systems.
              <br />
              <span>Real growth.</span>
            </h1>
            <p className="hero-description">
              We bring technology and thoughtful digital strategy together to
              help your business work smarter, connect better and grow with
              confidence.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/contact">
                Let&apos;s build something
              </Link>
              <Link className="button button-outline" href="/services">
                Explore our services
              </Link>
            </div>
            <div className="hero-signoff">
              <span className="signoff-rule" />
              Practical solutions. A partner who stays.
            </div>
          </div>

          <div className="hero-art" aria-label="Illustration of connected business tools">
            <div className="art-glow" />
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-spark spark-one">✳</div>
            <div className="art-spark spark-two">✳</div>
            <div className="art-card art-card-main">
              <div className="art-card-top">
                <span className="art-card-icon">
                  <Lightbulb size={20} />
                </span>
                <span className="art-card-label">YOUR NEXT CHAPTER</span>
                <span className="art-card-menu">•••</span>
              </div>
              <div className="art-card-heading">
                Make room for
                <br />
                <span>better work.</span>
              </div>
              <div className="art-chart" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="art-card-foot">
                <span>Connected tools</span>
                <span className="art-live-dot">Built around you</span>
              </div>
            </div>
            <div className="art-float float-automation">
              <span className="float-icon"><Workflow size={17} /></span>
              <span>Less busywork</span>
              <Check size={15} />
            </div>
            <div className="art-float float-digital">
              <span className="float-icon"><Globe2 size={17} /></span>
              <span>More possibilities</span>
            </div>
            <div className="art-caption">THE RIGHT SYSTEMS CHANGE EVERYTHING</div>
          </div>
        </div>
        <Link className="hero-scroll" href="/services">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </Link>
      </section>

      <section className="intro-band">
        <div className="page-shell intro-inner">
          <span className="eyebrow">BRIGHTBYTES SOLUTIONS</span>
          <p>
            Good technology should make business feel{" "}
            <span>simpler, clearer and full of possibility.</span>
          </p>
          <span className="intro-star" aria-hidden="true">✳</span>
        </div>
      </section>

      <section className="section page-shell" id="services">
        <div className="section-heading">
          <div className="section-heading-main">
            <p className="eyebrow">WHAT WE DO</p>
            <h2>
              Tools that move
              <br />
              your business <span>forward.</span>
            </h2>
            <p className="services-intro">
              From digital visibility to connected business systems, we make
              technology work for the way you work.
            </p>
          </div>
          <Link className="inline-link section-services-link" href="/services">
            See all services <ArrowRight size={16} />
          </Link>
        </div>
        <div className="service-preview-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className="service-preview-card" key={service.title}>
                <div className="service-preview-top">
                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="service-preview-icon">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link
                  className="card-link"
                  href="/services"
                  aria-label={`Learn about ${service.title}`}
                >
                  Explore service <ArrowUpRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="founder-band">
        <div className="page-shell founder-grid">
          <div className="founder-monogram" aria-hidden="true">
            <span>L</span>
            <span>K</span>
            <span className="monogram-spark">✳</span>
          </div>
          <div className="founder-copy">
            <p className="eyebrow">THE PERSON BEHIND THE PURPOSE</p>
            <h2>
              Built on curiosity.
              <br />
              <span>Led by purpose.</span>
            </h2>
            <p>
              BrightBytes Solutions was founded by Luvala Kelvin to help
              businesses find a clearer, more confident way forward with
              technology. We believe great solutions start with listening —
              and grow through partnership.
            </p>
            <Link className="inline-link" href="/about">
              Meet BrightBytes <ArrowRight size={16} />
            </Link>
          </div>
          <div className="founder-signature">
            <span className="signature-line" />
            <strong>Luvala Kelvin</strong>
            <span>Founder, BrightBytes Solutions</span>
          </div>
        </div>
      </section>

      <section className="section page-shell process-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">HOW WE WORK</p>
            <h2>
              A clear path from
              <br />
              idea to <span>impact.</span>
            </h2>
          </div>
          <p className="section-heading-note">
            A collaborative process designed to keep you informed and your
            project moving.
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-step" key={step.title}>
              <span className="process-index">0{index + 1}</span>
              <span className="process-line" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-panel page-shell">
        <div className="cta-panel-inner">
          <div>
            <p className="eyebrow">YOUR NEXT GOOD IDEA STARTS HERE</p>
            <h2>
              Let&apos;s make work
              <br />
              <span>work better.</span>
            </h2>
          </div>
          <Link className="button button-light" href="/contact">
            Tell us what you have in mind
          </Link>
          <span className="cta-decoration" aria-hidden="true">✳</span>
        </div>
      </section>
    </main>
  );
}
