const SOFTWARE_ENGINEERING = 'Software Engineering' as const;
const CTO = 'CTO' as const;
const CO_FOUNDER = 'Co-Founder' as const;

type Role = typeof SOFTWARE_ENGINEERING | typeof CTO | typeof CO_FOUNDER;

export interface Project {
  title: string;
  description: string;
  roles: Role[];
  linkToProject?: string;
  techStack?: string[];
  desktopScreenshot?: string;
}

const zubbah: Project = {
  title: 'ZUBBAH.COM (C. 2016 - 2017)',
  description: 'Online marketplace for a wide range of products.',
  roles: [SOFTWARE_ENGINEERING],
  linkToProject: 'https://zubbah.com',
};

const jolibizAjent: Project = {
  title: 'JOLIBIZ AGENT (C. 2017 - 2019)',
  description: 'Deals management platform for educational consultants.',
  roles: [SOFTWARE_ENGINEERING],
  linkToProject: 'https://jolibiz.com',
};

const tokeeto: Project = {
  title: 'TOKEETO (C. 2019 - 2020)',
  description: 'Inter-city bus hailing service.',
  roles: [CO_FOUNDER, CTO],
  linkToProject: 'https://tokeeto.com',
};

const jimdo: Project = {
  title: 'JIMDO (C. 2020 - 2022)',
  description: 'Website builder for small businesses.',
  roles: [SOFTWARE_ENGINEERING],
  linkToProject: 'https://jimdo.com',
};

const mero: Project = {
  title: 'MERO (C. 2021 - 2022)',
  description: 'Property cleaning management.',
  roles: [SOFTWARE_ENGINEERING],
  linkToProject: 'https://mero.co',
};

const collectAI: Project = {
  title: 'COLLECT AI (C. 2022 - DATE)',
  description: 'Dunning process management for businesses.',
  roles: [SOFTWARE_ENGINEERING],
  linkToProject: 'https://collect.ai',
};

export const allProjects = [
  collectAI,
  jimdo,
  mero,
  tokeeto,
  jolibizAjent,
  zubbah,
];
