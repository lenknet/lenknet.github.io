import Image from "next/image";
import { PropsWithChildren } from "react";
import logo from "../assets/logo.svg";
import css from "./Logo.module.css";

export function Logo(props: PropsWithChildren) {
  return (
    <div className={css.logo}>
      <Image src={logo} className={css.logo__icon} alt="Logo" width={200} />
      <h1 className={css.logo__title}>{props.children}</h1>
    </div>
  );
}
