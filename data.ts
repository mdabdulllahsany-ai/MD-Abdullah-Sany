import { Project, Certification, Skill } from './types';

export const projects: Project[] = [
  // Innovation
  {
    id: '1',
    title: 'VTOL Drone Project',
    description: 'Vertical Take-Off and Landing drone designed for efficient surveillance and rapid deployment.',
    category: 'Innovation',
    techStack: ['C++', 'Arduino', 'Aerodynamics', 'IOT'],
    featured: true,
    image: 'https://picsum.photos/600/400?random=1',
    githubUrl: 'https://github.com/username/vtol-drone',
    demoUrl: '#'
  },
  {
    id: '2',
    title: 'Mini Supply Drone',
    description: 'Autonomous drone system capable of delivering small payloads to hard-to-reach areas.',
    category: 'Innovation',
    techStack: ['Python', 'OpenCV', 'Raspberry Pi'],
    featured: true,
    image: 'https://picsum.photos/600/400?random=2',
    githubUrl: 'https://github.com/username/supply-drone',
    demoUrl: '#'
  },
  // Web
  {
    id: '3',
    title: 'Blood Donation Platform',
    description: 'A dedicated platform connecting donors with patients in urgent need across Bangladesh.',
    category: 'Web',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    image: 'https://picsum.photos/600/400?random=3',
    githubUrl: 'https://github.com/username/blood-donation',
    demoUrl: '#'
  },
  {
    id: '4',
    title: 'AI Resume Builder',
    description: 'Interactive portfolio enhancer generating PDF resumes with dynamic template switching.',
    category: 'Web',
    techStack: ['TypeScript', 'PDF.js', 'OpenAI API'],
    image: 'https://picsum.photos/600/400?random=4',
    githubUrl: 'https://github.com/username/resume-builder',
    demoUrl: '#'
  },
  {
    id: '5',
    title: 'E-Commerce Mini',
    description: 'Lightweight, fast e-commerce solution with cart management and payment gateway integration.',
    category: 'Web',
    techStack: ['Vue.js', 'Firebase', 'Stripe'],
    image: 'https://picsum.photos/600/400?random=5',
    githubUrl: 'https://github.com/username/ecommerce-mini',
    demoUrl: '#'
  },
  {
    id: '6',
    title: 'Smart Converter',
    description: 'All-in-one unit converter and scientific calculator with history tracking.',
    category: 'Web',
    techStack: ['JavaScript', 'PWA'],
    image: 'https://picsum.photos/600/400?random=6',
    githubUrl: 'https://github.com/username/smart-converter',
    demoUrl: '#'
  },
  {
    id: '7',
    title: 'Task Master',
    description: 'Productivity suite combining to-do lists, kanban boards, and time tracking.',
    category: 'Web',
    techStack: ['React', 'Redux'],
    image: 'https://picsum.photos/600/400?random=7',
    githubUrl: 'https://github.com/username/task-master',
    demoUrl: '#'
  },
  {
    id: '8',
    title: 'SkyCast Weather',
    description: 'Real-time weather application with location-based forecasting and severe alerts.',
    category: 'Web',
    techStack: ['OpenWeatherMap API', 'Geolocation'],
    image: 'https://picsum.photos/600/400?random=8',
    githubUrl: 'https://github.com/username/skycast-weather',
    demoUrl: '#'
  },
  // Games
  {
    id: '9',
    title: 'Flappy Bird Clone',
    description: 'A faithful recreation of the classic game with added difficulty modes.',
    category: 'Games',
    techStack: ['Canvas API', 'JavaScript'],
    image: 'https://picsum.photos/600/400?random=9',
    githubUrl: 'https://github.com/username/flappy-bird',
    demoUrl: '#'
  },
  {
    id: '10',
    title: 'Tic Tac Toe Ultimate',
    description: 'Classic game with an unbeatable Minimax AI opponent.',
    category: 'Games',
    techStack: ['React', 'Algorithms'],
    image: 'https://picsum.photos/600/400?random=10',
    githubUrl: 'https://github.com/username/tictactoe-ai',
    demoUrl: '#'
  },
  {
    id: '11',
    title: 'Climate Survival BD',
    description: 'Strategy game focused on surviving climate change challenges in Bangladesh context.',
    category: 'Games',
    techStack: ['Unity', 'C#'],
    image: 'https://picsum.photos/600/400?random=11',
    githubUrl: 'https://github.com/username/climate-survival',
    demoUrl: '#'
  },
  {
    id: '12',
    title: 'Time Freeze Puzzle',
    description: 'Logic puzzle game where controlling time is key to solving intricate levels.',
    category: 'Games',
    techStack: ['Godot', 'GDScript'],
    image: 'https://picsum.photos/600/400?random=12',
    githubUrl: 'https://github.com/username/time-freeze',
    demoUrl: '#'
  },
  {
    id: '13',
    title: 'Campus Treasure AR',
    description: 'Augmented Reality treasure hunt game designed for university campuses.',
    category: 'Games',
    techStack: ['AR.js', 'Three.js'],
    image: 'https://picsum.photos/600/400?random=13',
    githubUrl: 'https://github.com/username/campus-treasure',
    demoUrl: '#'
  },
  {
    id: '14',
    title: 'Adaptive Enemy AI',
    description: 'Experimental game demo featuring enemies that learn from player patterns.',
    category: 'Games',
    techStack: ['Python', 'PyGame', 'Reinforcement Learning'],
    image: 'https://picsum.photos/600/400?random=14',
    githubUrl: 'https://github.com/username/adaptive-ai',
    demoUrl: '#'
  },
  {
    id: '15',
    title: 'Memory Lane',
    description: 'A narrative-driven game that "remembers" your choices across playthroughs.',
    category: 'Games',
    techStack: ['JavaScript', 'LocalStorage'],
    image: 'https://picsum.photos/600/400?random=15',
    githubUrl: 'https://github.com/username/memory-lane',
    demoUrl: '#'
  }
];

