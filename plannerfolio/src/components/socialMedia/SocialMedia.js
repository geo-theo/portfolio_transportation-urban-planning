import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function SocialMedia() {
  if (!socialMediaLinks.display) return null;
  const platforms = [
    ['github','GitHub','github','fab fa-github'],
    ['linkedin','LinkedIn','linkedin','fab fa-linkedin-in'],
    ['gmail','Email','google','fas fa-envelope'],
    ['gitlab','GitLab','gitlab','fab fa-gitlab'],
    ['facebook','Facebook','facebook','fab fa-facebook-f'],
    ['instagram','Instagram','instagram','fab fa-instagram'],
    ['twitter','Twitter','twitter','fab fa-twitter'],
    ['medium','Medium','medium','fab fa-medium'],
    ['stackoverflow','Stack Overflow','stack-overflow','fab fa-stack-overflow'],
    ['kaggle','Kaggle','kaggle','fab fa-kaggle']
  ];
  const links = platforms.filter(([key]) => socialMediaLinks[key]).map(([key,label,style,icon]) => ({
    label,style,icon,url:key==='gmail' ? `mailto:${socialMediaLinks[key]}` : socialMediaLinks[key]
  })).concat(socialMediaLinks.links || []);
  return <div className="social-media-div">{links.filter(link => link.url).map((link,index) => (
    <a href={link.url} className={`icon-button ${link.style || 'linkedin'}`} aria-label={link.label}
      target={link.url.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" key={index}>
      <i className={link.icon || 'fas fa-link'} aria-hidden="true"></i><span></span>
    </a>
  ))}</div>;
}
