import { Link } from "models/components/Link";
import { SocialMediaLink } from "models/components/SocialMediaLink";
import { v4 as uuid } from "uuid";

export interface FooterProps {
  socialMedia: SocialMediaLink[];
  copyright: string;
  links: Link[];
}

export const Footer = (props: FooterProps) => {
  const { socialMedia, copyright, links } = props;

  return (
    <div className="pl-7 pt-40 flex flex-col w-screen text-text-secondary text-xs md:pl-14">
      <div className="flex mb-4">
        {socialMedia.map(media => <a key={uuid()} className="mr-6" href={media.url}>{media.image}</a>)}
      </div>
      <div className="mb-4">
        {copyright}
      </div>
      <div className="flex mb-8">
        {links.map(link => <a key={uuid()} className="mr-4" href={link.url}>{link.label}</a>)}
      </div>
    </div>
  )
}