export const certifications: Certification[] = [
  { id: '1', title: 'Advanced Prompt Engineering', issuer: 'Udemy', year: '2026', category: 'AI & Programming' },
  { id: '2', title: 'ChatGPT Prompt Engineering', issuer: 'Udemy', year: '2026', category: 'AI & Programming' },
  { id: '3', title: 'AI for Coding', issuer: 'Udemy', year: '2026', category: 'AI & Programming' },
  { id: '4', title: 'Python Programming Mastery', issuer: 'Udemy', year: '2026', category: 'AI & Programming' },
  { id: '5', title: 'Python Flask', issuer: 'Udemy', year: '2026', category: 'AI & Programming' },
  { id: '6', title: 'Web Development Bootcamp', issuer: 'Udemy', year: '2026', category: 'AI & Programming' },
  { id: '7', title: 'Graphics Designing (Photoshop)', issuer: '10 Minute School', year: '2025', category: 'Design & Creative' },
  { id: '8', title: 'Graphic Design with Canva', issuer: 'Mexemy Academy', year: '2025', category: 'Design & Creative' },
  { id: '9', title: 'Adobe Illustrator', issuer: '10 Minute School', year: '2025', category: 'Design & Creative' },
  { id: '10', title: 'Motion Graphics', issuer: '10 Minute School', year: '2025', category: 'Design & Creative' },
  { id: '11', title: 'Logo Design Mastery', issuer: '10 Minute School', year: '2025', category: 'Design & Creative' },
];

export const skills: Skill[] = [
  { name: 'HTML, CSS, JS', level: 95, category: 'Tech' },
  { name: 'Python', level: 85, category: 'Tech' },
  { name: 'React & Tailwind', level: 90, category: 'Tech' },
  { name: 'Git & GitHub', level: 88, category: 'Tech' },
  { name: 'Prompt Engineering', level: 92, category: 'AI' },
  { name: 'AI for Coding', level: 90, category: 'AI' },
  { name: 'UI/UX Design', level: 85, category: 'Design' },
  { name: 'Graphic Design', level: 80, category: 'Design' },
];