const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        title: "Frontend Redesign",
        description: "Revamp homepage layout with modern UI.",
        date: "25 Aug 2025",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "API Integration",
        description: "Connect payment gateway with backend.",
        date: "22 Aug 2025",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Testing Module",
        description: "Test cart functionality before launch.",
        date: "23 Aug 2025",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "User Feedback Analysis",
        description: "Collect and analyze customer reviews.",
        date: "23 Aug 2025",
        category: "Research",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Content Strategy",
        description: "Plan blog topics for next quarter.",
        date: "2025-08-20",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Broken Link Fix",
        description: "Identify and repair broken website links.",
        date: "18 Aug 2025",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Ad Campaign",
        description: "Run Google Ads for new product.",
        date: "21 Aug 2025",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCounts: { active: 0, newTask: 2, completed: 1, failed: 1 },
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Server Monitoring",
        description: "Set up alerts for CPU and memory usage.",
        date: "26 Aug 2025",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Employee Training",
        description: "Conduct workshop on agile practices.",
        date: "19 Aug 2025",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Performance Review",
        description: "Evaluate team performance metrics.",
        date: "21 Aug 2025",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "System Logs Review",
        description: "Analyze logs for unusual activity.",
        date: "18 Aug 2025",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCounts: { active: 1, newTask: 1, completed: 2, failed: 1 },
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Social Media Campaign",
        description: "Launch ads for Independence Day sale.",
        date: "15 Aug 2025",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Keyword Research",
        description: "Find trending keywords for blog SEO.",
        date: "27 Aug 2025",
        category: "SEO",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Email Newsletter",
        description: "Send product update newsletter to clients.",
        date: "20 Aug 2025",
        category: "Communication",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 1 },
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Mobile App Testing",
        description: "Test app features on Android and iOS.",
        date: "24 Aug 2025",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Database Migration",
        description: "Move data from old server to cloud.",
        date: "19 Aug 2025",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Code Documentation",
        description: "Update code comments for API methods.",
        date: "17 Aug 2025",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "UI Fix",
        description: "Resolve alignment issues on mobile view.",
        date: "22 Aug 2025",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 1 },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  // console.log("employees admin", employees, admin);
  // console.log(JSON.parse(localStorage.getItem("employees")));

  // console.log("employees", employees);
  return {
    employees,
    admin,
  };

  // JSON.parse Data Array ke fom me dikhai deta he
};
