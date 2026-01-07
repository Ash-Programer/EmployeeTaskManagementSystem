// localStorage.clear();
const employees = [
  {
    id: 1,
    firstname: "Rahul",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Prepare Report",
        description: "Prepare monthly sales report",
        date: "2025-01-05",
        category: "Work",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Attend weekly team sync",
        date: "2025-01-06",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review pull requests",
        date: "2025-01-07",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 2,
    firstname: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design Homepage",
        description: "Create homepage UI design",
        date: "2025-01-04",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client Call",
        description: "Discuss requirements with client",
        date: "2025-01-06",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Bugs",
        description: "Resolve reported UI bugs",
        date: "2025-01-08",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Update Documentation",
        description: "Update project docs",
        date: "2025-01-09",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 3,
    firstname: "Amit",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Database Backup",
        description: "Take weekly DB backup",
        date: "2025-01-03",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize Queries",
        description: "Improve slow SQL queries",
        date: "2025-01-07",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Server Monitoring",
        description: "Check server health",
        date: "2025-01-08",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 4,
    firstname: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Write Test Cases",
        description: "Write unit tests",
        date: "2025-01-05",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Run Automation",
        description: "Execute automation scripts",
        date: "2025-01-06",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Bug Verification",
        description: "Verify fixed bugs",
        date: "2025-01-07",
        category: "QA",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 5,
    firstname: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Content Writing",
        description: "Write blog post",
        date: "2025-01-04",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "SEO Optimization",
        description: "Optimize keywords",
        date: "2025-01-06",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Social Media Post",
        description: "Schedule social media content",
        date: "2025-01-08",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Campaign Analysis",
        description: "Analyze campaign performance",
        date: "2025-01-10",
        category: "Analytics",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];


const admin =  [
    {
    "id": 101,
    "email": "admin@example.com",
    "password": "123"
  }
]

  export const setLocalStorage = ()=>{
        localStorage.setItem('employees', JSON.stringify(employees));
        localStorage.setItem('admin', JSON.stringify(admin));
  }

  export const getLocalStorage = ()=>{
        const employees = JSON.parse(localStorage.getItem('employees'));
        const admin = JSON.parse(localStorage.getItem('admin'));

        return {employees, admin}
  }