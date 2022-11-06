import { ElementType } from "react";
import { TypographyProps } from "../types/types";
import cn from "classnames";

import styles from "../styles/Typography.module.scss";

const ValidElementTypes: readonly ElementType[] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "span",
  "p",
] as const;

const getElementType = (stringTag: string): ElementType => {
  if (ValidElementTypes.includes(stringTag as ElementType)) {
    return stringTag as ElementType;
  }
  return "span";
};

const Typography = ({
  tag,
  text,
  fontFamily = "Orchidea Pro",
  fontSize = "24px",
  fontWeight = "500",
  lineHeight = "33px",
  color = "dark",
  ...props
}: TypographyProps) => {
  const Component = tag ? getElementType(tag) : "span";

  return (
    <Component
      className={cn({
        [styles[`typography--fontFamily-${fontFamily}`]]: fontFamily,
        [styles[`typography--fontSize-${fontSize}`]]: fontSize,
        [styles[`typography--fontWeight-${fontWeight}`]]: fontWeight,
        [styles[`typography--lineHeight-${lineHeight}`]]: lineHeight,
        [styles[`typography--color-${color}`]]: color,
      })}
      {...props}
    >
      {text}
    </Component>
  );
};

export default Typography;
