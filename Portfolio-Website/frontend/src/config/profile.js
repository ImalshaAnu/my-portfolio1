const profile = {
  name: "Imalsha Beruwala",
  avatar: "kk.jpg", // Using kk.jpg from public folder
  role: "Full-Stack Developer & IT Undergraduate",
  location: "Sri Lanka",
  email: "imalshaanupamal@gmail.com",
  phone: "0717413703",
  website: "https://www.linkedin.com/in/imalsha-beruwala-141188324",
  about:
    "I am a passionate and hardworking 3rd-year IT undergraduate at SLIIT. I have hands-on experience in full-stack development, mobile app development, and desktop applications through university and individual projects. I am eager to apply my technical skills in a dynamic and challenging environment.",
  social: {
    github: "https://github.com/ImalshaAnu?tab=repositories",
    linkedin: "https://www.linkedin.com/in/imalsha-beruwala-141188324",
    twitter: "",
  },
  techStack: [
    "Java",
    "C++",
    "C",
    "JavaScript",
    "SQL",
    "Kotlin",
    "PHP",
    "Spring",
    "Node.js",
    "React.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "SQL Server",
    "Git"
  ],
  skills: [
    { name: "Java & Spring", level: 90 },
    { name: "C++ & C", level: 85 },
    { name: "React.js & Node.js", level: 88 },
    { name: "MongoDB & MySQL", level: 82 },
    { name: "JavaScript & PHP", level: 80 },
    { name: "Kotlin (Android)", level: 78 },
    { name: "Git & Version Control", level: 85 },
  ],
  projects: [
    {
      title: "Gaming Site",
      description:
        "Developed a website to manage and display games, with admin and user functionalities.",
      tags: ["Java", "MySQL"],
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop",
      live: "https://yourdomain.com/gaming-site",
      source: "https://github.com/ImalshaAnu/Gaming-Website",
    },
    {
      title: "Surplus Food Reduction and Redistribution System",
      description:
        "Built a platform to connect donors and receivers of surplus food, promoting zero waste.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1600&auto=format&fit=crop",
      live: "https://yourdomain.com/food-system",
      source: "https://github.com/ImalshaAnu/ITP-Project",
    },
    {
      title: "Expenses Tracking App",
      description:
        "Created an Android app to track daily expenses and generate monthly summaries.",
      tags: ["Kotlin", "SQLite", "Android"],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop",
      live: "https://yourdomain.com/expenses-app",
      source: "https://github.com/ImalshaAnu/FInanceTracker",
    },
    {
      title: "Coconut Products E-commerce Website",
      description:
        "Developed a full-stack web application using Spring Boot (backend), React (frontend), and MySQL (database). Implemented RESTful APIs, integrated database operations, and built responsive user interfaces for smooth user experience.",
      tags: ["Spring Boot", "React", "SQL Server"],
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1600&auto=format&fit=crop",
      live: "https://yourdomain.com/cocolanka",
      source: "https://github.com/ImalshaAnu/coconut-product-pro",
    },
  ],
  experience: [
    {
      company: "SLIIT",
      role: "IT Undergraduate Student",
      period: "2023 — Present",
      bullets: [
        "Studying Bachelor's Degree in Information Technology",
        "Working on various full-stack development projects",
        "Learning mobile app development with Kotlin",
        "Gaining experience in database design and management",
      ],
    },
  ],
  education: [
    { 
      school: "Sri Lanka Institute of Information Technology (SLIIT)", 
      degree: "Bachelor's Degree in Information Technology", 
      period: "2023 — Present" 
    },
    { 
      school: "D.B.welagedara C.C Kurunegala, Sri Lanka", 
      degree: "GCE Advanced Level Examination in Engineering Technology (Engineering Technology, Information and Communication Technology, Science For Technology; Sinhala Medium)", 
      period: "2021" 
    },
    { 
      school: "British Way English Academy", 
      degree: "Certificate in English Language", 
      period: "2022" 
    },
  ],
  achievements: [
    "Certificate in English Language from British Way English Academy (2022)",
    "Successfully passed the GCE Advanced Level Examination in Engineering Technology (2021)",
    "Successfully completed multiple full-stack development projects",
    "Developed and deployed mobile applications",
    "Experience with multiple programming languages and frameworks",
  ],
  references: [
    {
      name: "Madhuka Amarasinghe",
      position: "Senior Software Engineer",
      email: "madhuka@acecamtech.com",
      contact: "0766345388",
      company: "AceCam Technology, Kadawatha, Srilanka"
    }
  ],
  // Place the PDF in frontend/public with this exact name or adjust the path below
  // Using URL-encoded spaces and parentheses to match the provided filename
  resumeUrl: "/Professional%20Minimalist%20CV%20Resume%20(5).pdf",
};

export default profile;


