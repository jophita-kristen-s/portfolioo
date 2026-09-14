import {
  UniverseNode,
  Project,
  EducationItem,
  AchievementItem,
  LeadershipItem,
  CertificationItem,
  InterestScrapbook
} from '../types';

export const HERO_IMAGE_URL = `${import.meta.env.BASE_URL}images/jk_cosmic_one.png`;

export const PERSONAL_INFO = {
  name: 'Jophita Kristen S.',
  degree: 'B.Tech Information Science & Engineering',
  institution: "Women's Engineering College, Lawspet, Puducherry",
  overallCgpa: '8.99',
  location: 'Puducherry, India',
  email: 'jophitakristens@gmail.com',
  linkedInUrl: 'https://www.linkedin.com/in/jophita-kristen-s-9801b8408',
  linkedInHandle: 'linkedin.com/in/jophita-kristen-s-9801b8408',
  bioHeadline: 'Information Science & Engineering undergraduate focusing on Explainable AI, Machine Learning, Computer Vision, and Full-Stack Engineering.',
  bioSummary: "B.Tech Information Science & Engineering student at Women's Engineering College, Lawspet, Puducherry. An analytical problem-solver passionate about explainable AI for healthcare, geospatial mapping, data analytics, and real-time systems."
};

export const PROGRAMMING_LANGUAGES = [
  'Python',
  'SQL',
  'MATLAB',
  'HTML/CSS',
  'C',
  'JavaScript'
];

export const TOOLS_SOFTWARE = [
  'CoppeliaSim',
  'MATLAB Online',
  'Simulink',
  'VS Code',
  'Google Colab',
  'Git',
  'GitHub',
  'Postman',
  'PostgreSQL / pgAdmin',
  'PowerShell',
  'Ollama',
  'Figma'
];

export const FRAMEWORKS_LIBRARIES = [
  'NumPy',
  'Pandas',
  'TensorFlow / Keras',
  'PyTorch',
  'Flask',
  'Scikit-learn',
  'pytesseract',
  'pdfplumber',
  'OpenCV',
  'Node.js',
  'Express.js',
  'Socket.IO',
  'React.js',
  'React Native',
  'Vite'
];

export const DATABASES = [
  'MySQL',
  'MongoDB',
  'PostgreSQL'
];

export const TECHNICAL_AREAS = [
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'Explainable AI',
  'REST APIs',
  'Real-time Applications',
  'Robotics Simulation',
  'Backend Development',
  'Database Design',
  'SQL',
  'React / React Native',
  'Data Preprocessing',
  'Data Analysis & Visualization',
  'Generative AI / LLM Integration',
  'Basic Cybersecurity'
];

export const INTERESTS_LIST = [
  'AI / ML',
  'Software Development',
  'Computer Vision',
  'Data Analysis',
  'Web Development',
  'Backend Systems',
  'OCR',
  'Healthcare Technology',
  'GIS',
  'Robotics Simulation',
  'Creative Design',
  'Formula 1',
  'Space / Astronomy',
  'Journaling',
  'Fashion',
  'Creative visual storytelling'
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Women's Engineering College, Lawspet, Puducherry",
    degree: 'B.Tech in Information Science & Engineering',
    period: '2022 — 2026',
    location: 'Lawspet, Puducherry',
    grade: '8.99',
    gradeLabel: 'Overall CGPA',
    summary: 'Pursuing undergraduate degree in Information Science & Engineering with sustained academic excellence, focusing on core computing systems, algorithmic problem solving, and applied artificial intelligence.',
    highlights: [
      'Cumulative Grade Point Average: 8.99',
      'Specializing in Machine Learning, Computer Vision, and Backend Architectures',
      'Active student organizer across institutional technical clubs and placement programs'
    ],
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Machine Learning',
      'Computer Graphics',
      'Software Engineering'
    ]
  },
  {
    institution: 'Kendriya Vidyalaya No.1, JIPMER Campus, Puducherry',
    degree: 'Higher Secondary Certificate (Class XII)',
    period: 'Completed',
    location: 'JIPMER Campus, Puducherry',
    grade: '74.4%',
    gradeLabel: 'Final Board Percentage',
    summary: 'Completed senior secondary education under Central Board of Secondary Education (CBSE) with comprehensive foundation in mathematical analysis and sciences.',
    highlights: [
      'Rigorous foundation in Mathematics, Physics, and Chemistry',
      'Formative analytical problem-solving and mathematical competition participation'
    ]
  },
  {
    institution: 'Kendriya Vidyalaya No.1, JIPMER Campus, Puducherry',
    degree: 'Secondary School Certificate (Class X)',
    period: 'Completed',
    location: 'JIPMER Campus, Puducherry',
    grade: '90%',
    gradeLabel: 'Final Board Percentage',
    summary: 'Distinguished academic performance across secondary sciences, mathematics, and humanities under CBSE curriculum.',
    highlights: [
      'Scored 90% overall distinction in Class X board examinations',
      'Active participation in regional and school mathematics competitions'
    ]
  }
];

