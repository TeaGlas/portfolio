import styles from "../page.module.css";

export default function SectionLabel({ children, className = "" }) {
  return <p className={`${styles.sectionLabel} ${className}`}>{children}</p>;
}
