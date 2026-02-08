export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  email?: string;
  github?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO & Founder",
    linkedin: "https://linkedin.com/in/johndoe",
    email: "john@company.com"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO",
    linkedin: "https://linkedin.com/in/janesmith",
    github: "https://github.com/janesmith",
    email: "jane@company.com"
  },
  {
    id: 3,
    name: "Bob Johnson",
    role: "Head of Operations",
    linkedin: "https://linkedin.com/in/bobjohnson",
    email: "bob@company.com"
  },
  {
    id: 4,
    name: "Alice Brown",
    role: "Lead Developer",
    github: "https://github.com/alicebrown",
    email: "alice@company.com"
  },
  {
    id: 5,
    name: "Charlie Wilson",
    role: "Marketing Director",
    linkedin: "https://linkedin.com/in/charliewilson",
    email: "charlie@company.com"
  },
  {
    id: 6,
    name: "Diana Lee",
    role: "Product Manager",
    linkedin: "https://linkedin.com/in/dianalee",
    email: "diana@company.com"
  }
];
