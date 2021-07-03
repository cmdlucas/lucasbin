export interface Project {
  title: string;
  description: string;
  roles: string[];
  linkToProject?: string;
  techStack?: string[];
  desktopScreenshot?: string;
}

const SOFTWARE_ENGINEER = "Software Engineer";
const CTO = "CTO";
const CO_FOUNDER = "Co-Founder";

const zubbah: Project = {
  title: "ZUBBAH.COM (C. 2016 - 2017)",
  description: "Online marketplace for a wide range of products.",
  roles: [SOFTWARE_ENGINEER],
  linkToProject: "https://zubbah.com",
};

const jolibizAjent: Project = {
  title: "JOLIBIZ AGENT (C. 2017 - 2019)",
  description: "Deals management platform for educational consultants.",
  roles: [SOFTWARE_ENGINEER],
  linkToProject: "https://jolibiz.com",
};

const tokeeto : Project = {
  title: "TOKEETO (C. 2019 - DATE)",
  description: "Inter-city bus hailing service.",
  roles: [CO_FOUNDER, CTO],
  linkToProject: "https://tokeeto.com",
}

const jimdo: Project = {
  title: "JIMDO (C. 2020 - DATE)",
  description: "Website builder for small businesses.",
  roles: [SOFTWARE_ENGINEER],
  linkToProject: "https://jimdo.com",
}

export const allProjects = [jimdo, tokeeto, jolibizAjent, zubbah];
