import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  Handshake,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import { processSteps } from "@/data/portfolio";

const principles = [
  {
    icon: Lightbulb,
    title: "Make it useful",
    description:
      "Technology should solve a real problem and make everyday work easier.",
  },
  {
    icon: Compass,
    title: "Start with understanding",
    description:
      "We listen first, then shape a solution around your goals and context.",
  },
  {
    icon: Handshake,
    title: "Build together",
    description:
      "Good outcomes come from open communication and a partnership that lasts.",
  },
  {
    icon: ShieldCheck,
    title: "Deliver with care",
    description:
      "We take quality, reliability and a thoughtful handover seriously.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero page-shell">
        <p className="eyebrow"><span className="eyebrow-mark" /> ABOUT BRIGHTBYTES</p>
        <h1>
          Technology with
          <br />
          <span>people at the center.</span>
        </h1>
        <div className="page-hero-bottom">
          <p>
            BrightBytes Solutions helps businesses make technology feel less
            complicated and more connected to the future they want to build.
          </p>
          <span className="page-hero-note">SMART SYSTEMS. REAL GROWTH.</span>
        </div>
      </section>

      <section className="about-founder">
        <div className="page-shell about-founder-grid">
          <div className="founder-portrait" aria-hidden="true">
            <div className="portrait-orbit" />
            <span className="portrait-initials">LK</span>
            <span className="portrait-star">✳</span>
            <span className="portrait-label">BRIGHTBYTES / NAIROBI</span>
          </div>
          <div className="about-founder-copy">
            <p className="eyebrow">MEET THE FOUNDER</p>
            <h2>
              Luvala Kelvin<span>.</span>
            </h2>
            <p className="founder-role">Founder, BrightBytes Solutions</p>
            <p>
              Luvala founded BrightBytes with a simple belief: the right
              technology can make a meaningful difference to how a business
              works and grows.
            </p>
            <p>
              BrightBytes brings digital strategy, business systems and
              automation together with a practical, collaborative approach.
              Every project begins by understanding the people and purpose
              behind it.
            </p>
            <Link className="inline-link" href="/contact">
              Get to know us <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section principles-section">
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT GUIDES US</p>
              <h2>
                Better work begins
                <br />
                with <span>good principles.</span>
              </h2>
            </div>
            <p className="section-heading-note">
              We bring care and clarity to every conversation, plan and
              solution.
            </p>
          </div>
          <div className="principle-grid">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <article className="principle-card" key={principle.title}>
                  <span className="principle-number">0{index + 1}</span>
                  <Icon size={23} strokeWidth={1.7} />
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section page-shell about-process">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FROM FIRST CONVERSATION TO WHAT&apos;S NEXT</p>
            <h2>
              We keep the process
              <br />
              <span>clear and collaborative.</span>
            </h2>
          </div>
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

      <section className="simple-cta page-shell">
        <div>
          <p className="eyebrow">LET&apos;S BUILD SOMETHING BETTER</p>
          <h2>Bring us the challenge. We&apos;ll find a way forward.</h2>
        </div>
        <Link className="button" href="/contact">
          Work with us
        </Link>
      </section>
    </main>
  );
}
