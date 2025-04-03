// Define project type
export interface Project {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  category: string; // 'Web', 'Mobile', or 'AI'
  links: {
    demo?: string;
    source?: string;
  };
}
