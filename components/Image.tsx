import { ImageProps } from "../types/types";

export const Image = ({
  src,
  alt = "img",
  className,
  width = 100,
  height = 100,
  //   background,
  showOnError,
  onClick,
}: ImageProps) => {
  const hideCrashIcon = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    if (event.target instanceof HTMLElement && !showOnError) {
      event.target.style.display = "none";
    }
  };

  return (
    <>
      <img
        src={src}
        // style={{ background }}
        alt={alt}
        className={className}
        width={width}
        height={height}
        onError={hideCrashIcon}
        onClick={onClick}
      />
    </>
  );
};
