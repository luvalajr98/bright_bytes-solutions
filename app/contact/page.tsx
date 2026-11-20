import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const contactOptions = [
  {
    icon: Mail,
    title: "Send us an email",
    detail: "bright.bytesolution@gmail.com",
    href: "mailto:bright.bytesolution@gmail.com",
    action: "Write an email",
    external: false,
  },
  {
    icon: MessageCircle,
    title: "Message us on WhatsApp",
    detail: "0713 510 790",
    href: "https://wa.me/254713510790",
    action: "Open WhatsApp",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="contact-hero page-shell">
        <p className="eyebrow"><span className="eyebrow-mark" /> GET IN TOUCH</p>
        <h1>
          Let&apos;s build
          <br />
          <span>something meaningful.</span>
        </h1>
        <p className="contact-intro">
          Tell us what you&apos;re working toward, what&apos;s getting in the
          way, or simply where you&apos;d like to start. We&apos;d love to hear
          from you.
        </p>
      </section>

      <section className="contact-content page-shell">
        <div className="contact-options">
          {contactOptions.map((option) => {
            const Icon = option.icon;
            return (
              <article className="contact-option" key={option.title}>
                <span className="contact-option-icon">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="eyebrow">{option.title}</p>
                  <h2>{option.detail}</h2>
                  <Link
                    href={option.href}
                    target={option.external ? "_blank" : undefined}
                    rel={option.external ? "noreferrer" : undefined}
                  >
                    {option.action} <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
          <article className="contact-option location-option">
            <span className="contact-option-icon">
              <MapPin size={22} strokeWidth={1.8} />
            </span>
            <div>
              <p className="eyebrow">OUR LOCATION</p>
              <h2>Nairobi, Kenya</h2>
              <span>Working with businesses wherever they are.</span>
            </div>
          </article>
        </div>
        <aside className="contact-note">
          <span className="note-spark">✳</span>
          <p className="eyebrow">A GOOD PLACE TO START</p>
          <h2>
            No jargon.
            <br />
            Just a real conversation.
          </h2>
          <p>
            Share a little about your business and what you&apos;d like to
            improve. We&apos;ll listen, ask the right questions and help you
            figure out a practical next step.
          </p>
          <span className="note-signoff">BrightBytes Solutions</span>
        </aside>
      </section>

      <section className="contact-bottom page-shell">
        <p>BrightBytes Solutions <span>·</span> Smart Systems. Real Growth.</p>
        <Link className="inline-link" href="/services">
          Explore our services <ArrowUpRight size={16} />
        </Link>
      </section>
    </main>
  );
}
