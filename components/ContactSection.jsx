import { CONTACT_LINKS } from "../data/portfolio";
import styles from "../page.module.css";
import SectionLabel from "./SectionLabel";

export default function ContactSection({ content }) {
  return (
    <section id="contact" className={`${styles.card} ${styles.contactSection}`}>
      <SectionLabel>{content.contact.label}</SectionLabel>
      <p className={styles.cardTitle}>{content.contact.title}</p>
      <p className={styles.contactIntro}>{content.contact.intro}</p>
      <div>
        {CONTACT_LINKS.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            className={styles.contactRow}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.contactLabel}>{contact.label}</span>
            <span className={styles.contactValue}>{contact.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
