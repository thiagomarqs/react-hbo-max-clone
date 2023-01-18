import { ReactComponent as GitHubLogo } from "assets/icons/social/github.svg";
import { ReactComponent as LinkedInLogo } from "assets/icons/social/linkedin.svg";
import { Link } from "models/components/Link";
import { SocialMediaLink } from "models/components/SocialMediaLink";
import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

const socialMediaLinks: SocialMediaLink[] = [
  {image: <LinkedInLogo/>, url: "https://linkedin.com/in/thiagosmarques"},
  {image: <GitHubLogo/>, url: "https://github.com/thiagomarqs"},
];

const copyright = `© ${new Date().getFullYear()} github.com/thiagomarqs.`;

const links: Link[] = [
  {label: "Privacy", url: "#"},
  {label: "Terms", url: "#"},
  {label: "Help", url: "#"},
  {label: "Devices", url: "#"},
];

export const Root = (props: PropsWithChildren) => {

  return (
    <div className="bg-black overflow-x-hidden">
      <Header/>
      <Outlet/>
      <Footer 
        socialMedia={socialMediaLinks} 
        copyright={copyright} 
        links={links}/>
    </div>
  )
}