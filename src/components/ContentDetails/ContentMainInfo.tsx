import { runtimeToString } from "utils/utils";

export interface ContentMainInfoProps {
  logo: {
    title: string;
    url?: string;
  };
  runtimeInMinutes: number;
  certification: any;
  releaseDate: Date;
}

export const ContentMainInfo = (props: ContentMainInfoProps) => {
  const {logo, runtimeInMinutes, certification, releaseDate} = props;
  const year = releaseDate.getFullYear();
  const runtimeString = runtimeToString(runtimeInMinutes);

  return (
    <div>
      <div className="w-fit max-w-full">
        {logo.url
          ? <img className="h-auto w-56 max-w-[80vw] object-contain object-left drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] md:w-80" src={logo.url} alt={logo.title} />
          : <h1 className="text-white font-bold text-4xl md:text-6xl">{logo.title}</h1>}
      </div>
      <div className="my-2 flex content-start text-sm">
        <p className="mr-5">{runtimeString}</p>
        <p className="mr-5">{certification}</p>
        <p className="mr-5">{year}</p>
      </div>
    </div>
  )
}