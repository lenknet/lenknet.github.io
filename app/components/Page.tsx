import { PropsWithChildren } from "react";
import css from "./Page.module.css";

export interface PageProps {}

export function Page(props: PropsWithChildren<PageProps>) {
  return <main className={css.page}>{props.children}</main>;
}