export const ALL_PROJECTS: Project[] = [
  {
    id: 'dr-screening',
    number: '01',
    title: 'Explainable AI for Diabetic Retinopathy Screening',
    subtitle: 'SIH 2026 — Project in Development | Rural Healthcare Triage with MATLAB & Simulink',
    description: 'An explainable screening pipeline for diabetic retinopathy in rural healthcare triage, incorporating lesion detection and Level 0–4 severity grading. Currently developing and refining this solution for SIH 2026.',
    category: 'ai-ml',
    badgeCategory: 'SIH 2026',
    bannerTitle: 'DIABETIC RETINOPATHY',
    bannerDetail: 'Level 0–4 Severity Grading',
    bannerSubtext: 'MATLAB • Simulink • Grad-CAM',
    iconName: 'visibility',
    tags: ['MATLAB', 'Simulink', 'Explainable AI', 'Grad-CAM', 'Computer Vision'],
    statusLabel: 'SIH 2026 • IN DEVELOPMENT',
    eventOrContext: 'Smart India Hackathon 2026 — Participating Project',
    teamSize: '6-member team',
    problem: 'Rural primary health centers lack on-site ophthalmologists for early diabetic retinopathy screening, leading to preventable vision loss and non-explainable black-box triage.',
    solution: 'Engineered an explainable screening workflow in MATLAB and Simulink that assesses fundus image quality, localizes microaneurysms and exudates, assigns clinical severity stages (Level 0–4), and renders Grad-CAM feature heatmaps.',
    contribution: {
      role: 'ML & Signal Processing Engineer',
      team: '6-member team (Smart India Hackathon 2026 — Participating Project)',
      summaryLine: 'Image preprocessing • Lesion localization • Simulink severity staging • Grad-CAM heatmaps',
      contributions: [
        'Image quality assessment & illumination enhancement preprocessing in MATLAB',
        'Lesion feature extraction for microaneurysm and exudate localization',
        'Simulink workflow design for Level 0–4 clinical severity staging',
        'Grad-CAM heatmap feature attribution visualization for clinical interpretability',
        'Automated diagnostic summary generation for health workers'
      ],
      teamContext: 'Dataset curation, clinical protocol research, and validation review were conducted collaboratively with team members.'
    },
    features: [
      'Dual-phase preprocessing (contrast equalization & illumination filtering)',
      'Granular lesion detection (microaneurysms, exudates, hemorrhages)',
      'Grad-CAM visual interpretability heatmaps',
      'Level 0–4 clinical NPDR severity staging',
      'Automated diagnostic screening report generation'
    ],
    longOverview: 'Developing this project as part of a 6-member team in participation for Smart India Hackathon 2026, this system provides an explainable AI workflow for diabetic retinopathy screening tailored for rural healthcare settings. Built using MATLAB and Simulink, it takes retinal fundus imagery through rigorous preprocessing, detects microaneurysms, exudates, and hemorrhages, assigns clinical severity from Level 0 to Level 4, visualizes localized decision regions via Grad-CAM, and generates automated diagnostic reports. Note: System designed as an engineering prototype in active development; not clinically deployed or medically validated.',
    technicalHighlights: [
      'Built with MATLAB and Simulink for signal and image processing routines',
      'Dual-phase preprocessing pipeline for retinal illumination and vessel contrast enhancement',
      'Granular lesion localization targeting microaneurysms, hard/soft exudates, and retinal hemorrhages',
      'Level 0–4 severity staging coupled with Grad-CAM feature attribution maps',
      'Automated report generation streamlining screening reviews for medical assistants'
    ],
    githubUrl: 'https://github.com/jophita-kristen-s/Explainable-AI-for-Diabetic-Retinopathy-Screening.git',
    githubRepoType: 'public',
    evidence: {
      githubUrl: 'https://github.com/jophita-kristen-s/Explainable-AI-for-Diabetic-Retinopathy-Screening.git',
      readmeUrl: 'https://github.com/jophita-kristen-s/Explainable-AI-for-Diabetic-Retinopathy-Screening#readme',
      repoStatus: 'available',
      demoStatus: 'unavailable'
    }
  },
  {
    id: 'smart-hospital-ai',
    number: '02',
    title: 'Smart Hospital AI — CareFlow + MediCareConnect',
    subtitle: 'Integrated Patient Portal & Hospital Management Ecosystem',
    description: 'Integrated healthcare management ecosystem combining a patient portal (CareFlow) and central hospital administration dashboard (MediCareConnect).',
    category: 'web-app',
    badgeCategory: 'Full-Stack Ecosystem',
    bannerTitle: 'SMART HOSPITAL AI',
    bannerDetail: 'CareFlow + MediCareConnect',
    bannerSubtext: 'Node.js • Express • MongoDB • REST APIs',
    iconName: 'local_hospital',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT'],
    statusLabel: 'Team of 5',
    eventOrContext: 'Engineering Project',
    teamSize: '5-member team',
    problem: 'Fragmented hospital intake records, uncoordinated patient scheduling, and siloed administrative records create operational bottlenecks across facilities.',
    solution: 'Unified healthcare ecosystem providing modular RESTful APIs for patient record intake, appointment scheduling, and structured bed occupancy tracking.',
    contribution: {
      role: 'Backend Developer & API Testing',
      team: '5-member team',
      summaryLine: 'Backend REST APIs • MongoDB schema design • Authentication & routing • End-to-end API testing',
      contributions: [
        'Backend REST API architecture and endpoints using Node.js and Express',
        'Database schema design and document modeling in MongoDB for patient records',
        'User authentication handling and protected route middleware',
        'Comprehensive API validation and request-response integration testing'
      ],
      teamContext: 'Frontend patient portal, admin UI design, and client-side layouts were designed and built by fellow team members.'
    },
    features: [
      'Modular REST API endpoints for patient records and appointments',
      'Document-oriented database persistence in MongoDB',
      'Role-based administrative and staff access control',
      'Structured intake and admission status tracking'
    ],
    longOverview: 'A full-scale hospital management ecosystem built with a 5-member team. The platform combines CareFlow (the patient portal) and MediCareConnect (the administrative hospital dashboard) to organize intake, appointments, and facility records. My core contribution centered on backend architecture with Node.js and Express, database schema design in MongoDB, authentication handling, and end-to-end REST API testing.',
    technicalHighlights: [
      'Engineered backend endpoints using Node.js and Express services',
      'Structured MongoDB document schemas for flexible record storage',
      'Implemented secure JWT authentication and route protection middleware',
      'Validated API contracts with systematic integration testing'
    ],
    githubUrl: 'https://github.com/jophita-kristen-s/SmartHospitalAI_CareFlow-MediCareConnect.git',
    githubRepoType: 'public',
    evidence: {
      githubUrl: 'https://github.com/jophita-kristen-s/SmartHospitalAI_CareFlow-MediCareConnect.git',
      readmeUrl: 'https://github.com/jophita-kristen-s/SmartHospitalAI_CareFlow-MediCareConnect#readme',
      repoStatus: 'available',
      demoStatus: 'unavailable'
    }
  },
  {
    id: 'resumatch-ultra',
    number: '03',
    title: 'ResuMatch Ultra',
    subtitle: 'Resume Parsing & Skill-Matching Analytics Engine',
    description: 'An automated resume analysis pipeline that parses resume text, computes TF-IDF vector representations, and calculates cosine similarity match scores against job requirements to identify skill proficiencies and gaps.',
    category: 'ai-ml',
    badgeCategory: 'AI Job Intelligence',
    bannerTitle: 'RESUMATCH ULTRA',
    bannerDetail: 'Skill Gap & Semantic Match',
    bannerSubtext: 'Python • Scikit-learn • TF-IDF',
    iconName: 'badge',
    tags: ['Python', 'Scikit-learn', 'TF-IDF', 'Cosine Similarity', 'NLP'],
    statusLabel: 'Engineered System',
    teamSize: 'Solo Project',
    problem: 'Job candidates struggle to identify missing competencies for target roles, while hiring teams face manual, inconsistent resume screening.',
    solution: 'Implemented text extraction and TF-IDF vectorization with cosine similarity in Python and Scikit-learn to benchmark resumes against role requirements and deliver structured skill gap breakdowns.',
    contribution: {
      role: 'Lead Developer (Solo Project)',
      team: 'Solo Project',
      summaryLine: 'Document text extraction • TF-IDF vectorization • Cosine similarity scoring • Skill gap breakdown',
      contributions: [
        'Document text extraction and token normalization routines in Python',
        'TF-IDF vectorization pipeline transforming unstructured resume and job description text',
        'Cosine similarity calculation measuring candidate-to-role semantic alignment',
        'Structured skill gap output reporting categorized proficiencies'
      ]
    },
    features: [
      'Automated resume text parsing and token normalization',
      'TF-IDF vector representation of resumes and job descriptions',
      'Cosine similarity scoring to quantify candidate-role alignment',
      'Structured skill gap breakdown highlighting matching and missing skills'
    ],
    longOverview: 'ResuMatch Ultra evaluates career resumes against target job specifications using TF-IDF vectorization and cosine similarity in Python with Scikit-learn. The system parses unstructured resume documents, normalizes technical terminology, evaluates semantic alignment against job description requirements, and generates a structured analysis of matching skills and competency gaps.',
    technicalHighlights: [
      'Text extraction and token normalization routines for unstructured resume files',
      'TF-IDF matrix generation and cosine similarity calculation via Scikit-learn',
      'Competency comparison algorithm isolating matching proficiencies and missing requirements'
    ],
    githubUrl: 'https://github.com/jophita-kristen-s/RESUMATCH-ULTRA.git',
    githubRepoType: 'public',
    evidence: {
      githubUrl: 'https://github.com/jophita-kristen-s/RESUMATCH-ULTRA.git',
      readmeUrl: 'https://github.com/jophita-kristen-s/RESUMATCH-ULTRA#readme',
      repoStatus: 'available',
      demoStatus: 'unavailable'
    }
  },
  {
    id: 'scanline',
    number: '04',
    title: 'Scanline',
    subtitle: 'Document Edge Detection & OCR Pipeline',
    description: 'A document image processing and optical character recognition pipeline developed with Python, OpenCV, and Tesseract OCR. Implements document contour detection, perspective correction, and text extraction from document scans.',
    category: 'ai-ml',
    badgeCategory: 'Computer Vision & OCR',
    bannerTitle: 'SCANLINE',
    bannerDetail: 'Document Preprocessing & OCR',
    bannerSubtext: 'Python • OpenCV • Tesseract OCR',
    iconName: 'document_scanner',
    tags: ['Python', 'OpenCV', 'Tesseract OCR', 'Image Processing'],
    statusLabel: 'Engineered Pipeline',
    teamSize: 'Solo Project',
    problem: 'Scanned and photographed documents often suffer from skewed angles, irregular borders, and variable lighting that degrade text extraction accuracy.',
    solution: 'Engineered an image preprocessing pipeline using OpenCV for edge detection and perspective transformation, followed by Tesseract OCR for text extraction.',
    contribution: {
      role: 'Developer (Solo Project)',
      team: 'Solo Project',
      summaryLine: 'OpenCV image preprocessing • Perspective correction • Tesseract OCR text extraction',
      contributions: [
        'Implemented image preprocessing routines including grayscale conversion, Gaussian blur, and Canny edge detection',
        'Applied contour detection and perspective transformation to obtain rectified document scans',
        'Integrated Tesseract OCR engine for text extraction from processed document images'
      ]
    },
    features: [
      'Document edge detection and contour isolation using OpenCV',
      'Four-point perspective transformation for rectified document orientation',
      'Adaptive thresholding for stroke clarity and noise reduction',
      'Optical character recognition via Tesseract'
    ],
    longOverview: 'Scanline is a document scanning and text extraction utility developed in Python using OpenCV and Tesseract OCR. The pipeline detects document contours from raw input images, applies a four-point perspective transform to rectify skewed angles, enhances image contrast, and extracts text using Tesseract.',
    technicalHighlights: [
      'Canny edge detection and contour analysis to locate document perimeters',
      'Perspective warping to produce flattened top-down document scans',
      'Tesseract OCR integration for downstream text recognition'
    ],
    githubRepoType: 'private',
    evidence: {
      repoStatus: 'coming-soon',
      demoStatus: 'unavailable'
    }
  },
  {
    id: 'encrowatch',
    number: '05',
    title: 'EncroWatch',
    subtitle: 'Geospatial Encroachment Monitoring for Puducherry',
    description: 'A geospatial encroachment monitoring application for the Puducherry region built with Python, Flask, and Google Earth Engine. Analyzes multi-temporal satellite imagery to detect land cover changes, monitor municipal boundaries, and support civic incident reporting.',
    category: 'web-app',
    badgeCategory: 'GovTech GIS',
    bannerTitle: 'ENCROWATCH',
    bannerDetail: 'Puducherry Geospatial Audit',
    bannerSubtext: 'Python • Flask • Google Earth Engine',
    iconName: 'map',
    tags: ['Python', 'Flask', 'Google Earth Engine', 'GIS', 'Satellite Imagery'],
    statusLabel: 'Team of 5',
    teamSize: '5-member team',
    problem: 'Civic authorities lack an automated remote-sensing workflow to detect, catalog, and respond to unauthorized municipal and coastal land encroachments across Puducherry.',
    solution: 'Engineered a Python and Flask backend integrated with Google Earth Engine to access and process satellite imagery, evaluate land cover changes over time, and log civic encroachment reports.',
    contribution: {
      role: 'Backend & Geospatial Analysis Developer',
      team: '5-member team',
      summaryLine: 'Flask backend services • Google Earth Engine API integration • Satellite imagery processing • Incident reporting',
      contributions: [
        'Developed Flask backend services and endpoints for geospatial queries',
        'Integrated Google Earth Engine API to ingest and process multi-temporal satellite data for Puducherry',
        'Implemented spatial comparison logic to identify land cover shifts across monitored zones',
        'Built structured incident reporting and logging workflows for municipal audits'
      ],
      teamContext: 'Frontend interface, GIS boundary datasets, and municipal field validation were developed collaboratively with fellow team members.'
    },
    features: [
      'Google Earth Engine integration for multi-temporal satellite imagery analysis',
      'Flask web service handling spatial data queries and incident records',
      'Land cover change detection across municipal and coastal zones',
      'Structured encroachment audit logging and incident documentation'
    ],
    longOverview: 'EncroWatch was engineered with a 5-member team to assist civic administration in monitoring and cataloging land boundary encroachments across the Union Territory of Puducherry. Built using Python, Flask, and Google Earth Engine, the system processes satellite imagery and geospatial data to identify unauthorized developments, evaluate temporal vegetative and land cover shifts, and support structured civic audit reporting.',
    technicalHighlights: [
      'Google Earth Engine API integration for processing remote sensing and satellite data collections',
      'Flask application architecture managing spatial queries and incident record persistence',
      'Temporal imagery comparison workflows isolating changes against baseline municipal zone boundaries'
    ],
    githubUrl: 'https://github.com/jophita-kristen-s/EncroWatch.git',
    githubRepoType: 'public',
    evidence: {
      githubUrl: 'https://github.com/jophita-kristen-s/EncroWatch.git',
      readmeUrl: 'https://github.com/jophita-kristen-s/EncroWatch#readme',
      repoStatus: 'available',
      demoStatus: 'unavailable'
    }
  },
  {
    id: 'voter-epic',
    number: '06',
    title: 'Voter EPIC Extraction Pipeline',
    subtitle: 'Multi-Pass OCR & Watermark Handling for Electoral Cards',
    description: 'An automated document processing pipeline designed to parse voter identity cards (EPIC) across degraded scans. Features multi-pass OCR, watermark detection and filtering, degraded-scan contrast normalization, and systematic OCR error debugging.',
    category: 'ai-ml',
    badgeCategory: 'Computer Vision & OCR',
    bannerTitle: 'VOTER EPIC PIPELINE',
    bannerDetail: 'Degraded Scan & Watermark OCR',
    bannerSubtext: 'Python • PyMuPDF • OpenCV • Tesseract',
    iconName: 'fingerprint',
    tags: ['Python', 'PyMuPDF', 'OpenCV', 'Tesseract', 'Computer Vision'],
    statusLabel: 'Engineered Pipeline',
    features: [
      'Multi-pass adaptive thresholding OCR',
      'Watermark suppression & noise filtering',
      'Degraded-scan contrast restoration',
      'Systematic OCR error handling & verification'
    ],
    longOverview: 'Government voter identity cards often present complex background watermarks, skewed scans, and variable font degradation. This automated pipeline uses OpenCV and PyMuPDF to isolate key identity fields, strip security watermarks without destroying text strokes, and achieve accurate field parsing through multi-pass Tesseract recognition.',
    technicalHighlights: [
      'Morphological operations and bilateral filtering to neutralize background security grids',
      'Coordinate-based bounding box extraction for EPIC number, holder name, and relation fields',
      'Custom regex post-processor and error debugging rules to rectify character confusion (0 vs O, 1 vs I)'
    ],
    githubUrl: 'https://github.com/jophita-kristen-s/Voter-EPIC-Extraction-Pipeline.git',
    githubRepoType: 'public'
  },
  {
    id: 'aurelia-gems',
    number: '07',
    title: 'Aurelia Gems',
    subtitle: '15-Screen Jewellery E-Commerce Mobile UI Design',
    description: 'Comprehensive mobile user interface design for a luxury jewellery e-commerce platform created in Figma. Encompasses 15 custom screens, complete design system, bespoke colour palette, refined typography hierarchy, and a library of modular reusable components.',
    category: 'design-tools',
    badgeCategory: 'UI/UX Design',
    bannerTitle: 'AURELIA GEMS',
    bannerDetail: '15-Screen Mobile Architecture',
    bannerSubtext: 'Figma • Design System • Component Library',
    iconName: 'diamond',
    tags: ['Figma', 'UI/UX Design', 'Design Systems', 'Typography', 'Mobile Design'],
    statusLabel: '15 Screens',
    features: [
      'Complete 15-screen mobile application flow',
      'Atomic design system with reusable Figma components',
      'Bespoke luxury colour and contrast system',
      'Carefully paired editorial & display typography',
      'Interactive cart, discovery, and checkout workflows'
    ],
    longOverview: 'Designed entirely within Figma, Aurelia Gems is an end-to-end mobile shopping experience for fine jewellery. Created an atomic design token architecture featuring 15 comprehensive screens covering onboarding, curated collections, product macro-views, interactive ring sizing guides, cart management, and checkout flows.',
    technicalHighlights: [
      'Built a scalable component system with comprehensive auto-layout variants in Figma',
      'Engineered an accessible high-contrast palette suited for luxury lifestyle branding',
      'Standardized 8pt spacing grid and typographic scaling'
    ],
    figmaUrl: 'https://www.figma.com/design/KnF1N8tKX4m7ibGckToqEi/Aurelia-Gems-%E2%80%93-Jewellery-E-Commerce-App?node-id=23-308&t=owbKW9ZWxBvQGNl7-0'
  },
  {
    id: 'atm-simulation',
    number: '08',
    title: 'ATM Simulation',
    subtitle: 'Object-Oriented Banking Machine Simulation in Python',
    description: 'A modular object-oriented simulation of an Automated Teller Machine implemented in Python. Features secure PIN verification, account balance inquiry, deposit and withdrawal constraints, and persistent transaction ledger logging using JSON.',
    category: 'web-app',
    badgeCategory: 'Core Software',
    bannerTitle: 'ATM SIMULATION',
    bannerDetail: 'OOP & JSON Persistence',
    bannerSubtext: 'Python • OOP • JSON',
    iconName: 'account_balance',
    tags: ['Python', 'JSON', 'Object-Oriented Programming', 'Data Structures'],
    statusLabel: 'System Simulation',
    features: [
      'Object-oriented banking architecture',
      'PIN authentication and session handling',
      'Transactional deposit and withdrawal constraints',
      'JSON ledger state persistence'
    ],
    longOverview: 'Designed as a robust demonstration of software engineering and OOP principles in Python. Employs encapsulation, polymorphic transaction types, and transactional rollback mechanisms. State is saved and retrieved continuously from JSON storage schemas.',
    technicalHighlights: [
      'Strict transaction validation guarding against overdrafts and invalid currency denominations',
      'Structured JSON serialization for persistent account state across application sessions'
    ],
    githubUrl: 'https://github.com/jophita-kristen-s/ATM-Simulation.git',
    githubRepoType: 'public'
  },
  {
    id: 'calculator-pyqt5',
    number: '09',
    title: 'Calculator',
    subtitle: 'Desktop GUI Calculation Engine Built with PyQt5',
    description: 'A desktop graphical calculator developed using Python and PyQt5. Features an event-driven user interface, comprehensive numerical input parsing, operator precedence evaluation, and responsive layout scaling.',
    category: 'web-app',
    badgeCategory: 'Desktop GUI',
    bannerTitle: 'PYQT5 CALCULATOR',
    bannerDetail: 'Desktop Application GUI',
    bannerSubtext: 'Python • PyQt5 • Event Loop',
    iconName: 'calculate',
    tags: ['Python', 'PyQt5', 'Desktop GUI', 'Event Handling'],
    statusLabel: 'Desktop Application',
    features: [
      'Clean PyQt5 event-driven graphical interface',
      'Arithmetic expression validation and error handling',
      'Responsive keyboard and button event mapping'
    ],
    longOverview: 'Built to master desktop application development in Python using the PyQt5 framework. The application implements structured Qt layouts, signal-and-slot event bindings, and robust mathematical expression sanitization.',
    technicalHighlights: [
      'Qt signal-and-slot architecture ensuring non-blocking event-loop handling',
      'Graceful error handling for division-by-zero and malformed syntax strings'
    ],
    githubUrl: 'https://github.com/jophita-kristen-s/Calculator.git',
    githubRepoType: 'public'
  },
  {
    id: 'regression-ml-comparison',
    number: '10',
    title: 'Regression-Based ML Comparison',
    subtitle: 'Empirical Benchmark of 7 Regression Models on 5 Datasets',
    description: 'A comprehensive comparative analysis benchmarking 7 distinct regression algorithms across 5 diverse datasets. Evaluated models on mean squared error, mean absolute error, R-squared metrics, and cross-validation stability.',
    category: 'research',
    badgeCategory: 'ML Benchmark',
    bannerTitle: 'REGRESSION COMPARISON',
    bannerDetail: '7 Models Across 5 Datasets',
    bannerSubtext: 'Python • Scikit-learn • Pandas',
    iconName: 'analytics',
    tags: ['Python', 'Scikit-learn', 'Machine Learning', 'Pandas', 'Data Analysis'],
    statusLabel: 'Comparative Study',
    features: [
      'Implementation of 7 regression architectures',
      'Evaluation across 5 distinct dataset distributions',
      'Systematic comparison via RMSE, MAE, and R² scores',
      'Cross-validation and variance analysis'
    ],
    longOverview: 'An empirical machine learning benchmark comparing 7 regression algorithms (including Linear Regression, Ridge, Lasso, Decision Tree Regressor, Random Forest Regressor, Gradient Boosting, and Support Vector Regressor) across 5 datasets with varying feature cardinality and noise profiles.',
    technicalHighlights: [
      'Standardized preprocessing pipelines with feature scaling, imputation, and encoding',
      'K-fold cross-validation protocol to eliminate sampling bias'
    ],
    githubUrl: 'https://github.com/jophita-kristen-s/Regression-Based-ML-Comparison.git',
    githubRepoType: 'public'
  },
  {
    id: 'classification-ml-comparison',
    number: '11',
    title: 'Classification-Based ML Comparison',
    subtitle: 'Benchmark of 8 Classifiers Across 4 Diverse Datasets',
    description: 'Rigorous comparative study testing 8 classification algorithms across Diabetes, Iris, SteelFaults, and Wine datasets. Compared models on accuracy, precision, recall, F1-score, and ROC curves.',
    category: 'research',
    badgeCategory: 'ML Benchmark',
    bannerTitle: 'CLASSIFICATION COMPARISON',
    bannerDetail: '8 Models Across 4 Datasets',
    bannerSubtext: 'Diabetes • Iris • SteelFaults • Wine',
    iconName: 'bar_chart',
    tags: ['Python', 'Scikit-learn', 'Data Preprocessing', 'Machine Learning'],
    statusLabel: 'Comparative Study',
    features: [
      'Benchmark of 8 classification algorithms',
      'Multi-dataset evaluation: Diabetes, Iris, SteelFaults, Wine',
      'Precision, Recall, F1, and confusion matrix profiling',
      'Performance tradeoff analysis across linear vs ensemble models'
    ],
    longOverview: 'Systematic comparison of 8 standard classification models (Logistic Regression, KNN, Naive Bayes, Decision Trees, Random Forest, SVM, AdaBoost, and Gradient Boosting) across four classic benchmark datasets to explore how feature correlation and class balance affect model convergence.',
    technicalHighlights: [
      'Multi-metric evaluation tracking Precision-Recall curves and Confusion Matrices',
      'Hyperparameter grid searching across tree depths, kernels, and regularization factors'
    ],
    githubUrl: 'https://github.com/jophita-kristen-s/Classification-Based-ML-Comparison.git',
    githubRepoType: 'public'
  },
  {
    id: 'upi-transactions-prediction',
    number: '12',
    title: 'UPI Payment Transactions Prediction',
    subtitle: 'Transaction Pattern Analytics with Random Forest',
    description: 'A predictive modeling pipeline trained on UPI (Unified Payments Interface) transaction records to classify payment patterns and detect anomalies using Random Forest.',
    category: 'ai-ml',
    badgeCategory: 'FinTech ML',
    bannerTitle: 'UPI PREDICTION',
    bannerDetail: 'Random Forest Transaction Classifier',
    bannerSubtext: 'Python • Random Forest • Scikit-learn',
    iconName: 'payments',
    tags: ['Python', 'Random Forest', 'Scikit-learn', 'Pandas', 'FinTech'],
    statusLabel: 'Model Implementation',
    features: [
      'UPI transaction data preprocessing and feature engineering',
      'Random Forest ensemble classifier',
      'Transaction behavior classification and risk profiling'
    ],
    longOverview: 'Analyzed high-volume UPI transaction logs to identify transaction velocity, time-of-day features, and merchant-type risk profiles. Trained a Random Forest ensemble to reliably classify transaction validity and flag suspicious payment bursts.',
    technicalHighlights: [
      'Engineered temporal frequency and transaction deviation features from raw payment logs',
      'Ensemble decision tree optimization using feature importance ranking'
    ],
    githubUrl: 'https://github.com/jophita-kristen-s/UPI-Payment-Transactions-Prediction.git',
    githubRepoType: 'public'
  },
  {
    id: 'credit-card-fraud-detection',
    number: '13',
    title: 'Credit Card Fraud Detection',
    subtitle: 'Imbalanced Dataset Classification with 0.97 ROC-AUC',
    description: 'Financial fraud detection model built with Logistic Regression for highly imbalanced credit card transaction datasets. Achieved a 0.97 ROC-AUC score through targeted preprocessing and threshold optimization.',
    category: 'ai-ml',
    badgeCategory: 'FinTech ML',
    bannerTitle: 'CREDIT CARD FRAUD',
    bannerDetail: 'ROC-AUC: 0.97 Result',
    bannerSubtext: 'Logistic Regression • Imbalanced Data',
    iconName: 'credit_card',
    tags: ['Python', 'Logistic Regression', 'Scikit-learn', 'Data Preprocessing'],
    statusLabel: 'ROC-AUC 0.97',
    features: [
      'Imbalanced dataset handling for rare fraud events',
      'Tuned Logistic Regression classification model',
      'ROC-AUC evaluation achieving 0.97 validation score'
    ],
    longOverview: 'Fraud detection on transactional data is characterized by extreme class imbalance (typically <0.2% positive fraud cases). Using calibrated Logistic Regression and probability threshold adjustment, this model achieved a 0.97 ROC-AUC while preserving high precision.',
    technicalHighlights: [
      'Standardized feature scaling on PCA-transformed transactional components',
      'Precision-Recall and ROC curve tuning for mission-critical fraud isolation'
    ],
    githubUrl: 'https://github.com/jophita-kristen-s/Credit-Card-Fraud-Detection.git',
    githubRepoType: 'public'
  },
  {
    id: 'mnist-digit-recognition',
    number: '14',
    title: 'MNIST Digit Recognition',
    subtitle: 'Deep Convolutional Neural Network with Data Augmentation',
    description: 'A deep CNN built with TensorFlow / Keras for handwritten digit classification on the MNIST dataset. Leveraged image data augmentation (rotations, width/height shifts, zoom) to prevent overfitting and enhance generalization.',
    category: 'ai-ml',
    badgeCategory: 'Deep Learning',
    bannerTitle: 'MNIST DIGIT RECOGNITION',
    bannerDetail: 'CNN + Data Augmentation',
    bannerSubtext: 'TensorFlow / Keras • Deep Learning',
    iconName: 'draw',
    tags: ['TensorFlow / Keras', 'Deep Learning', 'Computer Vision', 'Python'],
    statusLabel: 'Deep Learning Model',
    features: [
      'Convolutional neural network architecture',
      'Real-time image data augmentation pipeline',
      'Softmax probability distribution output across 10 digit classes'
    ],
    longOverview: 'Implemented a multi-layer Convolutional Neural Network using Keras, incorporating Conv2D layers, Batch Normalization, MaxPooling, and Dropout regularization. Data augmentation techniques improved model robustness to off-center and slanted handwriting.',
    technicalHighlights: [
      'ImageDataGenerator integration for dynamic rotation and translation shifts during training',
      'Training convergence profiling with loss curves and confusion matrix validation'
    ],
    githubUrl: 'https://github.com/jophita-kristen-s/MNIST-Digit-Recognition.git',
    githubRepoType: 'public'
  },
  {
    id: 'stock-market-prediction',
    number: '15',
    title: 'Stock Market Prediction',
    subtitle: 'Time-Series Modeling with Linear Regression & Random Forest',
    description: 'Equities price movement prediction system comparing Linear Regression and Random Forest architectures. Evaluated model accuracy and error residuals using R-squared (R²) and Root Mean Squared Error (RMSE).',
    category: 'research',
    badgeCategory: 'Financial Modeling',
    bannerTitle: 'STOCK PREDICTION',
    bannerDetail: 'Linear Regression vs Random Forest',
    bannerSubtext: 'Evaluated on R² & RMSE',
    iconName: 'trending_up',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning', 'Data Analysis'],
    statusLabel: 'Comparative Model',
    features: [
      'Historical price time-series feature engineering',
      'Comparative modeling: Linear Regression vs Random Forest',
      'Evaluation via R² and RMSE error metrics'
    ],
    longOverview: 'Engineered lag indicators, moving averages, and volatility features from historical equities records. Evaluated the linear assumptions of Linear Regression against the non-linear partitioning of Random Forest models using R² and RMSE.',
    technicalHighlights: [
      'Time-series chronological split preventing future data leakage during training',
      'Quantitative comparison of residual error metrics between linear and non-linear regressors'
    ],
    githubUrl: 'https://github.com/jophita-kristen-s/Stock-Market-Prediction-.git',
    githubRepoType: 'public'
  },
  {
    id: 'cheque-fraud-detection',
    number: '16',
    title: 'Cheque Fraud Detection',
    subtitle: 'OpenCV Image Enhancement & CNN Verification',
    description: 'Financial security pipeline for banking cheque authentication. Combines an OpenCV image enhancement pipeline (grayscale conversion, thresholding, edge filtering) with a Convolutional Neural Network built in TensorFlow / Keras.',
    category: 'ai-ml',
    badgeCategory: 'Computer Vision',
    bannerTitle: 'CHEQUE FRAUD DETECTION',
    bannerDetail: 'OpenCV Preprocessing + CNN',
    bannerSubtext: 'TensorFlow / Keras • OpenCV',
    iconName: 'fact_check',
    tags: ['TensorFlow / Keras', 'OpenCV', 'Deep Learning', 'Computer Vision'],
    statusLabel: 'Vision Pipeline',
    features: [
      'Custom OpenCV image enhancement pipeline',
      'Noise suppression and stroke boundary sharpening',
      'CNN classification for fraudulent cheque identification'
    ],
    longOverview: 'Bank cheque forgery often involves altered amounts, mismatched signatures, or tampered MICR bands. This project utilizes an OpenCV enhancement pipeline to normalize background gradients and highlight stroke inconsistencies, which are then classified using a deep CNN.',
    technicalHighlights: [
      'Adaptive Gaussian thresholding to isolate handwritten pen strokes from patterned cheque backgrounds',
      'Keras CNN training for binary legitimate vs fraudulent cheque classification'
    ],
    githubUrl: 'https://github.com/jophita-kristen-s/Cheque-Fraud-Detection-.git',
    githubRepoType: 'public'
  },
  {
    id: 'customer-satisfaction-prediction',
    number: '17',
    title: 'Customer Satisfaction Prediction',
    subtitle: 'Airline Travel Analytics via Random Forest',
    description: 'Customer feedback analytics model trained using Random Forest to predict airline customer satisfaction. Feature importance analysis revealed online boarding convenience as the primary predictor of positive customer sentiment.',
    category: 'research',
    badgeCategory: 'Data Analytics',
    bannerTitle: 'CUSTOMER SATISFACTION',
    bannerDetail: 'Top Predictor: Online Boarding',
    bannerSubtext: 'Python • Random Forest • Feature Importance',
    iconName: 'sentiment_satisfied',
    tags: ['Python', 'Random Forest', 'Scikit-learn', 'Data Analysis & Visualization'],
    statusLabel: 'Analytics Model',
    features: [
      'Exploratory data analysis of travel customer survey features',
      'Random Forest classification architecture',
      'Empirical finding: Online boarding was the top predictor of satisfaction'
    ],
    longOverview: 'Examined survey metrics covering seat comfort, in-flight entertainment, baggage handling, and check-in services. Trained a Random Forest classifier to predict satisfaction outcomes and computed Gini feature importance, discovering that streamlined online boarding had the highest correlation with overall satisfaction.',
    technicalHighlights: [
      'Comprehensive missing-value imputation and ordinal encoding across customer categories',
      'Extracted feature importance rankings highlighting online boarding as the primary driver'
    ],
    githubUrl: 'https://github.com/jophita-kristen-s/Customer-Satisfaction-Prediction-.git',
    githubRepoType: 'public'
  },
  {
    id: 'sse-realtime-messaging',
    number: '18',
    title: 'SSE Real-Time Messaging App',
    subtitle: 'Lightweight Unidirectional Streaming via Python & Flask',
    description: 'A real-time messaging application engineered with Python, Flask, and Server-Sent Events (SSE). Delivers persistent low-latency server-to-client message streaming over standard HTTP connections without the overhead of full duplex WebSockets.',
    category: 'web-app',
    badgeCategory: 'Real-Time Systems',
    bannerTitle: 'SSE MESSAGING APP',
    bannerDetail: 'Server-Sent Events Stream',
    bannerSubtext: 'Python • Flask • Server-Sent Events (SSE)',
    iconName: 'send_time_extension',
    tags: ['Python', 'Flask', 'Server-Sent Events (SSE)', 'EventSource API'],
    statusLabel: 'Real-Time System',
    teamSize: 'Solo Project',
    problem: 'Full-duplex WebSockets introduce excessive server state complexity, persistent socket daemon overhead, and firewall traversal friction when an application only needs server-to-client streaming.',
    solution: 'Engineered a lightweight real-time stream using Python, Flask, and Server-Sent Events (SSE) over standard HTTP connections with built-in automatic client reconnection and event dispatching.',
    contribution: {
      role: 'Backend Developer (Solo Project)',
      team: 'Solo Project',
      summaryLine: 'Flask streaming backend • text/event-stream response protocol • EventSource client • Connection lifecycle',
      contributions: [
        'Flask streaming server utilizing text/event-stream HTTP response protocol',
        'Generator-based event streaming and real-time message dispatching',
        'Browser EventSource API integration with automatic reconnection handling',
        'Stateless, low-overhead unidirectional broadcast pipeline'
      ]
    },
    features: [
      'Server-Sent Events (SSE) stream implementation over standard HTTP',
      'Browser-native EventSource API integration with automatic reconnection',
      'Lightweight unidirectional transport without WebSocket daemon overhead',
      'Live message streaming and event dispatching'
    ],
    longOverview: 'Engineered to examine alternatives to WebSockets for real-time applications where server-to-client broadcast is the primary requirement. Built using Python, Flask, and Server-Sent Events (SSE), establishing a persistent HTTP connection with automatic reconnection handling and event stream parsing.',
    technicalHighlights: [
      'Configured text/event-stream headers and Python generator yield functions for streaming data',
      'Client-side EventSource API integration handling reconnections and message events'
    ],
    githubUrl: 'https://github.com/jophita-kristen-s/sse.git',
    githubRepoType: 'public',
    evidence: {
      githubUrl: 'https://github.com/jophita-kristen-s/sse.git',
      readmeUrl: 'https://github.com/jophita-kristen-s/sse#readme',
      repoStatus: 'available',
      demoStatus: 'unavailable'
    }
  }
];

