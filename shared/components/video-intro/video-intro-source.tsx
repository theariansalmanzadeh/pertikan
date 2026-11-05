type VideoIntroSourceProps = {
  src: string;
};

export function VideoIntroSource({ src }: VideoIntroSourceProps) {
  return <source src={src} type="video/mp4" />;
}
