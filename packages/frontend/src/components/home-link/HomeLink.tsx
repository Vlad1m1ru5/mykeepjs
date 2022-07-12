import type { ReactNode } from "react";
import styles from "./HomeLink.module.less";

interface HomeLinkProps {
  href: string;
  children?: ReactNode;
}

const HomeLink = ({ href, children }: HomeLinkProps) => {
  return (
    <a
      className={styles.homeLink}
      target="_blank"
      href={href}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default HomeLink;