export const FEATURED_PROJECT_IDS = [
  'dr-screening',
  'smart-hospital-ai',
  'resumatch-ultra',
  'encrowatch',
  'scanline',
  'sse-realtime-messaging'
] as const;

export interface SecondaryProjectSummary {
  id: string;
  name: string;
  chipLabel: string;
  oneLiner: string;
  technology: string;
  category: string;
  githubUrl?: string;
  figmaUrl?: string;
}

export const SECONDARY_PROJECTS: SecondaryProjectSummary[] = [
  {
    id: 'atm-simulation',
    name: 'ATM Simulation',
    chipLabel: 'ATM Simulation',
    oneLiner: 'Object-oriented banking terminal simulation managing PIN verification, balance inquiries, and cash transactions.',
    technology: 'Java • OOP',
    category: 'Software Engineering',
    githubUrl: 'https://github.com/jophita-kristen-s/ATM-Simulation.git'
  },
  {
    id: 'scientific-calculator',
    name: 'Scientific Calculator',
    chipLabel: 'Calculator',
    oneLiner: 'Scientific calculation application supporting multi-stage expression evaluation and trigonometric math routines.',
    technology: 'Java • Swing',
    category: 'Software Engineering',
    githubUrl: 'https://github.com/jophita-kristen-s/Scientific-Calculator.git'
  },
  {
    id: 'regression-ml',
    name: 'Regression-Based ML Comparison',
    chipLabel: 'Regression-Based ML Comparison',
    oneLiner: 'Empirical benchmark comparing linear, polynomial, and ensemble regressors on residual error and R² fit.',
    technology: 'Python • Scikit-learn',
    category: 'Machine Learning',
    githubUrl: 'https://github.com/jophita-kristen-s/Regression-Based-Comparison-of-Machine-Learning-Algorithms-.git'
  },
  {
    id: 'classification-ml',
    name: 'Classification-Based ML Comparison',
    chipLabel: 'Classification-Based ML Comparison',
    oneLiner: 'Supervised classification benchmark evaluating decision trees, random forests, and SVMs across ROC-AUC metrics.',
    technology: 'Python • Scikit-learn',
    category: 'Machine Learning',
    githubUrl: 'https://github.com/jophita-kristen-s/Classification-Based-Comparison-of-Machine-Learning-Algorithms-.git'
  },
  {
    id: 'upi-fraud',
    name: 'UPI Payment Transactions Prediction',
    chipLabel: 'UPI Payment Transactions Prediction',
    oneLiner: 'Anomaly detection model analyzing transaction frequencies and velocity indicators to identify anomalous UPI payments.',
    technology: 'Python • ML Models',
    category: 'Machine Learning',
    githubUrl: 'https://github.com/jophita-kristen-s/Predicting-UPI-Payment-Transactions-.git'
  },
  {
    id: 'credit-fraud',
    name: 'Credit Card Fraud Detection',
    chipLabel: 'Credit Card Fraud Detection',
    oneLiner: 'Fraud classification system using SMOTE resampled transaction data and cost-sensitive ensemble trees.',
    technology: 'Python • Scikit-learn',
    category: 'Machine Learning',
    githubUrl: 'https://github.com/jophita-kristen-s/Credit-Card-Fraud-Detection-.git'
  },
  {
    id: 'mnist-digits',
    name: 'MNIST Digit Recognition',
    chipLabel: 'MNIST Digit Recognition',
    oneLiner: 'Computer vision neural network classifying 28x28 handwritten grayscale digits with high accuracy.',
    technology: 'Python • Keras / TF',
    category: 'Computer Vision',
    githubUrl: 'https://github.com/jophita-kristen-s/MNIST-Digit-Recognition-.git'
  },
  {
    id: 'stock-market',
    name: 'Stock Market Prediction',
    chipLabel: 'Stock Market Prediction',
    oneLiner: 'Historical time-series predictive modeling comparing autoregressive baselines against regression models.',
    technology: 'Python • Pandas',
    category: 'Data Analytics',
    githubUrl: 'https://github.com/jophita-kristen-s/Stock-Market-Prediction-.git'
  },
  {
    id: 'cheque-fraud-detection',
    name: 'Cheque Fraud Detection',
    chipLabel: 'Cheque Fraud Detection',
    oneLiner: 'Financial security pipeline combining OpenCV image enhancement with a CNN to detect forged bank cheques.',
    technology: 'Python • OpenCV • Keras',
    category: 'Computer Vision',
    githubUrl: 'https://github.com/jophita-kristen-s/Cheque-Fraud-Detection-.git'
  },
  {
    id: 'customer-satisfaction-prediction',
    name: 'Customer Satisfaction Prediction',
    chipLabel: 'Customer Satisfaction Prediction',
    oneLiner: 'Random Forest analytics model identifying online boarding convenience as the primary driver of customer satisfaction.',
    technology: 'Python • Random Forest',
    category: 'Data Analytics',
    githubUrl: 'https://github.com/jophita-kristen-s/Customer-Satisfaction-Prediction-.git'
  },
  {
    id: 'voter-epic',
    name: 'Voter EPIC Extraction Pipeline',
    chipLabel: 'Voter EPIC Extraction Pipeline',
    oneLiner: 'OCR and document parsing pipeline extracting alphanumeric voter identity card numbers from scanned records.',
    technology: 'Python • OpenCV • Tesseract',
    category: 'Document AI',
    githubUrl: 'https://github.com/jophita-kristen-s/Voter-EPIC-Extraction-Pipeline-.git'
  },
  {
    id: 'aurelia-gems',
    name: 'Aurelia Gems',
    chipLabel: 'Aurelia Gems',
    oneLiner: 'Luxury jewelry eCommerce interface with bespoke typography, responsive catalog grids, and checkout design.',
    technology: 'Figma • UI/UX Design',
    category: 'Design Engineering',
    figmaUrl: 'https://www.figma.com/proto/zJv1U8eG1a0v1l2?node-id=1-2'
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ramanujan-life-works',
    title: 'Life and Works of Ramanujan',
    organization: '2nd Place, in-house program by Mathematics Club',
    year: 'December 2023',
    badge: '2nd Place',
    metric: '2nd Place',
    highlight: true,
    description: '',
    icon: 'workspace_premium'
  },
  {
    id: 'social-media-students',
    title: 'Impact of Social Media on Students',
    organization: '1st Place, in-house program by Regalia Club',
    year: 'April 2025',
    badge: '1st Place',
    metric: '1st Place',
    highlight: true,
    description: '',
    icon: 'emoji_events'
  },
  {
    id: 'ocular-ai-symposium',
    title: 'Explainable AI for Multi-Disease Ocular Diagnosis',
    organization: '1st Place, Technical Symposium by Tech Wizard & Cyber Security Club',
    year: 'February 2026',
    badge: '1st Place',
    metric: '1st Place',
    highlight: true,
    description: '',
    icon: 'military_tech'
  },
  {
    id: 'road-safety-essay',
    title: 'Road Safety Essay Writing Competition',
    organization: 'Participation',
    year: 'January 2025',
    badge: 'Participation',
    metric: 'Participation',
    highlight: false,
    description: '',
    icon: 'edit_note'
  },
  {
    id: 'ramanujan-math-competition',
    title: 'National Level Srinivasa Ramanujan Mathematical Competition',
    organization: 'Qualified all 3 rounds, ISTE Tamil Nadu Section',
    year: 'November 2024',
    badge: 'Qualified 3 Rounds',
    metric: 'All 3 Rounds',
    highlight: true,
    description: '',
    icon: 'calculate'
  },
  {
    id: 'metacode-quiz',
    title: 'Online Quiz Competition',
    organization: 'MetaCode | Composit 31st Edition, Society of Metallurgical Engineers, IIT Kharagpur',
    year: 'April 2026',
    badge: 'Round 2',
    metric: 'Qualified Round 2',
    highlight: true,
    description: 'Qualified for Round 2',
    icon: 'code'
  },
  {
    id: 'code-maestros',
    title: 'Code Challenge "Code Maestros"',
    organization: 'Hackathon and Innovation Club, 3rd Year',
    year: '2025',
    badge: 'Code Challenge',
    metric: '3rd Year',
    highlight: false,
    description: '',
    icon: 'terminal'
  },
  {
    id: 'puduvai-top70-2026',
    title: 'Puduvai Innovation Competition 2026',
    organization: 'Puduvai Innovation Competition',
    year: 'May 2026',
    badge: 'Top 70, Level 1',
    metric: 'Top 70 (Level 1)',
    highlight: true,
    description: '',
    icon: 'stars'
  },
  {
    id: 'puduvai-grant-2026',
    title: 'Puduvai Innovation Competition 2026',
    organization: 'Puduvai Innovation Competition',
    year: 'May 2026',
    badge: '₹10,000 Grant',
    metric: '₹10,000 Innovation Grant',
    highlight: true,
    description: '',
    icon: 'payments'
  }
];

