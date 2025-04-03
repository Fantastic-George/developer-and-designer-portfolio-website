# Developer & Designer Portfolio Website

A modern, customizable portfolio website built with Next.js and Tailwind CSS for developers and designers to showcase their work, skills, and achievements.

![Portfolio Website Preview](https://github.com/Fantastic-George/developer-and-designer-portfolio-website/blob/main/public/demo.gif)

## Features

- **Responsive Design**: Looks great on all devices, from mobile to desktop
- **Customizable Content**: Easily update your information through a central configuration file
- **Project Showcase**: Display your work with filterable categories
- **Skills & Expertise**: Visualize your technical proficiency with progress bars
- **Achievements Section**: Highlight your accomplishments with a clean, modern design
- **Contact Form**: Allow visitors to get in touch with you
- **Dark/Light Mode**: Support for both color schemes (coming soon)
- **SEO Optimized**: Built with best practices for search engine visibility

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Lucide Icons](https://lucide.dev/) - Beautiful open-source icons

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal-website.git
   cd personal-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio.

## How It Works

### Project Structure

```
personal-website/
├── app/                  # Next.js app directory
│   ├── components/       # React components
│   │   ├── ui/           # UI components (buttons, cards, etc.)
│   │   ├── About.tsx     # About section component
│   │   ├── Projects.tsx  # Projects section component
│   │   └── ...           # Other section components
│   ├── page.tsx          # Main page component
│   └── ...               # Other app files
├── public/               # Static assets
├── Config.js             # Main configuration file
├── types.ts              # TypeScript type definitions
└── ...                   # Other configuration files
```

### Customization

#### 1. Main Configuration

The `Config.js` file in the root directory is the central place to customize most of your website content:

```javascript
// Config.js
const config = {
  // Personal Information
  name: "Your Name",
  headline: "Your Headline",
  about: "Your detailed bio...",
  
  // Section Titles & Subtitles
  featuredProjects: "Featured Projects",
  featuredProjectsSubtitle: "A selection of my work...",
  
  // Achievements
  achievements: [
    {
      id: 1,
      title: "Achievement Title",
      emoji: "🏆",
      year: "2023",
      description: "Description of your achievement..."
    },
    // Add more achievements...
  ],
  
  // Skills
  skillGroup: [
    {
      id: 1,
      skillGroupTitle: "Development",
      skills: [
        {
          id: 1,
          name: "React",
          percentage: 90
        },
        // Add more skills...
      ]
    },
    // Add more skill groups...
  ],
  
  // Contact Information
  contactEmail: "your.email@example.com",
  contactLinkedin: "https://linkedin.com/in/yourusername",
  contactGithub: "https://github.com/yourusername",
}

export const Config = config;
```

#### 2. Adding Projects

Projects are defined in the `app/components/projects.tsx` file. To add or modify projects:

```typescript
// app/components/projects.tsx
const projectsData: Project[] = [
  {
    id: "project-id",
    title: "Project Title",
    description: "Short project description",
    content: "Detailed project content...",
    image: "/project-image.jpg", // Place images in the public folder
    category: "Web", // Category for filtering (Web, Mobile, AI, etc.)
    links: {
      demo: "https://demo-link.com",
      source: "https://github.com/yourusername/project"
    }
  },
  // Add more projects...
];
```

#### 3. Customizing Categories

Project categories for filtering are defined in the `Projects.tsx` component. To modify categories:

1. Update the TabsList in the Tabs component:
   ```tsx
   <TabsList>
     <TabsTrigger value="all">All Projects</TabsTrigger>
     <TabsTrigger value="Web">Web</TabsTrigger>
     <TabsTrigger value="Mobile">Mobile</TabsTrigger>
     <TabsTrigger value="AI">AI & ML</TabsTrigger>
     {/* Add your custom category */}
     <TabsTrigger value="Design">Design</TabsTrigger>
   </TabsList>
   ```

2. Add a corresponding TabsContent for each new category:
   ```tsx
   <TabsContent value="Design" className="space-y-8">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {projectsData
         .filter(project => project.category === "Design")
         .map(project => (
           <ProjectCard key={project.id} project={project} />
         ))}
     </div>
   </TabsContent>
   ```

#### 4. Adding Images

1. Place your images in the `public` directory
2. Reference them in your projects or configuration:
   ```typescript
   image: "/your-image-name.jpg" // No need to include "public" in the path
   ```

## Deployment

### Deploying to Vercel (Recommended)

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with a single click

### Other Deployment Options

You can also deploy to any platform that supports Next.js applications:

- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [GitHub Pages](https://pages.github.com/) (with additional configuration)

## Customization Tips

- **Colors**: Modify the Tailwind configuration in `tailwind.config.js` to match your brand colors
- **Fonts**: Change fonts by updating the font imports in `app/layout.tsx`
- **Layout**: Adjust the layout by modifying the components in the `app/components` directory
- **Adding Pages**: Create new pages in the `app` directory following Next.js 13+ conventions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework used
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - For the beautiful UI components
