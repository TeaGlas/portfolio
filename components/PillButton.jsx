import styles from "../page.module.css";

export default function PillButton({
  as: Component = "button",
  children,
  className = "",
  ...props
}) {
  return (
    <Component className={`${styles.pillBtn} ${className}`} {...props}>
      {children}
    </Component>
  );
}
