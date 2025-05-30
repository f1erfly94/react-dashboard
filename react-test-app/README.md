Dashboard Prototype - Vite + React

A modern, responsive dashboard built with React and styled with TailwindCSS. This prototype demonstrates routing, and reusable components in a clean, professional interface.

🚀 Features

Modern Tech Stack: Built with Vite + React for fast development and optimal performance
Responsive Design: Fully responsive layout that works on desktop and mobile devices
Dark Mode: Toggle between light and dark themes with persistent state
Interactive Components: Sortable tables, metric cards, and form controls
Client-Side Routing: Smooth navigation between pages using React Router
Reusable Components: Modular, maintainable component architecture

📁 Project Structure
dashboard-prototype/

├── src/     
│   ├── components/         
│   │   ├── MetricCard.jsx  
│   │   └── Sidebar.jsx     
│   ├── pages/              
│   │   ├── Overview.jsx    
│   │   ├── Users.jsx        
│   │   └── Settings.jsx    
│   ├── data/               
│   │   └── mockData.js     
│   ├── App.jsx             
│   └── main.jsx           
├── public/                 
├── index.html             
├── package.json           
├── vite.config.js        
└── tailwind.config.js     
🛠️ Setup Instructions
Prerequisites


Installation

Clone the repository
clone https://github.com/f1erfly94/react-dashboard
cd dashboard-prototype

Install dependencies
install
# or
yarn install

Start the development server
run dev
# or
yarn dev

Open your browser
Navigate to http://localhost:5173 to view the application

Build for Production
run build
# or
yarn build
The built files will be in the dist/ directory.
🧭 Navigation & Routing
The application uses React Router for client-side navigation with the following routes:

/overview - Dashboard overview with key metrics and recent activity
/users - User management table with sorting functionality
/settings - Application settings with theme toggle and user preferences

The routing is configured in App.jsx with a default redirect from / to /overview.
🔧 State Management
Local Component State

React Hooks: Uses useState for component-level state management
Theme State: Dark mode toggle managed in Settings component with useEffect for DOM updates
Table Sorting: User table sorting state managed locally with dynamic data manipulation

State Flow Examples
javascript// Theme toggle in Settings
const [isDark, setIsDark] = useState(false);

// User table sorting
const [users, setUsers] = useState(mockUsers);
const [sortDirection, setSortDirection] = useState('asc');

// Form inputs
const [notifications, setNotifications] = useState(true);
const [username, setUsername] = useState('');
🧱 Component Architecture
Reusable Components
MetricCard
javascriptconst MetricCard = ({ title, value, change, trend }) => (
// Displays key metrics with trend indicators
);
Sidebar
javascriptconst Sidebar = () => {
// Navigation component with active state tracking
const location = useLocation();
// ...
};
Page Components

Overview: Displays metric cards and recent activity feed
Users: Interactive table with sorting, status badges, and hover effects
Settings: Form with theme switcher, checkbox, and text input

Component Communication

Props: Data flows down through props to child components
Event Handlers: User interactions bubble up through callback functions
Router State: Navigation state managed by React Router's useLocation hook

🎨 Styling & Design

TailwindCSS: Utility-first CSS framework for rapid styling
Dark Mode: Implemented using Tailwind's dark mode classes
Responsive Grid: CSS Grid and Flexbox for adaptive layouts
Interactive States: Hover effects, transitions, and focus states
Color Scheme: Professional blue/gray palette with semantic colors

Key Design Patterns
css/* Custom CSS classes for enhanced functionality */
.sidebar-link.active { /* Active navigation state */ }
.metric-card { /* Reusable card styling */ }
.table-header { /* Interactive table headers */ }
.dark { /* Dark mode overrides */ }
📊 Mock Data
The application uses realistic mock data for demonstration:

Built with ❤️ using Vite + React + TailwindCSS
