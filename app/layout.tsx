import { PropsWithChildren } from "react";
import "./styles/styles.css";

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