export const LEADERSHIP_DATA: LeadershipItem[] = [
  {
    id: 'placement-club',
    role: 'Organizer, Placement Club',
    entity: "Women's Engineering College, 2nd Year",
    period: '2025',
    impactMetric: '2nd Year',
    description: '',
    responsibilities: []
  },
  {
    id: 'inside-program',
    role: 'Organizer, INSIDE Program',
    entity: 'conducted by Placement Club, 2nd Year',
    period: '2025',
    impactMetric: '2nd Year',
    description: '',
    responsibilities: []
  },
  {
    id: 'tech-wizard-club',
    role: 'Joint Secretary, Tech Wizard Club',
    entity: '2nd Year',
    period: '2025',
    impactMetric: '2nd Year',
    description: '',
    responsibilities: []
  },
  {
    id: 'gateprep-unit',
    role: 'Vice President (Technical Unit), GATEPrep',
    entity: 'organized by Hackathon and Innovation Club, 3rd Year',
    period: '2026',
    impactMetric: '3rd Year',
    description: '',
    responsibilities: []
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-inspire-2025',
    title: 'INSPIRE English Foundation & Job Readiness Training',
    issuer: 'INSPIRE Program',
    issuedDate: 'March 2025',
    skillsCovered: ['Professional Communication', 'Job Readiness', 'Workplace Collaboration'],
    type: 'Training'
  },
  {
    id: 'cert-iiitdm-aiip-2025',
    title: "AIIP'25 — AI-Powered Image Processing: Techniques and Applications",
    issuer: 'IIITDM Kancheepuram',
    issuedDate: 'June 2025',
    skillsCovered: ['AI-Powered Image Processing', 'Computer Vision', 'Deep Learning for Vision', 'Image Analysis'],
    type: 'Workshop'
  },
  {
    id: 'cert-nptel-cg-2025',
    title: 'Computer Graphics',
    issuer: 'NPTEL',
    issuedDate: 'September 2025',
    skillsCovered: ['Computer Graphics', 'Rendering Algorithms', 'Transformation Geometry', 'Rasterization'],
    type: 'Certification'
  },
  {
    id: 'cert-cross-ai-2026',
    title: 'Cross Department AI Awareness Technical Workshop',
    issuer: 'Technical Workshop',
    issuedDate: 'February 2026',
    skillsCovered: ['AI Awareness', 'Applied Machine Learning', 'Cross-Domain Technology'],
    type: 'Workshop'
  },
  {
    id: 'cert-vibe-coding-2026',
    title: 'Vibe Coding',
    issuer: 'Brain BIOS at NIT Puducherry',
    issuedDate: 'February 2026',
    skillsCovered: ['Modern Software Prototyping', 'Rapid Development', 'Developer Tooling'],
    type: 'Workshop'
  }
];

