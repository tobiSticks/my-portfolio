import React, { useState } from 'react';
import {
  Code,
  Layers,
  BarChart3,
  BookOpen,
  Mail,
  Linkedin,
  Github,
  Award,
  Calendar,
  Download,
  School,
  Briefcase,
  Database,
  SquareCode,
  Menu, // Imported Menu icon for mobile toggle
  X, // Imported X icon for closing mobile menu
  Terminal, // Imported Terminal icon for CLI projects
  Smartphone, // Imported Smartphone icon for Mobile App projects
  ListTodo, // Imported ListTodo icon for Task Manager
} from 'lucide-react';

// --- Configuration and Dummy Data ---
const portfolioData = {
  name: "Adeniji Oluwatobi Adebayo",
  title: "Aspiring AI Expert | Data Analysis & Software Developer",
  bio: "A recent Computer Science graduate from Landmark University (Class of 2025) with a dual specialization in Data Analysis and Software Development. Driven by a passion for leveraging machine learning and AI to build predictive systems and solve complex, real-world problems. Proficient in React and experienced in full-stack development and data management.",

  contact: {
    email: "padenijiinfinity@gmail.com",
    linkedin: "https://www.linkedin.com/in/oluwatobiadebayo-2b5514397",
    github: "https://github.com/tobiSticks",
    cvUrl: "./public/assets/Tobi cv revamped.pdf", // Placeholder for actual CV PDF link
  },

  skills: {
    languages: ["JavaScript (React)", "Python", "SQL", "Excel (Advanced)", "Dart", "Node.js"],
    frameworks: ["React.js", "Tailwind CSS", "TypeScript", "Flutter"],
    databases: ["MySQL"],
    tools: ["Git", "GitHub", "Jupyter Notebooks", "Postman"],
    concepts: ["Data Structures & Algorithms", "Data Analysis", "Predictive Modeling", "OOP"],
  },

  projects: [
    {
      id: 1,
      title: "Skin Cancer Predictive Model (Multimodal)",
      icon: BarChart3,
      description: "Developed a robust machine learning model capable of predicting skin cancer malignancy. The solution utilized a multimodal dataset (clinical images and patient metadata) and employed transfer learning and feature engineering to achieve high diagnostic accuracy. This project highlights proficiency in data science pipeline development.",
      technologies: ["Python", "TensorFlow/Keras", "NumPy", "Pandas", "Computer Vision"],
      link: "CLASSIFIED/PRIVATE REPO", // Dummy Link
      status: "Model Development Complete",
    },
    {
      id: 2,
      title: "Fashion Designer E-Commerce Web App",
      icon: Layers,
      description: "Built a visually appealing and highly responsive web application for a local fashion designer. The platform features dynamic product listings, high-resolution image galleries, and a user-friendly contact form. Currently prepared for deployment.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript"],
      link: "https://nma-finese.vercel.app/", // Dummy Link
      status: "Ready for Deployment",
    },
    {
      id: 3,
      title: "Enterprise Management System (Confidential)",
      icon: SquareCode,
      description: "Contributed to the development of a private, high-volume management system. Responsible for designing and implementing key front-end components and integrating them with the back-end database for CRUD operations.",
      technologies: ["React.js", "MySQL", "Tailwind CSS"],
      link: "CLASSIFIED/PRIVATE REPO",
      status: "In Progress",
    },
    {
      id: 4,
      title: "CLI File Management System",
      icon: Terminal,
      description: "A comprehensive command-line tool for file system operations. Features include creating files/folders, deleting, writing to files, moving, renaming, changing directories, and system-wide file search.",
      technologies: ["Python", "OS Module", "Shutil"],
      // link: "https://github.com/tobiSticks",
      status: "Completed",
    },
    {
      id: 5,
      title: "CLI Task Manager",
      icon: ListTodo,
      description: "A robust command-line interface application for managing tasks, allowing users to create, view, update, and delete tasks efficiently.",
      technologies: ["Python", "JSON/CSV (Storage)"],
      link: "https://github.com/tobiSticks/CLI-Task-Manager.git",
      status: "Completed",
    },
    {
      id: 6,
      title: "Chat App Onboarding (Flutter)",
      icon: Smartphone,
      description: "Designed and implemented a smooth, 4-page onboarding flow for a mobile chat application currently in production. Focused on user experience and clean UI transitions.",
      technologies: ["Flutter", "Dart"],
      // link: "https://github.com/tobiSticks",
      status: "In Production",
    },
  ],

  experience: [
    {
      type: "Work",
      role: "Front-End Engineer",
      organization: "Nexapay",
      date: "Present",
      description: "Developing responsive user interfaces using React.js and building reusable UI components aligned with product requirements. Responsible for integrating APIs, translating Figma designs into code, and optimizing application performance while collaborating with the team to deliver features on schedule.",
      icon: Briefcase,
    },
    {
      type: "Internship",
      role: "IT/Data Intern",
      organization: "Abuja Electricity Distribution Company (AEDC)",
      date: "Summer 2024",
      description: "Worked extensively with large datasets in Excel, performing data cleaning, aggregation, and analysis. Prepared key statistical reports and visual presentations utilized by senior management for operational planning and decision-making.",
      icon: Briefcase,
    },
    {
      type: "Education",
      role: "B.Sc. Computer Science (Data Analysis & Software Dev.)",
      organization: "Landmark University, Omu-Aran, Kwara State",
      date: "2021 – October 31, 2025",
      description: "Focused coursework in Data Structures, Database Management, Software Engineering, and Artificial Intelligence fundamentals. Graduated with a strong foundation in both theoretical and practical aspects of computing.",
      icon: School,
    },
  ],
};

// --- Reusable Components ---

