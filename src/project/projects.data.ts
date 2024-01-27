const Role = {
  SOFTWARE_ENGINEERING: 'Software Engineering',
  CTO: 'CTO',
  CO_FOUNDER: 'Co-Founder',
} as const;

type Roles = (typeof Role)[keyof typeof Role][];

export interface Project {
  title: string;
  description: string;
  roles: Roles;
  linkToProject?: string;
  techStack?: string[];
  desktopScreenshot?: string;
}

const zubbah: Project = {
  title: 'ZUBBAH.COM (C. 2016 - 2017)',
  description: 'Online marketplace for a wide range of products.',
  roles: [Role.SOFTWARE_ENGINEERING],
  linkToProject: 'https://zubbah.com',
};

const jolibizAjent: Project = {
  title: 'JOLIBIZ AGENT (C. 2017 - 2019)',
  description: 'Deals management platform for educational consultants.',
  roles: [Role.SOFTWARE_ENGINEERING],
  linkToProject: 'https://jolibiz.com',
};

const tokeeto: Project = {
  title: 'TOKEETO (C. 2019 - 2020)',
  description: 'Inter-city bus hailing service.',
  roles: [Role.CO_FOUNDER, Role.CTO],
  linkToProject: 'https://tinyurl.com/tokeeto-rider',
};

const jimdo: Project = {
  title: 'JIMDO (C. 2020 - 2022)',
  description: 'Website builder for small businesses.',
  roles: [Role.SOFTWARE_ENGINEERING],
  linkToProject: 'https://jimdo.com',
};

const mero: Project = {
  title: 'MERO (C. 2021 - 2022)',
  description: 'Property cleaning management.',
  roles: [Role.SOFTWARE_ENGINEERING],
  linkToProject: 'https://mero.co',
};

const collectAI: Project = {
  title: 'COLLECT AI (C. 2022 - DATE)',
  description: 'Dunning process management for businesses.',
  roles: [Role.SOFTWARE_ENGINEERING],
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
