import { PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";
import styles from "./router-link.module.css";

type RouterLinkProps = PropsWithChildren & LinkProps;

export function RouterLink({
  children,
  className = undefined,
  to,
  ...restProps
}: RouterLinkProps) {
  return (
    <Link
      to={to}
      className={className ? styles[className] : className}
      {...restProps}
    >
      {children}
    </Link>
  );
}
