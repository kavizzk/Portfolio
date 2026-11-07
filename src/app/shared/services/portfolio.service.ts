import { Injectable } from '@angular/core';
import { Project, Experience, Education, SkillCategory, Achievement } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  readonly profile = {
    name: 'Kavitha S',
    headline: 'Aspiring Full Stack Developer',
    degree: 'B.Tech – Artificial Intelligence and Data Science',
    college: 'Nandha Engineering College, Erode',
    graduationYear: '2026',
    cgpa: '8.80 / 10',
    location: 'Tamil Nadu, India',
    email: 'kavitha.s09bvn@gmail.com',
    github: 'https://github.com/kavizzk',
    linkedin: 'https://linkedin.com/in/kavitha-s-8252b4298',
    resumeUrl: '/assets/resume/KAVITHA-RESUME.pdf',
    originalPhotoUrl: '/assets/avatar/kavitha-original.jpg',
    ghibliAvatarUrl: '/assets/avatar/ghibli-avatar.png',
    tagline: 'Curious mind. Creative thinker. Passionate developer.',
    summary: 'I am a B.Tech graduate in Artificial Intelligence and Data Science with a strong foundation in Java, Spring Boot, Angular, REST APIs and Microservices. Passionate about building practical applications, exploring new technologies and transforming ideas into meaningful digital experiences.',
    rotatingRoles: [
      'Full Stack Developer',
      'Java Developer',
      'Angular Developer',
      'Software Developer',
      'Technology Enthusiast'
    ]
  };

  readonly projects: Project[] = [
    {
      id: 'stayvista',
      number: '01',
      title: 'StayVista Hotel Management System',
      subtitle: 'Full-Stack Enterprise Microservices Platform',
      featured: true,
      tag: 'Microservices Architecture',
      description: 'Developed a full-stack Hotel Management System using Java 21, Spring Boot, Microservices, Angular and MySQL to manage guests, rooms, reservations, billing and hotel operations.',
      technologies: ['Java 21', 'Spring Boot', 'Microservices', 'Angular', 'MySQL', 'Docker', 'Spring Cloud Gateway', 'Eureka'],
      keyFeatures: [
        'JWT-based secure authentication & role-based access control (RBAC)',
        'Full Microservices architecture with Eureka service discovery & centralized configuration',
        'Spring Cloud Gateway for API routing, load balancing and security',
        'Inter-service REST API communication with Feign clients',
        'Automated guest reservations, billing invoices, and room occupancy management',
        'Docker containerized deployment ready for cloud scalability'
      ],
      githubUrl: 'https://github.com/kavizzk/Hotel-Management-System-StayVista',
      image: '/assets/projects/stayvista_hotel.jpg'
    },
    {
      id: 'threshold-crypto',
      number: '02',
      title: 'Secure Distributed Key Management',
      subtitle: 'Threshold Cryptography & AI-Based Trust Evaluation',
      featured: false,
      tag: 'Cybersecurity & AI',
      description: 'Designed a distributed key management system to reduce single points of failure in centralized key storage using Shamir threshold cryptography and neural trust evaluation.',
      technologies: ['Python', 'Streamlit', 'AES Cryptography', 'Threshold Secret Sharing', 'NumPy'],
      keyFeatures: [
        'Elimination of single points of failure using (k, n) threshold secret sharing',
        'Distribution of encryption-key shares across decentralized independent nodes',
        'AI-based behavioral trust evaluation algorithm to identify and isolate faulty nodes',
        'Interactive Streamlit visual dashboard displaying live node statuses, share recovery and encryption operations'
      ],
      githubUrl: 'https://github.com/kavizzk/Threshold-Key-Management-System',
      image: '/assets/projects/cryptography_key.jpg'
    },
    {
      id: 'bookmysnap',
      number: '03',
      title: 'Photographer Booking System (BookMySnap)',
      subtitle: 'On-Demand Creative Services Marketplace',
      featured: false,
      tag: 'Full Stack Web App',
      description: 'Developed a comprehensive web-based platform connecting clients with professional event photographers with real-time slot scheduling and admin analytics.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
      keyFeatures: [
        'Role-based authentication for clients, photographers, and platform administrators',
        'Rich photographer profiles featuring portfolios, pricing tiers, and equipment gear',
        'Real-time date and time slot availability management with instant booking',
        'Transparent client review and star-rating mechanism',
        'Comprehensive administrator dashboard for booking and user moderation'
      ],
      githubUrl: 'https://github.com/kavizzk/Photographer-Booking-System-BookMySnap',
      image: '/assets/projects/bookmysnap_app.jpg'
    },
    {
      id: 'voice-assistant',
      number: '04',
      title: 'Voice Assistant Using AI',
      subtitle: 'Interactive Speech-Driven Desktop Assistant',
      featured: false,
      tag: 'AI & Speech Processing',
      description: 'Developed an AI-powered voice assistant that accepts continuous speech commands, converts audio to text, interprets user intent and responds with synthesized voice.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web Speech API', 'Speech-to-Text', 'Text-to-Speech'],
      keyFeatures: [
        'Accurate voice command recognition and real-time speech-to-text conversion',
        'Intent parsing for web queries, application shortcuts, weather, and time calculations',
        'Interactive audio visualizer rendering dynamic waveforms during listening and speaking states',
        'Natural speech synthesis audio playback response engine'
      ],
      githubUrl: 'https://github.com/kavizzk/Voice-Assistant-Using-AI',
      image: '/assets/projects/voice_assistant.jpg'
    },
    {
      id: 'foot-ulcer-iot',
      number: '05',
      title: 'Diabetic Foot Ulcer Detection Using IoT',
      subtitle: 'Smart Wearable Health Telemetry System',
      featured: false,
      tag: 'IoT & Telemedicine',
      description: 'Developed an IoT-based preventive health monitoring system to detect early signs of diabetic foot ulcer risks by measuring plantar temperature and pressure variations.',
      technologies: ['IoT', 'Temperature Sensor', 'Pressure Sensor', 'Blynk IoT', 'Microcontroller', 'Embedded C'],
      keyFeatures: [
        'Continuous sensor telemetry capturing dual-foot thermal map and plantar pressure points',
        'Blynk IoT cloud integration for real-time mobile dashboard visualization',
        'Threshold-based alerting mechanism triggering urgent push notifications upon abnormal heat spikes',
        'Non-invasive wearable prototype designed for daily diabetic patient care'
      ],
      githubUrl: 'https://github.com/kavizzk/Foot-ulcer-detection-using-Iot',
      image: '/assets/projects/foot_ulcer_iot.jpg'
    }
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      id: 'languages',
      name: 'Programming Languages',
      icon: 'code-2',
      skills: [
        { name: 'Java (Java 8, 17, 21)', level: 'Advanced', isPrimary: true },
        { name: 'Python (Basics)', level: 'Intermediate' },
        { name: 'TypeScript', level: 'Advanced', isPrimary: true },
        { name: 'JavaScript (ES6+)', level: 'Advanced' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development',
      icon: 'server',
      skills: [
        { name: 'Spring Boot', level: 'Advanced', isPrimary: true },
        { name: 'Spring MVC', level: 'Proficient' },
        { name: 'Spring Data JPA', level: 'Advanced', isPrimary: true },
        { name: 'Hibernate ORM', level: 'Advanced' },
        { name: 'REST APIs', level: 'Advanced', isPrimary: true },
        { name: 'Microservices Architecture', level: 'Advanced', isPrimary: true },
        { name: 'Spring Security & JWT', level: 'Proficient' }
      ]
    },
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: 'layout',
      skills: [
        { name: 'Angular (17 / 18)', level: 'Advanced', isPrimary: true },
        { name: 'Standalone Components', level: 'Advanced' },
        { name: 'HTML5 & Semantic Web', level: 'Expert' },
        { name: 'SCSS & Modern CSS3', level: 'Advanced' },
        { name: 'Responsive Web Design', level: 'Advanced' }
      ]
    },
    {
      id: 'database',
      name: 'Database Management',
      icon: 'database',
      skills: [
        { name: 'MySQL', level: 'Advanced', isPrimary: true },
        { name: 'MongoDB', level: 'Proficient' },
        { name: 'Relational Schema Design', level: 'Advanced' },
        { name: 'SQL Query Optimization', level: 'Advanced' }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & DevOps',
      icon: 'terminal',
      skills: [
        { name: 'Git & GitHub', level: 'Advanced', isPrimary: true },
        { name: 'Apache Maven', level: 'Proficient' },
        { name: 'Docker', level: 'Proficient' },
        { name: 'Postman', level: 'Advanced' },
        { name: 'RabbitMQ', level: 'Proficient' }
      ]
    },
    {
      id: 'core',
      name: 'Core Computer Science',
      icon: 'cpu',
      skills: [
        { name: 'Object-Oriented Programming (OOP)', level: 'Expert', isPrimary: true },
        { name: 'Java Collections Framework', level: 'Advanced' },
        { name: 'Exception Handling & Robustness', level: 'Advanced' },
        { name: 'Generics & Lambda Streams', level: 'Advanced' },
        { name: 'DBMS Principles & ACID', level: 'Advanced' }
      ]
    }
  ];

  readonly experiences: Experience[] = [
    {
      id: 'capgemini',
      company: 'Capgemini',
      role: 'Analyst Training Program',
      duration: '4 Months',
      mode: 'Full-Time Training',
      period: 'Recent Training Experience',
      description: 'Underwent an intensive enterprise training track focused on enterprise full-stack software development with Java, Spring Boot, Microservices, and Angular.',
      highlights: [
        'Gained in-depth practical mastery of Core Java, OOP design, Collections, Exception Handling, and Java 8 functional streams.',
        'Engineered enterprise backend microservices with Spring Boot, Spring Data JPA, Hibernate, and secured endpoints using JWT authentication.',
        'Integrated microservices with Spring Cloud Gateway, Eureka Discovery, and RabbitMQ message brokering.',
        'Constructed responsive frontend SPAs with Angular, TypeScript, and Docker containerization.',
        'Strengthened data structures, algorithmic problem-solving, and clean-code development practices.'
      ],
      technologies: ['Java', 'Spring Boot', 'Microservices', 'Spring Security', 'JWT', 'Hibernate', 'Angular', 'Docker', 'RabbitMQ', 'MySQL', 'Git']
    },
    {
      id: 'cubeai',
      company: 'CubeAI Solutions Tech Private Limited, Tiruchengode',
      role: 'Web Development Intern',
      duration: '14 Days',
      mode: 'Offline',
      period: 'Internship Experience',
      description: 'Worked hands-on on real-world web interfaces, building responsive frontend modules and implementing modern UI/UX design patterns.',
      highlights: [
        'Learned and implemented HTML5, CSS3, and modern JavaScript for interactive client applications.',
        'Gained hands-on experience building clean, responsive web pages adaptable to all device viewports.',
        'Engineered interactive UI components, form validation handlers, and dynamic DOM manipulation routines.',
        'Collaborated on-site with senior engineering leads to refine frontend aesthetics and performance.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'DOM Manipulation']
    }
  ];

  readonly education: Education[] = [
    {
      id: 'btech',
      degree: 'B.Tech – Artificial Intelligence and Data Science',
      institution: 'Nandha Engineering College, Erode',
      period: '2022 – 2026',
      score: '8.80 / 10',
      scoreType: 'CGPA',
      details: 'Focused on algorithms, machine learning, deep learning, distributed computing, database management, and full-stack software engineering.'
    },
    {
      id: 'hsc',
      degree: 'Higher Secondary Certificate (HSC - 12th)',
      institution: 'Adharsh Vidhyalaya Matric Higher Secondary School',
      period: '2021 – 2022',
      score: '90.66%',
      scoreType: 'Percentage',
      details: 'Specialized in Computer Science, Mathematics, Physics, and Chemistry with high academic distinction.'
    },
    {
      id: 'sslc',
      degree: 'Secondary School Leaving Certificate (SSLC - 10th)',
      institution: 'Sri Vidya Mandhir Matriculation School',
      period: '2019 – 2020',
      score: '99.20%',
      scoreType: 'Percentage',
      details: 'Exceptional academic performance with near-perfect marks across Mathematics, Science, and Social Studies.'
    }
  ];

  readonly achievements: Achievement[] = [
    {
      id: 'nptel',
      title: 'Cloud Computing – NPTEL Elite Certification',
      organization: 'IIT Kharagpur / NPTEL',
      category: 'Certification',
      score: '71% (Elite)',
      description: 'Earned Elite certification in Cloud Computing architectures, virtualization, distributed storage, and cloud service models.',
      icon: 'cloud'
    },
    {
      id: 'code-feast',
      title: 'Secured 2nd Place in Code Feast',
      organization: 'Nandha Engineering College',
      category: 'Competition',
      description: 'Won 2nd prize in the collegiate competitive coding marathon solving complex algorithmic and data structure problems under tight timed constraints.',
      icon: 'trophy'
    },
    {
      id: 'paper-robotics',
      title: 'Presented Paper on "AI in Robotics"',
      organization: 'Hindusthan Institute of Technology',
      category: 'Paper Presentation',
      description: 'Presented an original research paper evaluating autonomous robotic decision-making utilizing reinforcement learning and sensor fusion algorithms.',
      icon: 'file-text'
    },
    {
      id: 'paper-bluebrain',
      title: 'Presented Paper on "Blue Brain Technology"',
      organization: 'Vellalar Institute of Engineering and Technology',
      category: 'Paper Presentation',
      description: 'Presented a technical study investigating brain simulation models, computational neuroscience, and synthetic neural networks.',
      icon: 'cpu'
    },
    {
      id: 'genai-workshop',
      title: 'Workshop on "GenAI in Action"',
      organization: 'Kongu Engineering College',
      category: 'Workshop',
      description: 'Participated in advanced hands-on sessions building applications with Generative AI models, prompt engineering, and LLM orchestration.',
      icon: 'sparkles'
    },
    {
      id: 'innovation-days',
      title: 'Presented Projects at Innovation Day (2023 & 2024)',
      organization: 'Annual Tech Innovation Symposium',
      category: 'Innovation',
      year: '2023 & 2024',
      description: 'Demonstrated working functional prototypes of IoT healthcare sensors and AI web utilities to academic peers and industry evaluators.',
      icon: 'lightbulb'
    },
    {
      id: 'digilabs-python',
      title: 'Python Basics Certification',
      organization: 'Digilabs',
      category: 'Certification',
      description: 'Certified foundational competency in Python programming, data structures, scripting, and modular architecture.',
      icon: 'award'
    },
    {
      id: 'simplilearn-powerbi',
      title: 'Power BI for Beginners Certification',
      organization: 'Simplilearn',
      category: 'Certification',
      description: 'Certified in business intelligence dashboards, DAX expressions, data transformations, and visual analytics.',
      icon: 'bar-chart'
    },
    {
      id: 'simplilearn-excel',
      title: 'Introduction to MS Excel Certification',
      organization: 'Simplilearn',
      category: 'Certification',
      description: 'Certified in advanced spreadsheet data modeling, pivot tables, lookup formulas, and automated reporting.',
      icon: 'table'
    }
  ];
}