const SectionTitle = ({ children, icon: Icon }) => (
  <h2 className="text-3xl font-bold mb-8 text-indigo-700 flex items-center border-b-2 border-indigo-200 pb-2">
    <Icon className="w-7 h-7 mr-3 text-indigo-500" />
    {children}
  </h2>
);

const Pill = ({ children }) => (
  <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-2 transition hover:bg-indigo-200">
    {children}
  </span>
);

const ProjectCard = ({ project }) => {
  const Icon = project.icon;
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
        <Icon className="w-8 h-8 text-indigo-600 shrink-0" />
      </div>
      <p className="text-sm text-indigo-600 font-medium mb-4">{project.status}</p>
      <p className="text-gray-600 text-sm mb-4 min-h-[72px]">{project.description}</p>

      <div className="mt-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Tech Stack:</p>
        <div className="flex flex-wrap">
          {project.technologies.map(tech => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </div>
      </div>

      {project.link && project.link !== "CLASSIFIED/PRIVATE REPO" && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition duration-150"
        >
          View Code/Details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </a>
      )}
    </div>
  );
};

const ExperienceItem = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="flex relative pb-12">
      {/* Connector Line */}
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
      </div>
      {/* Icon Circle */}
      <div className="shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
        <Icon className="w-4 h-4" />
      </div>
      {/* Content */}
      <div className="flex-grow md:pl-8 pl-6 flex flex-col md:items-start md:text-left">
        <span className="font-semibold title-font text-gray-900 text-lg mb-1">{item.role}</span>
        <span className="text-sm text-gray-600 mb-1">{item.organization}</span>
        <span className="text-xs text-indigo-500 font-medium mb-4 flex items-center"><Calendar className="w-3 h-3 mr-1" />{item.date}</span>
        <p className="leading-relaxed text-gray-600">{item.description}</p>
      </div>
    </div>
  );
};


// --- Main App Component ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* 1. Header & Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-extrabold text-indigo-600 tracking-tight">
            Adeniji Oluwatobi Adebayo
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex space-x-6 text-gray-600 font-medium items-center">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-indigo-600 transition duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href={portfolioData.contact.cvUrl}
              // target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ml-4"
              download="Tobi cv revamped.pdf"
            >
              Download CV <Download className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-indigo-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Drawer (Conditional Rendering) */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white shadow-lg pb-4 transition duration-300 ease-in-out">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={portfolioData.contact.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="block w-full text-center px-4 py-2 mt-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
              >
                Download CV <Download className="w-4 h-4 inline ml-2" />
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* 2. Hero/About Section */}
        <section id="about" className="pt-16 pb-20 bg-white rounded-2xl shadow-xl p-8 sm:p-12 mb-16">
          <div className="md:flex md:items-center">
            {/* Image/Avatar Placeholder */}
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-200 shadow-md">
                <img
                  src="./assets/TOBI.jpg"
                  alt="AO"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">{portfolioData.name}</h1>
              <p className="text-xl sm:text-2xl text-indigo-600 font-light mb-4">{portfolioData.title}</p>
              <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">{portfolioData.bio}</p>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="flex items-center text-indigo-600 hover:text-indigo-800 transition duration-150"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 mr-1" />
                  Email
                </a>
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-600 hover:text-indigo-800 transition duration-150"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 mr-1" />
                  LinkedIn
                </a>
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-600 hover:text-indigo-800 transition duration-150"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 mr-1" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Skills Section */}
        <section id="skills" className="py-12">
          <SectionTitle icon={Code}>Technical Skills</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="p-6 bg-white rounded-xl shadow-md border-t-4 border-indigo-500">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center"><SquareCode className="w-5 h-5 mr-2 text-indigo-600" /> Languages</h3>
              <div className="flex flex-wrap">
                {portfolioData.skills.languages.map(skill => <Pill key={skill}>{skill}</Pill>)}
              </div>
            </div>

            {/* Frameworks & Databases */}
            <div className="p-6 bg-white rounded-xl shadow-md border-t-4 border-indigo-500">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center"><Database className="w-5 h-5 mr-2 text-indigo-600" /> Frameworks & DBs</h3>
              <div className="flex flex-wrap">
                {portfolioData.skills.frameworks.map(skill => <Pill key={skill}>{skill}</Pill>)}
                {portfolioData.skills.databases.map(skill => <Pill key={skill}>{skill}</Pill>)}
              </div>
            </div>

            {/* Tools & Concepts */}
            <div className="p-6 bg-white rounded-xl shadow-md border-t-4 border-indigo-500">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center"><BookOpen className="w-5 h-5 mr-2 text-indigo-600" /> Tools & Concepts</h3>
              <div className="flex flex-wrap">
                {portfolioData.skills.tools.map(skill => <Pill key={skill}>{skill}</Pill>)}
                {portfolioData.skills.concepts.map(skill => <Pill key={skill}>{skill}</Pill>)}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Projects Section */}
        <section id="projects" className="py-12">
          <SectionTitle icon={Layers}>Featured Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 5. Experience Section */}
        <section id="experience" className="py-12">
          <SectionTitle icon={Award}>Experience & Education</SectionTitle>
          <div className="bg-white p-6 rounded-xl shadow-xl">
            {portfolioData.experience.map((item, index) => (
              // Hide the connector line for the last item
              <React.Fragment key={index}>
                <ExperienceItem item={item} />
                {index < portfolioData.experience.length - 1 && <div className="ml-3 sm:ml-6 h-4 w-0.5 bg-gray-200"></div>}
              </React.Fragment>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Adeniji Oluwatobi Adebayo. Built with React & Tailwind CSS.</p>
          <p className="mt-1">Designed for showcasing Data Analysis and Software Development skills.</p>
        </div>
      </footer>

    </div>
  );
}
