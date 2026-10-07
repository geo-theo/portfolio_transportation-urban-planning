/* Personalize your whole PlannerFolio here.
 * Built directly from DeveloperFolio's components and configuration.
 * All arrays accept any number of items. Set display:false to hide a section.
 * Images accept imported files or URLs; leave empty for text-only cards.
 * Empty links are hidden. Change the theme in src/_globalColor.scss.
 */
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {enabled: false, animation: splashAnimation, duration: 2000};
const illustration = {
  animated: false,
  greetingImage: "", greetingAlt: "Planner working at a laptop",
  skillsImage: "", skillsAlt: "Analyst working with data",
  contactImage: "", contactAlt: "An invitation to connect"
};
const greeting = {
  username: "Your Name", title: "Hi, I'm Your Name",
  subTitle: emoji("An urban planner & transportation analyst 🗺️ exploring how cities move. I bring together spatial data, thoughtful analysis, and clear maps to help build more connected, accessible places."),
  contactButtonText: "Contact me", projectButtonText: "See my work",
  resumeButtonText: "My resume", resumeLink: "", // '/resume.pdf' or a hosted PDF
  displayGreeting: true
};
const socialMediaLinks = {
  github: "", linkedin: "", gmail: "hello@example.com", gitlab: "",
  facebook: "", instagram: "", twitter: "", medium: "",
  stackoverflow: "", kaggle: "", links: [], display: true
};
const skillsSection = {
  title: "What I do",
  subTitle: "URBAN PLANNING · TRANSPORTATION · GEOSPATIAL ANALYSIS",
  skills: [
    emoji("🗺️ Make sense of spatial data and reveal the patterns shaping a city."),
    emoji("🚉 Explore transportation networks, accessibility, and the way people move."),
    emoji("📊 Turn complex analysis into clear maps, visual stories, and practical insights.")
  ],
  softwareSkills: [
    {skillName: "QGIS / ArcGIS", fontAwesomeClassname: "fas fa-map-marked-alt"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "SQL / PostGIS", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Spatial analysis", fontAwesomeClassname: "fas fa-globe-americas"},
    {skillName: "Transportation", fontAwesomeClassname: "fas fa-subway"},
    {skillName: "Data visualization", fontAwesomeClassname: "fas fa-chart-bar"}
  ], display: true
};
// Enable optional sections after adding your own information.
const educationInfo = {
  display: false,
  schools: [{schoolName: "Your university", logo: "", subHeader: "Your degree",
    duration: "Your dates", desc: "Your focus or accomplishments.", descBullets: []}]
};
const techStack = {
  viewSkillBars: false,
  experience: [
    {Stack: "Geospatial analysis", progressPercentage: "90%"},
    {Stack: "Transportation planning", progressPercentage: "80%"}
  ], displayCodersrank: false
};
const workExperiences = {
  title: "Experience", display: false,
  experience: [{role: "Your role", company: "Your organization", companylogo: "",
    date: "Your dates", desc: "Describe your work and the contribution you made.",
    descBullets: ["Add an accomplishment or responsibility."]}]
};
const openSource = {showGithubProfile: "false", display: false};

// Any subject, any number of projects, any number of links. Maps, dashboards,
// reports, videos, presentations, code, or websites all use the same simple card.
// No required categories, methods, or case-study questions.
const bigProjects = {
  title: "Projects",
  subtitle: "A selection of my work in planning, transportation, and spatial analysis.",
  projects: [
    {projectName: "Your featured project",
      projectDesc: "Introduce a project in your own words. Share what you explored, your contribution, and what you delivered.",
      image: "", imageAlt: "",
      footerLink: [{name: "View project", url: ""}, {name: "View code", url: ""}]},
    {projectName: "Another project you're proud of",
      projectDesc: "A map, analysis, plan, dashboard, or something entirely different. Use this space for the story you want to tell.",
      image: "", imageAlt: "", footerLink: [{name: "View project", url: ""}]},
    {projectName: "Make this space your own",
      projectDesc: "Replace this card, add more, or remove it. Each project can have its own image, description, and links.",
      image: "", imageAlt: "", footerLink: []}
  ], display: true
};
const achievementSection = {
  title: "Achievements & certifications", subtitle: "Recognition, qualifications, and milestones.",
  achievementsCards: [{title: "Your achievement", subtitle: "A brief description.",
    image: "", imageAlt: "", footerLink: [{name: "Learn more", url: ""}]}], display: false
};
const blogSection = {
  title: "Writing", subtitle: "Notes, ideas, and things I've learned.", displayMediumBlogs: "false",
  blogs: [{title: "Your article", description: "A short introduction.", url: ""}], display: false
};
const talkSection = {
  title: "Talks", subtitle: "Presentations, workshops, and conversations.",
  talks: [{title: "Your talk", subtitle: "Event and date", slides_url: "", event_url: ""}], display: false
};
const podcastSection = {title: "Conversations", subtitle: "Podcasts and interviews.", podcast: [], display: false};
const resumeSection = {title: "Resume", subtitle: "A little more about my background.", display: false};
const contactInfo = {
  title: emoji("Reach out to me! ☎️"),
  subtitle: "Have a project in mind, a question about my work, or just want to say hello? I'd love to connect.",
  number: "", email_address: "hello@example.com"
};
const twitterDetails = {userName: "", display: false};
const isHireable = false;

// Add arbitrary extra sections without writing a new component:
// {id:'maps',title:'Selected maps',subtitle:'...',display:true,
// items:[{title:'...',description:'...',image:'/images/map.png',
// links:[{name:'View map',url:'https://...'}]}]}
const customSections = [];
const footer = {text: "Your Name · Urban planning & transportation analysis", showAttribution: true};
const siteMetadata = {
  title: "Your Name | Urban Planner & Transportation Analyst",
  description: "Urban planning, transportation analysis, and geospatial work by Your Name."
};
// Rearrange this list to rearrange the site. Remove a name to omit that section.
const sectionOrder = ["greeting", "skills", "projects", "custom", "experience",
  "education", "proficiency", "opensource", "achievements", "writing",
  "talks", "twitter", "podcasts", "contact"];
export {
  illustration, greeting, socialMediaLinks, splashScreen, skillsSection,
  educationInfo, techStack, workExperiences, openSource, bigProjects,
  achievementSection, blogSection, talkSection, podcastSection, contactInfo,
  twitterDetails, isHireable, resumeSection, customSections, footer, siteMetadata, sectionOrder
};