export const INTERESTS_SCRAPBOOK: InterestScrapbook[] = [
  {
    id: 'interest-ai',
    title: 'AI, ML & Explainability',
    emoji: '🧠',
    tapeRotation: 'transform -rotate-1',
    handwrittenNote: 'Understanding model decisions matters.',
    noteColor: 'text-[#cfbdff]',
    description: 'Deeply fascinated by Machine Learning, Deep Learning, and Explainable AI (XAI) such as Grad-CAM that unveil black-box neural networks for real clinical and civic benefit.',
    hashtag: '#ExplainableAI #MachineLearning',
    topicLabel: 'Core Pursuit',
    accentColor: 'border-[#cfbdff]/40 text-[#cfbdff]'
  },
  {
    id: 'interest-vision',
    title: 'Computer Vision & OCR',
    emoji: '👁️',
    tapeRotation: 'transform rotate-1',
    handwrittenNote: 'Pixels turned into structured clarity.',
    noteColor: 'text-[#66d9ca]',
    description: 'Transforming degraded physical documents, electoral records, and retinal fundus imagery into structured, machine-actionable knowledge using OpenCV, Tesseract, and deep convolutional nets.',
    hashtag: '#ComputerVision #OCR #ImageProcessing',
    topicLabel: 'Vision Systems',
    accentColor: 'border-[#66d9ca]/40 text-[#66d9ca]'
  },
  {
    id: 'interest-robotics',
    title: 'Robotics Simulation & CoppeliaSim',
    emoji: '🤖',
    tapeRotation: 'transform -rotate-2',
    handwrittenNote: 'Testing kinematics in virtual physics.',
    noteColor: 'text-[#ffb1c3]',
    description: 'Exploring robotic kinematics and spatial environment behaviors in simulated sandboxes with CoppeliaSim, MATLAB Online, and Simulink models before touching physical hardware.',
    hashtag: '#RoboticsSimulation #CoppeliaSim',
    topicLabel: 'Simulation Lab',
    accentColor: 'border-[#ffb1c3]/40 text-[#ffb1c3]'
  },
  {
    id: 'interest-gis',
    title: 'GIS & Spatial Systems',
    emoji: '🗺️',
    tapeRotation: 'transform rotate-2',
    handwrittenNote: 'Geography meets data geometry.',
    noteColor: 'text-[#cfbdff]',
    description: 'Visualizing spatial boundaries, coastal terrain, and municipal land registries in Puducherry through interactive SVG vectors and satellite data references.',
    hashtag: '#GIS #SpatialData #Puducherry',
    topicLabel: 'Civic Systems',
    accentColor: 'border-[#cfbdff]/40 text-[#cfbdff]'
  },
  {
    id: 'interest-f1',
    title: 'Formula 1 Racing & Telemetry',
    emoji: '🏎️',
    tapeRotation: 'transform -rotate-1',
    handwrittenNote: 'Aerodynamics, strategy & split-second data.',
    noteColor: 'text-[#ffb1c3]',
    description: 'Passionate about Formula 1 — the pinnacle where aerodynamic precision, real-time sensor telemetry, tire degradation algorithms, and tactical decisions collide at 300+ km/h.',
    hashtag: '#Formula1 #MotorsportTelemetry',
    topicLabel: 'High Velocity',
    accentColor: 'border-[#ffb1c3]/40 text-[#ffb1c3]'
  },
  {
    id: 'interest-cosmos',
    title: 'Space, Astronomy & Stardust',
    emoji: '🔭',
    tapeRotation: 'transform rotate-1',
    handwrittenNote: 'Looking up to keep perspective.',
    noteColor: 'text-[#66d9ca]',
    description: 'Drawn to deep cosmology, orbital mechanics, planetary spectroscopy, and the sheer poetic scale of celestial cartography. A perpetual reminder of our place in the universe.',
    hashtag: '#Astronomy #Astrophysics #Cosmos',
    topicLabel: 'Night Sky',
    accentColor: 'border-[#66d9ca]/40 text-[#66d9ca]'
  },
  {
    id: 'interest-creative',
    title: 'Design, Fashion & Visual Storytelling',
    emoji: '✨',
    tapeRotation: 'transform -rotate-1',
    handwrittenNote: 'Aesthetics and engineering belong together.',
    noteColor: 'text-[#cfbdff]',
    description: 'Balancing technical rigour with creative visual storytelling, Figma UI design, fashion aesthetics, and handwritten journaling to reflect on ideas, code, and growth.',
    hashtag: '#CreativeDesign #Journaling #Storytelling',
    topicLabel: 'Aesthetics',
    accentColor: 'border-[#cfbdff]/40 text-[#cfbdff]'
  }
];

