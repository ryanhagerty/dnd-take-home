import React, { ReactNode } from "react";
import "./Heading.css";

export type HeadingLevel = "1" | "2" | "3" | "4" | "5" | "6";

declare type HeadingProps = {
  children: ReactNode;
  level: HeadingLevel;
  className?: string;
};

const Heading = ({
  children,
  level = "2",
  className,
}: HeadingProps): JSX.Element => {
  const classes = className ? className : "";

  return React.createElement(
    `h${level}`,
    { className: `${classes}` },
    children,
  );
};

export default Heading;
