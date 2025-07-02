import { PropsWithChildren, ReactHTML, createElement } from "react";
import classNames from "classnames";
import "./Typography.css";

export type TypographySize = "small" | "normal" | "large" | "h1" | "h2" | "h3" | "h4";
export type TypographyWeight = "bold" | "semibold";
export type TypographyStyle = "italic";
export type TypographyColor = "error" | "primary" | "secondary";
export type TypographyTransform = "capitalize";
export type TypographyOverflow = "ellipsis";
export type TypographyAlign = "center";

export interface TypographyProps {
  title?: string;
  weight?: TypographyWeight;
  style?: TypographyStyle;
  size?: TypographySize;
  color?: TypographyColor;
  transform?: TypographyTransform;
  align?: TypographyAlign;
  overflow?: TypographyOverflow;
  inline?: boolean;
}

export type HeadingLevel = "h1" | "h2" | "h3" | "h4";

export interface HeadingProps {
  level?: HeadingLevel;
  style?: TypographyStyle;
  color?: TypographyColor;
  transform?: TypographyTransform;
  align?: TypographyAlign;
  inline?: boolean;
}

function getElementFromProps(props: TypographyProps): keyof ReactHTML {
  if (props.inline) {
    return "span";
  }

  return "p";
}

function typographyClass(props: TypographyProps): string {
  return classNames(
    props.transform ? `typography--transform-${props.transform}` : undefined,
    props.weight ? `typography--weight-${props.weight}` : undefined,
    props.style ? `typography--style-${props.style}` : undefined,
    props.color ? `typography--color-${props.color}` : undefined,
    props.align ? `typography--align-${props.align}` : undefined,
    props.size ? `typography--size-${props.size}` : undefined,
    props.overflow ? `typography--overflow-${props.overflow}` : undefined,
    {
      ["typography--inline"]: !!props.inline,
    }
  );
}

export function Typography(props: PropsWithChildren<TypographyProps>): JSX.Element {
  const el = getElementFromProps(props);
  const className = typographyClass(props);

  return createElement(
    el,
    {
      title: props.title,
      className: classNames("typography", className),
    },
    props.children
  );
}

export function Heading(props: PropsWithChildren<HeadingProps>): JSX.Element {
  const element = (props.level ?? "h1") as keyof ReactHTML;
  const headingClass = `typography--heading-${props.level}`;
  const className = classNames(
    "typography",
    headingClass,
    typographyClass({
      ...props,
      size: props.level,
    })
  );

  return createElement(element, { className }, props.children);
}

export function Subscript(props: PropsWithChildren) {
  return <sub className="typography--subscript">{props.children}</sub>;
}

export function Superscript(props: PropsWithChildren) {
  return <sup className="typography--superscript">{props.children}</sup>;
}