export const UNIVERSE_NODES: UniverseNode[] = [
  {
    id: 'ai-ml-node',
    category: 'INTELLIGENCE',
    emoji: '🧠',
    title: 'Machine Learning & Explainable AI',
    shortSubtitle: 'From Raw Data to Clinical Insights',
    description: "Developing intelligent algorithms that don't just output predictions, but explain their reasoning. From retinal fundus screening to financial fraud detection and regression benchmarking.",
    tags: ['Explainable AI', 'Grad-CAM', 'Scikit-learn', 'PyTorch', 'TensorFlow'],
    footer: 'Focused on interpretable models in healthcare & civic systems',
    tagColors: ['text-[#cfbdff]', 'text-[#66d9ca]', 'text-[#ffb1c3]']
  },
  {
    id: 'vision-node',
    category: 'PERCEPTION',
    emoji: '👁️',
    title: 'Computer Vision & OCR',
    shortSubtitle: 'Parsing Complex Visual Inputs',
    description: 'Extracting clean structural data from degraded electoral cards, retinal blood vessels, cheques, and documents using OpenCV, PyMuPDF, and Tesseract pipelines.',
    tags: ['OpenCV', 'Tesseract', 'PyMuPDF', 'Voter EPIC', 'Document OCR'],
    footer: 'Turning degraded analog signals into structured digital data',
    tagColors: ['text-[#66d9ca]', 'text-[#cfbdff]', 'text-[#e8ddff]']
  },
  {
    id: 'simulation-node',
    category: 'SIMULATION',
    emoji: '⚙️',
    title: 'Robotics & System Modeling',
    shortSubtitle: 'CoppeliaSim, MATLAB & Simulink',
    description: 'Simulating multi-body kinematics, digital signal workflows, and physical interactions using CoppeliaSim and Simulink prior to physical prototyping.',
    tags: ['CoppeliaSim', 'MATLAB', 'Simulink', 'Kinematics', 'Signal Processing'],
    footer: 'Bridging algorithmic code with virtual physical dynamics',
    tagColors: ['text-[#ffb1c3]', 'text-[#cfbdff]', 'text-[#66d9ca]']
  },
  {
    id: 'fullstack-node',
    category: 'SOFTWARE ARCHITECTURE',
    emoji: '💻',
    title: 'Full-Stack & Real-Time Engineering',
    shortSubtitle: 'Robust Backends & Responsive Frontends',
    description: 'Building end-to-end applications: hospital management ecosystems, geospatial GIS dashboards, and low-latency Server-Sent Events (SSE) streaming apps with Node, Python, and REST APIs.',
    tags: ['Node.js', 'Python', 'Flask', 'SSE', 'REST APIs'],
    footer: 'Committed to clean schema design and low-latency APIs',
    tagColors: ['text-[#cfbdff]', 'text-[#66d9ca]', 'text-[#ffb1c3]']
  },
  {
    id: 'data-node',
    category: 'DATA & STORAGE',
    emoji: '🗄️',
    title: 'Database Architecture & SQL',
    shortSubtitle: 'Relational & Document Stores',
    description: 'Designing normalized relational schemas and document stores across PostgreSQL, MySQL, and MongoDB to guarantee data integrity across complex workflows.',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL', 'Schema Design'],
    footer: 'Structured data foundations for resilient software systems',
    tagColors: ['text-[#66d9ca]', 'text-[#ffb1c3]', 'text-[#cfbdff]']
  },
  {
    id: 'design-node',
    category: 'CREATIVE CRAFT',
    emoji: '🎨',
    title: 'UI/UX Design & Design Systems',
    shortSubtitle: 'Figma Systems & Micro-Interactions',
    description: 'Designing human-centered interfaces with Figma, building reusable atomic design systems, editorial typographic scales, and delightful user experiences like Aurelia Gems.',
    tags: ['Figma', 'Design Systems', 'Typography', 'UI/UX', 'Component Libraries'],
    footer: 'Engineering precision combined with visual craftsmanship',
    tagColors: ['text-[#ffb1c3]', 'text-[#cfbdff]', 'text-[#66d9ca]']
  },
  {
    id: 'curiosity-node',
    category: 'PERSONAL FREQUENCY',
    emoji: '🌌',
    title: 'Curiosity, Cosmos & Formula 1',
    shortSubtitle: 'The Passions Beyond The Terminal',
    description: 'When offline, studying aerodynamic telemetry in Formula 1 racing, observing deep space constellations, writing in personal journals, and solving algorithmic constraint puzzles.',
    tags: ['Formula 1', 'Space / Astronomy', 'Journaling', 'Sudoku & Logic'],
    footer: 'Always curious, always learning, always exploring',
    tagColors: ['text-[#cfbdff]', 'text-[#66d9ca]', 'text-[#e8ddff]']
  }
];
