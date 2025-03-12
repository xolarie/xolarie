const navDatas = [
    {page: "Home", path: "/"},
    {page: "Services",
        dropdown: [
            {page: "Web Development", path: "/services/web-development"},
            {page: "App Development", path: "/services/app-development"},
            {page: "Backend and Database Management", path: "/services/backend-development"},
            {page: "UI/UX Design", path: "/services/ui-ux"},
            {page: "Gaming", path: "/services/gaming"},
            {page: "Animation", path: "/services/animation"},
            {page: "Robotics and AI Solutions", path: "/services/robotics-ai"},
            {page: "Project management", path: "/services/project-management"},
        ]
    },
    {page: "Solutions",
        dropdown: [
            {page: "Custom Software Solutions", path: "/solutions/software"},
            {page: "E-commerce Platforms", path: "/solutions/ecommerce"},
            {page: "AI-Powered Automation", path: "/solutions/ai-automation"},
            {page: "Enterprise System Integration", path: "/solutions/enterprise"}
        ]
    },
    {page: "Resources",
        dropdown: [
            {page: "Blog", path: "/resources/blog"},
            {page: "Tech News & Updates", path: "/resources/tech-news"},
            // {page: "Open Source Projects", path: "/resources/projects"},
            // {page: "Documentation", path: "/resources/documentation"},
            // {page: "API Documentation", path: "/resources/api-documentation"}
        ]
    },
    {page: "Careers",
        dropdown: [
            {page: "Jobs Openings", path: "/careers/job-opening"},
            {page: "Internship", path: "/careers/internship"},
            {page: "Recruitment Event", path: "/careers/recruitment"},
            {page: "FAQs", path: "/careers/faqs"}
        ]
    },
    // {page: "Hardware & Gadgets", path: "/solutions/hardware"},

];

const servicesData = [
    {
        title: "Web Development",
        description: "Build responsive, fast, and secure websites with modern technologies.",
        icon: "/images/web.png",
    },
    {
        title: "App Development",
        description: "Create powerful and intuitive mobile applications for both iOS and Android.",
        icon: "/images/app.png",
    },
    {
        title: "Backend & Database Management",
        description: "Optimize and manage your databases for performance, security, and scalability.",
        icon: "/images/backend.png",
    },
    {
        title: "UI/UX Design",
        description: "Enhance user experience through beautifully crafted designs that ensure usability and aesthetic appeal.",
        icon: "/images/uiux.png",
    },
    {
        title: "Gaming",
        description: "Develop captivating gaming experiences with cutting-edge game development technology.",
        icon: "/images/game.png",
    },
    {
        title: "Animation",
        description: "Bring your ideas to life with creative and impactful animations.",
        icon: "/images/animation.png",
    },
    {
        title: "Robotics & AI Solutions",
        description: "Harness the power of AI and robotics to automate processes and create innovative solutions.",
        icon: "/images/ai.png",
    },
    {
        title: "Project Management",
        description: "Efficiently manage projects from concept to completion with our expert guidance and tools.",
        icon: "/images/projectsmgt.png",
    },
]

export { navDatas, servicesData };
