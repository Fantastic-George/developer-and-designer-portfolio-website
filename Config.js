const config = {

    // 💡 HEADER SECTION
    // ℹ️ Add your name here - ✅ This is required for the app to function
    name: "George Lam",

    // ℹ️ Add your headline here - ✅ This is required for the app to function
    headline: "An Award Winning Designer",

    // 💡 ABOUT SECTION
    // ℹ️ Add your long bio here - ✅ This is required for the app to function
    about: `I'm George Lam, a multidisciplinary creator with a passion for building innovative technology products. 
            With a background spanning design, development, and product management, I bring a unique perspective to every project.
            My work is driven by a desire to solve complex problems with elegant solutions. I believe in the power of technology 
            to transform lives and businesses, and I'm constantly exploring new ways to push the boundaries of what's possible.
            When I'm not creating, you can find me exploring new technologies, contributing to open-source projects, 
            or mentoring the next generation of tech innovators.`,


    // 💡 PROJECTS SECTION
    // ℹ️ You can change the way your projects are described, for example "Best Work" - this is an optional change
    featuredProjects: "Featured projects",
    featuredProjectsSubtitle: "A selection of my most impactful work across various domains",

    // 💡 ACHIEVEMENTS SECTION
    // ℹ️ Add your achievements here - this is required for the app to function
    
    achievementsTitle: "Achievements & Recognition",
    achievementsSubtitle: "A selection of my most impactful work across various domains",
    
    achievements: [
        {
            id: 1,
            title: "Innovation Award",
            emoji: "🏆",
            year: "2025",
            description: "Recognized for groundbreaking work in AI-assisted design tools that revolutionized the creative workflow for thousands of designers."
        },
        {
            id: 2,
            title: "App of the Year",
            emoji: "📱",
            year: "2022",
            description: "EcoTrack was selected as \"App of the Year\" by GreenTech Magazine for its impact on sustainable living practices."
        },
        {
            id: 3,
            title: "Research Fellowship",
            emoji: "🎓",
            year: "2021",
            description: "Awarded prestigious research fellowship to explore the intersection of machine learning and human-computer interaction."
        }
    ],

    // 💡 SKILLS SECTION
    // ℹ️ Add your skills here - this is required for the app to function
    skillsTitle: "Skills & Expertise",
    skillsSubtitle: "My technical toolkit and areas of specialization",

    // ℹ️ Display your skills in skill groups (we recommend two), and choose individual skills within these larger groups (ie, Development as the skill group and within that React, Vue, Angular)
    // Within every individual skill you can set the percentage to represent your mastery of the skill which will be displayed as a progress bar.
    // 🤓 Remember, in the skills.tsx file we call the array number, which starts counting from 0, so the first skill group is 0, the second is 1, and so on.
    skillGroup: [
        {
            id: 1,
            skillGroupTitle: "Development",
            skills: [
                {
                    id: 1,
                    name: "React",
                    percentage: 30
                },
                {
                    id: 2,
                    name: "Vue",
                    percentage: 60
                },
                {
                    id: 3,
                    name: "Angular",
                    percentage: 85
                },
                {
                    id: 4,
                    name: "DevOps",
                    percentage: 100
                }
            ]
        },
        {
            id: 2,
            skillGroupTitle: "Config Design",
            skills: [
                {
                    id: 1,
                    name: "Figma",
                    percentage: 100
                },
                {
                    id: 2,
                    name: "Adobe XD",
                    percentage: 85
                },
                {
                    id: 3,
                    name: "Sketch",
                    percentage: 60
                },
                {
                    id: 4,
                    name: "AI/ML Integration",
                    percentage: 30
                }
            ]
        }
    ]



}

export const Config = config;