import styles from "../page.module.css";

export default function Tag({ label, bg, fg, variant = "skill" }) {
  const className = variant === "project" ? styles.projectTag : styles.skillTag;

  return (
    <span className={className} style={{ background: bg, color: fg }}>
      {label}
    </span>
  );
}
