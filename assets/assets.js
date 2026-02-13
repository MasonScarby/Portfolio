import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import headshot from './headshot.png';


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    headshot,
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]
export const serviceData = [
    { 
        icon: assets.web_icon, 
        title: 'Full-Stack Development', 
        description: 'Developing scalable web applications using React, Next.js, Laravel, and C#.NET with seamless frontend-backend integration.', 
        link: '' 
    },
    { 
        icon: assets.mobile_icon, 
        title: 'Database Management & Security', 
        description: 'Optimizing SQL Server and PostgreSQL databases while implementing security best practices for data integrity and protection.', 
        link: '' 
    },
    { 
        icon: assets.graphics_icon, 
        title: 'Software Engineering & Agile Development', 
        description: 'Building efficient and maintainable software solutions in C#.NET while collaborating in Agile environments.', 
        link: '' 
    },
    { 
        icon: assets.ui_icon, 
        title: 'UI/UX & Frontend Development', 
        description: 'Designing responsive and user-friendly interfaces using React, Next.js, and Tailwind CSS for optimal user experience.', 
        link: '' 
    }
];


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'C#.NET, Python, PHP, JavaScript, Java' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'A.A.S. in Computer Software Engineering, Thaddeus Stevens College' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Developed full-stack applications and database-driven systems' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];

export const portfolioCategories = [
    { id: "all", label: "All Projects", icon: assets.project_icon },
    { id: "software-development", label: "Software Development", icon: assets.web_icon },
    { id: "automations", label: "Automations", icon: assets.graphics_icon }
];

export const portfolioData = [
    // Software Development Projects
    {
        id: 1,
        title: "E-commerce Platform",
        category: "software-development",
        description: "Full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard for managing products and orders.",
        technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
        image: "/projects/ecommerce-placeholder.png",
        featured: true
    },
    {
        id: 2,
        title: "Home Management System",
        category: "software-development",
        description: "Comprehensive property management solution for residential homes including tenant tracking, maintenance scheduling, and financial reporting.",
        technologies: ["React", "Laravel", "PostgreSQL", "Tailwind CSS"],
        image: "/projects/home-management-placeholder.png",
        featured: true
    },
    {
        id: 3,
        title: "Budget App with AI",
        category: "software-development",
        description: "AI-powered budgeting application that provides intelligent spending insights, automated categorization, and personalized financial recommendations.",
        technologies: ["React", "Next.js", "Python", "OpenAI API"],
        image: "/projects/budget-ai-placeholder.png",
        featured: true
    },
    {
        id: 4,
        title: "C# Auto-Palletization Algorithm",
        category: "software-development",
        description: "Optimization algorithm for automated pallet loading that maximizes space efficiency and reduces shipping costs for warehouse operations.",
        technologies: ["C#", ".NET", "Algorithm Design"],
        image: "/projects/palletization-placeholder.png",
        featured: false
    },
    // Automation Projects
    {
        id: 5,
        title: "Voice AI Appointment System",
        category: "automations",
        description: "Integrated voice AI system using Retell, N8N, and Go HighLevel for automated appointment scheduling and customer interactions.",
        technologies: ["N8N", "Go HighLevel", "Retell AI", "Voice AI"],
        image: "/projects/voice-ai-placeholder.png",
        featured: true
    },
    {
        id: 6,
        title: "Auto Follow-Up Process",
        category: "automations",
        description: "Automated follow-up workflow system that manages customer communications and ensures timely responses across multiple channels.",
        technologies: ["N8N", "Go HighLevel", "Email API", "SMS API"],
        image: "/projects/followup-placeholder.png",
        featured: false
    },
    {
        id: 7,
        title: "LinkedIn Follower Scraper",
        category: "automations",
        description: "Automated tool for scraping and analyzing LinkedIn follower data to identify potential leads and network connections.",
        technologies: ["N8N", "Apify", "Web Scraping", "API Integration"],
        image: "/projects/linkedin-follower-placeholder.png",
        featured: false
    },
    {
        id: 8,
        title: "LinkedIn Job Scraper with Filters",
        category: "automations",
        description: "Advanced job scraping system with customizable filters using Apify to find relevant job opportunities based on specific criteria.",
        technologies: ["N8N", "Apify", "Job Filters", "Automation"],
        image: "/projects/linkedin-job-placeholder.png",
        featured: false
    }
];