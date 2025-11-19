export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Transform hospital operations",
    des: "Neo EHR provides you with a 360 degree view: the most relevant data you need for clinical care, growing revenues and managing pharmacy inventory",
    img: "/neo-ehr.png",
    iconLists: [
      "/next.svg",
      "/net.svg",
      "/postgres.svg",
      "/ts.svg",
      "/redux.svg",
    ],
    link: "https://neopharm.dev.plural.health/signup ",
  },
  {
    id: 2,
    title: "Transform pharmacy operations",
    des: "Modern pharmacy management system with offline-first architecture, real-time inventory tracking, POS integration, and multi-outlet support for seamless pharmaceutical operations.",
    img: "/neo-pharmacy.webp",
    iconLists: [
      "/next.svg",
      "/net.svg",
      "/postgres.svg",
      "/ts.svg",
      "/redux.svg",
    ],
    link: "https://neopharm.dev.plural.health/signup",
  },
  {
    id: 3,
    title: "Healthcare Technology Website",
    des: "Modern, performance-optimized website for Plural Health's healthcare management solutions including EHR systems, patient apps, and insurance platforms",
    img: "/plural-health.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
    link: "https://plural.health",
  },
  {
    id: 2,
    title: "Jetron - Finding & Attending events",
    des: "A platform for you to discover, share and promote your events, Sell your event tickets here!",
    img: "/jetron.svg",
    iconLists: [
      "/next.svg",
      "/chakra-ui.svg",
      "/ts.svg",
      "/node-js.svg",
      "/postgres.svg",
    ],
    link: "https://www.jetronticket.com/",
  },
  {
    id: 3,
    title: "Girls 4 Leadership",
    des: "Girls 4 Leadership Initiative (G4L) imbibes a culture of inclusion which allows us to engage boys and men in our programs and projects.",
    img: "/leadership.svg",
    iconLists: ["/next.svg", "/airtable.svg", "/ts.svg", "/redux.svg"],
    link: "https://girls4leadership.org/",
  },
  {
    id: 3,
    title: "Homiverse",
    des: "Platform offers thoroughly vetted apartments, reliable roommate matching, and streamlined property management - all in one place",
    img: "/homiverse.svg",
    iconLists: ["/next.svg", "/ts.svg", "/redux.svg"],
    link: "https://homiverse.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "NeoEHR supercharges productivity with intuitive tools, AI suggestions, voice-to-text, and live reports — streamlining patient tracking, inventory, and remote work for busy healthcare teams",
    name: "Dr Dahiru Yunusa",
    title: "Consultant Radiologist",
  },
  {
    quote:
      "Since switching to Plural Health's NeoEHR, we've seen faster prescription dispensing and tighter inventory control. It's a clear upgrade that's improved accuracy and efficiency across the board",
    name: "Pharm. Kish Ndungati",
    title: "Pharmacist",
  },
  {
    quote:
      "NeoEHR has transformed our operations—boosting revenue recovery, closing billing loopholes, and adding transparency to test orders. Tracking hospital income is now seamless and accurate",
    name: "Jerry Chima Ekeuhie",
    title: "Medical Laboratory Scientist",
  },
  {
    quote:
      "NeoEHR meets all our clinical needs — outpatient, inpatient, lab, and pharmacy. It's user-friendly, efficient, and our staff adapted quickly with minimal training.",
    name: "Tolulope Kolawole",
    title: "IT & Administrative Manager",
  },
];
export const companies = [
  {
    id: 1,
    name: "Plateuamed",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Homiverse",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Samar",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Senior Full Stack Developer at Plural Health",
    desc: "Led frontend architecture for 15+ core EHR modules serving 10,000+ daily users. Built multi-tenant system with .NET Core, React Native mobile app, and achieved 85%+ test coverage. Reduced bundle size by 40% and improved performance significantly.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer at Jetron Mall Limited",
    desc: "Built next-generation e-commerce marketplace using React, TypeScript, GraphQL Apollo Client connecting 500+ brands with 10,000+ active buyers. Developed custom OAuth2 authentication system and optimized GraphQL queries reducing requests by 60%.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full Stack Developer at Samar Digital Wallet",
    desc: "Developed tax-free shopping digital wallet platform using Gatsby.js and Airtable, processing €500K+ monthly transactions. Integrated multiple payment gateways with PCI-DSS compliance and implemented SEO strategy increasing organic traffic by 45%.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Frontend Developer at Canary Point Corporate Services",
    desc: "Built responsive finance management application using React, Redux, and Strapi CMS serving 1,000+ corporate clients. Developed reusable component library with CSS Modules reducing development time by 30%.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Raashot12",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/rashdev_i",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rasheed-dev/",
  },
];
