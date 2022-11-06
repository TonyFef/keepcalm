import { CSSProperties } from "react";

export type LayoutProps = {
  children: React.ReactNode;
};

export type ImageProps = {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  showOnError?: boolean;
};

export type TagVariants = Pick<
  JSX.IntrinsicElements,
  "h1" | "h2" | "h3" | "h4" | "span" | "p"
>;

export type TagKeys = keyof TagVariants;

export type CustomStyles = {
  fontSize?: CSSProperties["fontSize"];
  fontWeight?: CSSProperties["fontWeight"];
  fontFamily?: CSSProperties["fontFamily"];
  lineHeight?: CSSProperties["lineHeight"];
  color?: CSSProperties["color"];
  textTransform?: CSSProperties["textTransform"];
};

export type ComponentProps = {
  tag?: TagKeys;
  text: string;
};

export type TypographyProps = JSX.IntrinsicElements[TagKeys] &
  CustomStyles &
  ComponentProps;

export type MainContentProps = {
  isImageLeft: boolean;
  imageSrc: string;
  title?: string;
  text?: string;
  subtext?: string;
};

export type MainSectionProps = {
  firstImageSrc: string;
  secondImageSrc: string;
};
