import creditCardImg from "../assets/image.png";
import musifyImg from "../assets/Musify.png";

export const personalInfo = {
  name: "Danush Kumar K",
  role: "Backend Developer | Java & REST APIs",
  tagline: "I build scalable backend systems using Java, OOP principles, and RESTful APIs.",
  aboutParagraphs: [
    "I'm a backend-focused developer who enjoys designing clean, maintainable systems. My core strength is Java — from object-oriented architecture and design patterns to building rule-based engines and REST APIs. I think in terms of structure, hierarchy, and how components talk to each other.",
    "I also build frontend interfaces with React and Tailwind CSS, which gives me a full-picture understanding of how users interact with the systems I design. Right now, I'm deepening my skills in Spring Boot, microservices, and containerization with Docker."
  ],
  email: "danushkumark2006@gmail.com",
  location: "Chennai, Tamil Nadu, India",
  available: true,
  resumeUrl: "/DanushKumarK Resume.pdf",
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/danushkumar01",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/danushkumark01",
    icon: "Linkedin",
  },
];

export const skills = [
  { name: "Java", category: "Backend" },
  { name: "OOP & Design Patterns", category: "Backend" },
  { name: "REST API Development", category: "Backend" },
  { name: "SQL / MySQL", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Spring Boot", category: "Currently Learning" },
  { name: "Microservices", category: "Currently Learning" },
  { name: "Docker", category: "Currently Learning" },
];

export const projects = [
  {
    id: 1,
    title: "Credit Card Recommendation & Eligibility System",
    description: "Designed a rule-based recommendation engine that matches users to optimal credit cards based on income, credit score, and spending patterns. Built with a deep OOP class hierarchy — abstract base classes, 4 specialized card subclasses (Travel, Cashback, Fuel, Premium), and a 6-condition rule engine using polymorphic dispatch. Emphasis on clean encapsulation, validated state, and custom exception handling.",
    image: creditCardImg,
    tags: ["Java", "OOP Design", "Rule Engine", "Polymorphism"],
    liveUrl: "#",
    githubUrl: "https://github.com/danushkumar01",
    featured: true,
  },
  {
    id: 2,
    title: "Musify - Music Streaming App",
    description: "Built a full-featured music streaming app to solve the problem of managing and playing audio from a cloud library. Architected 15+ modular React components across player, playlist, and navigation layers with centralized state management. Integrated Cloudinary for scalable audio storage and Firebase Hosting for deployment. Features real-time progress tracking, playlist CRUD, and responsive playback controls.",
    image: musifyImg,
    tags: ["React", "JavaScript", "Tailwind CSS", "Firebase", "Cloudinary"],
    liveUrl: "https://musify-f479f.web.app/",
    githubUrl: "https://github.com/danushkumar01/Musify_Project",
    featured: true,
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
