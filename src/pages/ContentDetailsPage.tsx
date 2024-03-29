import { ContentDetails } from "components/ContentDetails/ContentDetails"
import { Loading } from "components/Loading/Loading"
import { SectionGroup } from "components/SectionGroup/SectionGroup"
import { TileProps } from "components/TileList/Tile"
import { TileList } from "components/TileList/TileList"
import { useDocumentTitle } from "hooks/useDocumentTitle"
import { SectionDefinition } from "models/components/SectionDefinition"
import { Content } from "models/Content"
import { useEffect } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getMovie } from "services/movies"


export const ContentDetailsPage = () => {

  const { id } = useParams();
  const { isLoading, isError, data, error } = useQuery(['getMovie', id], async () => getMovie(Number(id)), {staleTime: 1000 * 60 * 5});
  const [ title, setTitle ] = useDocumentTitle();

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  if(isLoading) return <Loading/>

  setTitle(`${data?.original_title} • HBO Max`);

  const { recommendations } = data as Content;

  const list: TileProps[] = recommendations.map(r => { 
    return {
      title: r.title,
      posterUrl: r.posterUrl,
      backdropUrl: r.backdropUrl,
      size: 'default',
      contentUrl: r.contentUrl
    }}
  )

  return (
    <div className="text-text-secondary">
      <ContentDetails content={data as Content}/>
      <TileList mode="horizontal" title="More Like This" list={list} tileSize={"default"} />
      <SectionGroup sections={generateSectionsFromContent(data as Content)} />
    </div>
  )
}

const generateSectionsFromContent = (content: Content) => {
  const { castCrew, producers, directors } = content;
  
  const castCrewSection = generateSection("Cast and Crew", castCrew, true);
  const producersSection = generateSection("Producers", producers);
  const directorsSection = generateSection("Directors", directors);

  return [castCrewSection, producersSection, directorsSection];
}

const generateSection = (header: string, rows: Record<string, any>[], expandByDefault?: boolean): SectionDefinition => {
  const section: SectionDefinition = {
    header: header,
    rows: rows.map(r => {
      const keys = Object.keys(r);
      const label = r[keys[0]] as unknown as string;
      const value = r[keys[1]] as unknown as string;

      return {
        label: label,
        value: value
      }
    }),
    expandByDefault: expandByDefault
  };

  return section;
}