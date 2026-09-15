import fs from 'fs';
import path from 'path';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

async function generateResume() {
  const doc = await PDFDocument.create();
  
  // Standard Letter page dimensions in points
  const pageWidth = 612;
  const pageHeight = 792;
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;

  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await doc.embedFont(StandardFonts.HelveticaOblique);

  let page = doc.addPage([pageWidth, pageHeight]);
  let y = pageHeight - margin;

  const checkPageBreak = (neededHeight) => {
    if (y - neededHeight < margin) {
      page = doc.addPage([pageWidth, pageHeight]);
      y = pageHeight - margin;
    }
  };

  const drawSectionHeader = (title) => {
    checkPageBreak(30);
    y -= 14;
    page.drawText(title.toUpperCase(), {
      x: margin,
      y,
      size: 10,
      font: fontBold,
      color: rgb(0.12, 0.14, 0.2),
    });
    y -= 4;
    page.drawLine({
      start: { x: margin, y },
      end: { x: pageWidth - margin, y },
      thickness: 1,
      color: rgb(0.78, 0.8, 0.85),
    });
    y -= 8;
  };

  // HEADER
  page.drawText('JOPHITA KRISTEN S.', {
    x: margin,
    y,
    size: 20,
    font: fontBold,
    color: rgb(0.08, 0.09, 0.15),
  });
  
  const subtitle = 'B.TECH INFORMATION SCIENCE & ENGINEERING';
  const subtitleWidth = fontBold.widthOfTextAtSize(subtitle, 9);
  page.drawText(subtitle, {
    x: pageWidth - margin - subtitleWidth,
    y: y + 4,
    size: 9,
    font: fontBold,
    color: rgb(0.35, 0.38, 0.45),
  });
  y -= 16;

  // Contact Info Line
  const contactText = 'Puducherry, India  |  jophitakristen523@wec.edu.in  |  linkedin.com/in/jophita-kristen';
  page.drawText(contactText, {
    x: margin,
    y,
    size: 9,
    font: fontRegular,
    color: rgb(0.3, 0.33, 0.4),
  });
  y -= 14;

  // Brief Summary
  const summary = 'Information Science & Engineering undergraduate focusing on Explainable AI, Computer Vision, Machine Learning systems, and Full-Stack Engineering. Proven track record in hackathons, competitive academics, and prototype development.';
  const words = summary.split(' ');
  let currentLine = '';
  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (fontRegular.widthOfTextAtSize(testLine, 8.5) > contentWidth) {
      page.drawText(currentLine, { x: margin, y, size: 8.5, font: fontRegular, color: rgb(0.25, 0.27, 0.33) });
      y -= 11;
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) {
    page.drawText(currentLine, { x: margin, y, size: 8.5, font: fontRegular, color: rgb(0.25, 0.27, 0.33) });
    y -= 8;
  }

  // Divider below header
  page.drawLine({
    start: { x: margin, y },
    end: { x: pageWidth - margin, y },
    thickness: 1.5,
    color: rgb(0.12, 0.14, 0.2),
  });
  y -= 4;

  // 1. EDUCATION
  drawSectionHeader('Education');
  
  const education = [
    {
      institution: "Women's Engineering College, Lawspet, Puducherry",
      degree: 'B.Tech in Information Science & Engineering',
      period: '2023 - 2027 (Expected)',
      grade: 'CGPA: 8.78 / 10.0 (Rank 1 / 15)',
      coursework: 'Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Machine Learning, Computer Vision',
    },
    {
      institution: 'St. Joseph of Cluny Higher Secondary School, Lawspet',
      degree: 'Higher Secondary Certificate (HSC - 12th Standard)',
      period: '2021 - 2023',
      grade: 'Percentage: 90.67%',
      coursework: null,
    },
    {
      institution: 'St. Joseph of Cluny Higher Secondary School, Lawspet',
      degree: 'Secondary School Leaving Certificate (SSLC - 10th Standard)',
      period: '2020 - 2021',
      grade: 'Percentage: 98.60%',
      coursework: null,
    },
  ];

  for (const edu of education) {
    checkPageBreak(36);
    page.drawText(edu.institution, { x: margin, y, size: 9.5, font: fontBold, color: rgb(0.1, 0.12, 0.18) });
    const periodWidth = fontRegular.widthOfTextAtSize(edu.period, 8.5);
    page.drawText(edu.period, { x: pageWidth - margin - periodWidth, y, size: 8.5, font: fontRegular, color: rgb(0.4, 0.43, 0.5) });
    y -= 12;

    page.drawText(edu.degree, { x: margin, y, size: 9, font: fontRegular, color: rgb(0.2, 0.22, 0.28) });
    const gradeWidth = fontBold.widthOfTextAtSize(edu.grade, 8.5);
    page.drawText(edu.grade, { x: pageWidth - margin - gradeWidth, y, size: 8.5, font: fontBold, color: rgb(0.1, 0.12, 0.18) });
    y -= 11;

    if (edu.coursework) {
      page.drawText(`Relevant Coursework: ${edu.coursework}`, { x: margin, y, size: 8, font: fontOblique, color: rgb(0.35, 0.38, 0.45) });
      y -= 11;
    }
    y -= 3;
  }

  // 2. TECHNICAL SKILLS
  drawSectionHeader('Technical Skills');
  const skills = [
    { label: 'Programming Languages', val: 'C, C++, Python, Java, JavaScript, TypeScript, SQL, HTML5, CSS3' },
    { label: 'Frameworks & Libraries', val: 'React, Node.js, Express, Flask, Tailwind CSS, Scikit-learn, OpenCV' },
    { label: 'Databases & Storage', val: 'MongoDB, MySQL, PostgreSQL' },
    { label: 'Tools & Environments', val: 'Git, GitHub, VS Code, MATLAB, Simulink, Google Earth Engine, Figma' },
    { label: 'Domains & Competencies', val: 'Explainable AI, Computer Vision, Machine Learning, Full-Stack Development, RESTful APIs' },
  ];

  for (const s of skills) {
    checkPageBreak(15);
    page.drawText(`${s.label}: `, { x: margin, y, size: 8.5, font: fontBold, color: rgb(0.12, 0.14, 0.2) });
    const labelWidth = fontBold.widthOfTextAtSize(`${s.label}: `, 8.5);
    page.drawText(s.val, { x: margin + labelWidth, y, size: 8.5, font: fontRegular, color: rgb(0.25, 0.27, 0.33) });
    y -= 12;
  }
  y -= 2;

  // 3. SELECTED PROJECTS
  drawSectionHeader('Selected Engineering Projects');
  const projects = [
    {
      title: 'Explainable AI for Diabetic Retinopathy Screening',
      status: 'SIH 2026 • IN DEVELOPMENT',
      tech: 'MATLAB, Simulink, ResNet-50, Grad-CAM',
      desc: 'Developing an explainable clinical triage system for retinal fundus imaging. Integrates Grad-CAM activation mapping to highlight microaneurysms and hemorrhages, giving clinicians interpretable diagnostic reasoning.',
    },
    {
      title: 'Smart Hospital AI Suite (CareFlow + MediCareConnect)',
      status: 'Healthcare System',
      tech: 'Node.js, Express, MongoDB, REST APIs, JWT',
      desc: 'Engineered modular healthcare backend services providing high-availability RESTful APIs for patient intake, medical record management, and doctor appointment scheduling with document persistence.',
    },
    {
      title: 'ResuMatch Ultra — Candidate Semantic Scoring Engine',
      status: 'HR Analytics',
      tech: 'Python, Scikit-learn, TF-IDF, Cosine Similarity',
      desc: 'Built an automated resume evaluation engine that parses candidate documents, generates TF-IDF feature vectors, and computes cosine similarity against job descriptions to benchmark skill alignment.',
    },
    {
      title: 'EncroWatch — Satellite Land Boundary Analysis',
      status: 'Geospatial AI',
      tech: 'Python, Flask, Google Earth Engine, GIS Datasets',
      desc: 'Created a satellite-based land monitoring tool combining Google Earth Engine and Flask to detect temporal vegetation and infrastructure encroachments across sensitive municipal boundaries.',
    },
    {
      title: 'Scanline — Browser-Based Smart Checkout & Multi-Item Detection',
      status: 'In Testing',
      tech: 'Camera Capture API, Object Detection Model, Product Catalog DB',
      desc: 'Browser-based checkout prototype that detects multiple items laid on a flat surface using computer vision and calculates totals without barcode scanners or manual entry.',
    },
  ];

  for (const p of projects) {
    checkPageBreak(42);
    page.drawText(p.title, { x: margin, y, size: 9, font: fontBold, color: rgb(0.1, 0.12, 0.18) });
    const statusWidth = fontBold.widthOfTextAtSize(p.status, 8);
    page.drawText(p.status, { x: pageWidth - margin - statusWidth, y, size: 8, font: fontBold, color: rgb(0.35, 0.38, 0.45) });
    y -= 11;

    page.drawText(`Tech: ${p.tech}`, { x: margin, y, size: 8, font: fontOblique, color: rgb(0.3, 0.35, 0.45) });
    y -= 10;

    // Wrap desc
    const pWords = p.desc.split(' ');
    let pLine = '';
    for (const w of pWords) {
      const testLine = pLine ? `${pLine} ${w}` : w;
      if (fontRegular.widthOfTextAtSize(testLine, 8) > contentWidth) {
        page.drawText(pLine, { x: margin, y, size: 8, font: fontRegular, color: rgb(0.25, 0.28, 0.33) });
        y -= 10;
        pLine = w;
      } else {
        pLine = testLine;
      }
    }
    if (pLine) {
      page.drawText(pLine, { x: margin, y, size: 8, font: fontRegular, color: rgb(0.25, 0.28, 0.33) });
      y -= 10;
    }
    y -= 3;
  }

  // 4. HONORS & ACHIEVEMENTS
  drawSectionHeader('Honors & Competitive Achievements');
  const achievements = [
    { badge: '1st Place', title: 'IDEATHON 2024 — Cash Prize: Rs. 10,000', org: 'Women\'s Engineering College', year: '2024' },
    { badge: '2nd Place', title: 'Brain Wave 2024 — Cash Prize: Rs. 3,000', org: 'Inter-College Innovation Challenge', year: '2024' },
    { badge: 'Performer', title: 'Code Fiesta 2024 — Algorithm Speed Run', org: 'Technical Symposium', year: '2024' },
    { badge: 'Scholar', title: 'Academic Excellence Award — B.Tech Year 1 Rank 1', org: 'Academic Directorate', year: '2024' },
  ];

  for (const a of achievements) {
    checkPageBreak(14);
    page.drawText(`[${a.badge}] `, { x: margin, y, size: 8.5, font: fontBold, color: rgb(0.12, 0.14, 0.2) });
    const bWidth = fontBold.widthOfTextAtSize(`[${a.badge}] `, 8.5);
    page.drawText(`${a.title} — ${a.org}`, { x: margin + bWidth, y, size: 8.5, font: fontRegular, color: rgb(0.2, 0.22, 0.28) });
    const yearWidth = fontRegular.widthOfTextAtSize(a.year, 8.5);
    page.drawText(a.year, { x: pageWidth - margin - yearWidth, y, size: 8.5, font: fontRegular, color: rgb(0.45, 0.48, 0.55) });
    y -= 12;
  }
  y -= 2;

  // 5. LEADERSHIP & INVOLVEMENT
  drawSectionHeader('Leadership & Campus Involvement');
  const leadership = [
    { role: 'Student Coordinator', entity: 'Department Technical Club, WEC', period: '2024 - Present' },
    { role: 'Workshop Lead', entity: 'Peer Coding & Problem Solving Cohort', period: '2024' },
    { role: 'Volunteer', entity: 'National Service Scheme (NSS) Community Outreach', period: '2023 - Present' },
  ];

  for (const l of leadership) {
    checkPageBreak(14);
    page.drawText(`${l.role} — ${l.entity}`, { x: margin, y, size: 8.5, font: fontRegular, color: rgb(0.2, 0.22, 0.28) });
    const pWidth = fontRegular.widthOfTextAtSize(l.period, 8.5);
    page.drawText(l.period, { x: pageWidth - margin - pWidth, y, size: 8.5, font: fontRegular, color: rgb(0.45, 0.48, 0.55) });
    y -= 12;
  }
  y -= 2;

  // 6. CERTIFICATIONS & WORKSHOPS
  drawSectionHeader('Certifications & Professional Workshops');
  const certs = [
    { title: 'Machine Learning with Python', issuer: 'Coursera / IBM', date: '2024' },
    { title: 'Full Stack Web Development Bootcamp', issuer: 'Udemy', date: '2024' },
    { title: 'Computer Vision Fundamentals', issuer: 'Great Learning', date: '2024' },
    { title: 'MATLAB & Simulink Onramp for Deep Learning', issuer: 'MathWorks', date: '2024' },
  ];

  for (const c of certs) {
    checkPageBreak(14);
    page.drawText(`${c.title} — ${c.issuer}`, { x: margin, y, size: 8.5, font: fontRegular, color: rgb(0.2, 0.22, 0.28) });
    const dWidth = fontRegular.widthOfTextAtSize(c.date, 8.5);
    page.drawText(c.date, { x: pageWidth - margin - dWidth, y, size: 8.5, font: fontRegular, color: rgb(0.45, 0.48, 0.55) });
    y -= 12;
  }

  // Save document
  const pdfBytes = await doc.save();
  const targetDir = path.resolve('public/resume');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const filePath = path.join(targetDir, 'Jophita_Kristen_S_Resume.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log(`Saved PDF to ${filePath} (${pdfBytes.length} bytes)`);
}

generateResume().catch((err) => {
  console.error('Failed to generate resume PDF:', err);
  process.exit(1);
});
