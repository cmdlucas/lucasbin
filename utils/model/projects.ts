interface ProjectThemeCredit {
    link: string
    text: string
}

export interface Project {
    title: string,
    desktopScreenshot: string,
    mobileScreenshot: string,
    description: string[],
    builtWith: string[],
    themeCredit: ProjectThemeCredit
}

const zubbah: Project = {
    title: "ZUBBAH.COM (C. 2016)",
    desktopScreenshot: "/images/portfolio/zubbah/home.png",
    mobileScreenshot: "/images/portfolio/zubbah/home-mobile.png",
    description: ["ZUBBAH.COM is a market place for a wide range of products."],
    builtWith: ["LAMP", "Javascript", "AWS", "CDN"],
    themeCredit: { link: "https://lucasbin.com", text: "Caleb I. Lucas" }
}

const jolibizAjent: Project = {
    title: "JOLIBIZ AGENT (C. 2017)",
    desktopScreenshot: "/images/portfolio/jolibiz-agent/dashboard.png",
    mobileScreenshot: "/images/portfolio/jolibiz-agent/dashboard-mobile.png",
    description: ["JOLIBIZ AGENT is a deals management platform for educational consultants."],
    builtWith: ["LAMP", "Javascript", "Laravel", "ReactJS"],
    themeCredit: { link: "https://creative-tim.com", text: "Creative Tim" }
}

const citiChannels: Project = {
    title: "CITI CHANNELS (C. 2018)",
    desktopScreenshot: "/images/portfolio/citichannels/dashboard.png",
    mobileScreenshot: "/images/portfolio/citichannels/mobile-app.png",
    description: ["CITI CHANNELS is a dedicated feed service for government officials."],
    builtWith: ["Android", "LAMP", "Javascript", "Laravel", "ReactJS"],
    themeCredit: { link: "https://lucasbin.com", text: "Caleb I. Lucas" }
}
export const allProjects = [zubbah, jolibizAjent, citiChannels]