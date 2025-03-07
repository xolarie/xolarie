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

export default navDatas;
