// Edit this file to update your site content. Change the text between the
// quotes, and add/remove list items as needed.

export const profile = {
  name: 'Sudhir Jain',
  title: 'Product Manager · Builder · MIT',
  tagline:
    'I build technical products that turn hard engineering into things people actually use — from cloud data platforms at Google to AI-powered hardware I shipped as a founder.',
  location: 'Bengaluru, India',
  email: 'sudhirjain@alum.mit.edu',
  portrait: '/images/portrait.jpg',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jain-sudhir' },
    { label: 'GitHub', url: 'https://github.com/sudhir0112' },
    { label: 'Email', url: 'mailto:sudhirjain@alum.mit.edu' },
  ],
};

export const about = `
I'm a product manager who likes living where the hard technical problems
are. Today I work on Google Cloud, building the data migration and data
protection capabilities behind Google Cloud NetApp Volumes. Before that I
owned the next-generation roadmap for Amazon FSx for Lustre at AWS — a
high-performance file system used for ML training, EDA, and visual effects.

The thread running through everything I do is building from zero. I
co-founded Guard-Ex, where we created an AI device to detect drug
impairment from the eyes, and Smart Being, an automated vertical-farming
system that grows food with 70-90% less water. Along the way I did a deep
dive into computer vision and machine learning, shipped hardware prototypes,
and earned my master's at MIT — where my thesis used deep learning to make
sense of 3D damage inside aerospace composites.

I care about the same things whether I'm writing a PRD or soldering a board:
real user problems, honest engineering, and shipping something that works.
`;

export const experience = [
  {
    role: 'Product Manager — Google Cloud NetApp Volumes',
    company: 'Google',
    period: '2024 — Present',
    location: 'Bengaluru, India',
    points: [
      'Lead product strategy for the Data Migration portfolio — a key driver of the service — delivering features that unblock large-scale enterprise data migrations.',
      'Own the Data Protection roadmap, launching native backup capabilities that meaningfully grew revenue and adoption.',
    ],
  },
  {
    role: 'Senior Product Manager, Technical — Amazon FSx for Lustre',
    company: 'Amazon Web Services',
    period: '2022 — 2024',
    location: 'Boston, MA',
    points: [
      'Led strategy and roadmap for the next generation of Amazon FSx for Lustre, a fully managed file system for HPC workloads like ML training, EDA, and VFX rendering.',
      'Defined pricing models, ran weekly business reviews, and partnered closely with customers, sales, and solutions architects to shape the roadmap.',
    ],
  },
  {
    role: 'Co-Founder & CTO',
    company: 'Guard-Ex',
    period: '2017 — 2021',
    location: 'Waterloo, Canada',
    points: [
      'Built a non-invasive device to detect drug impairment by analyzing abnormal eye behavior with machine learning, reaching 70% accuracy.',
      'Led a team of researchers and engineers across ML algorithms, electronics, and hardware prototypes; ran a police pilot in Waterloo.',
    ],
  },
  {
    role: 'Founder & Chief Product Officer',
    company: 'Smart Being',
    period: '2018 — 2019',
    location: 'Bhopal, India',
    points: [
      'Built fully automated vertical-farming systems that cut water use 70-90% and shortened crop cycles ~30% versus conventional farming.',
      'Secured an Indian government grant and incubation under the Smart City mission; featured on Rajya Sabha TV.',
    ],
  },
  {
    role: 'Technical Analyst',
    company: 'Axtria',
    period: '2016 — 2017',
    location: 'Gurgaon, India',
    points: [
      'Built BI and ETL solutions giving pharma companies sales insights across US regions for better resource allocation.',
      'Introduced automated testing that improved testing efficiency by 80%.',
    ],
  },
];

export const projects = [
  {
    name: 'Guard-Ex — Universal Impairment Screening',
    role: 'Co-Founder & CTO',
    description:
      'An AI device that detects drug impairment from the eyes. I built the computer-vision pipeline for pupil tracking and nystagmus detection, used Fourier analysis to quantify abnormality, and developed the GX-420 prototype piloted with Waterloo police.',
    tech: ['Computer Vision', 'OpenCV', 'Raspberry Pi', 'Hardware'],
    image: '/images/projects/guard-ex.jpg',
    url: '',
  },
  {
    name: 'Smart Being — Feeding the Future',
    role: 'Founder & CPO',
    description:
      'Fully automated indoor vertical farming. Sensor-driven nutrient delivery and IoT monitoring grew fruits and vegetables year-round with 70-90% less water. Government-funded and featured on Rajya Sabha TV.',
    tech: ['IoT', 'Sensors', 'Analytics', 'Product'],
    image: '/images/projects/smart-being.jpg',
    url: '',
  },
  {
    name: 'Deep-Learning Segmentation of Aerospace Composites',
    role: 'MIT Master’s Thesis · NECSTLAB',
    description:
      'A CNN (U-Net/VGG) pipeline for multiclass 3D segmentation of microscale damage in advanced composites from X-ray CT scans — cutting manual segmentation from ~10 hours to ~2 minutes. Advised by Prof. Brian Wardle and Prof. Nicholas Roy.',
    tech: ['Deep Learning', 'CNN / U-Net', 'PyTorch', '3D Imaging'],
    image: '/images/projects/composites.png',
    url: 'https://dspace.mit.edu/entities/publication/d27ea58f-621c-4bc4-8c4e-9950d3bce8ac',
  },
  {
    name: 'Domi — Meditation Habit Hardware',
    role: 'Product Lead · MIT Sandbox',
    description:
      'An MIT Sandbox–funded hardware startup building a wearable to help form a meditation habit. Led product across the PCB, embedded firmware, enclosure design, and companion iOS app.',
    tech: ['Embedded', 'PCB', 'iOS', 'Product'],
    image: '/images/projects/domi.jpg',
    url: '',
  },
  {
    name: 'FridgEye — What’s Inside Your Fridge',
    role: 'CTO · MIT Deep Tech Bootcamp',
    description:
      'A smart two-camera device that recognizes food items inside your fridge and suggests recipes. Built the prototype end to end: capture, on-device CV + Google Vision, IoT upload, and a web dashboard. Pitched to investors.',
    tech: ['Computer Vision', 'IoT', 'Cloud', 'Hardware'],
    image: '/images/projects/fridgeye.jpg',
    url: '',
  },
  {
    name: 'Alteria Lasers — Print Readability Detection',
    role: 'Product Developer & CV Engineer',
    description:
      'An edge device that scores the readability of laser-printed text in real time and alarms when print quality drops. Built on BeagleBone Black with a custom Yocto OS and a per-character ML quality model.',
    tech: ['Computer Vision', 'Machine Learning', 'Yocto', 'Embedded'],
    image: '/images/projects/alteria.jpg',
    url: '',
  },
  {
    name: 'Melanoma Detection',
    role: 'Computer Vision Engineer',
    description:
      'Early-stage skin-cancer screening using classic CV feature extraction and a KNN classifier over thousands of lesion images, returning a calibrated confidence score — aimed at places without easy access to specialists.',
    tech: ['OpenCV', 'KNN', 'Machine Learning'],
    image: '/images/projects/melanoma.jpg',
    url: 'https://github.com/sudhir0112/Melanoma-Detection',
  },
  {
    name: 'TMA — Today’s Menu App',
    role: 'Computer Vision Engineer',
    description:
      'Turns a photo of a handwritten restaurant menu board into a structured digital menu via image preprocessing, region-of-interest extraction, and OCR (with Google Vision / Azure fallback).',
    tech: ['Computer Vision', 'OCR', 'Image Processing'],
    image: '/images/projects/tma.jpg',
    url: '',
  },
  {
    name: 'Adaptive Traffic Surveillance System',
    role: 'Project Lead',
    description:
      'A prototype that computes aerial vehicle density from camera feeds and dynamically reallocates traffic-light timing via Arduino — also detecting zebra-crossing violations, license plates, and helmets.',
    tech: ['Computer Vision', 'BeagleBone', 'Arduino'],
    image: '/images/projects/traffic.jpg',
    url: '',
  },
  {
    name: 'Mantis — Emotion-Aware Assistant',
    role: 'Creator',
    description:
      'A virtual assistant that recognizes user emotion from facial expression and responds accordingly — combining a CNN emotion model with a conversational front end.',
    tech: ['Deep Learning', 'Computer Vision', 'Python'],
    image: '',
    url: 'https://github.com/sudhir0112/Mantis',
  },
];

export const education = [
  {
    degree: 'M.S., Integrated Design & Management (Engineering + Management)',
    school: 'Massachusetts Institute of Technology',
    period: '2020 — 2022',
    detail:
      'School of Engineering & MIT Sloan. Thesis: "Multiclass 3D Segmentation of Progressive Damage in Advanced Composites using Deep Learning" (NECSTLAB). Also completed the MIT Deep Technology Bootcamp (2019).',
  },
  {
    degree: 'B.Tech, Electronics & Communication Engineering',
    school: 'Maulana Azad National Institute of Technology (MANIT), Bhopal',
    period: '2012 — 2016',
    detail:
      'Built an automated computer-vision traffic-surveillance system as a capstone effort.',
  },
];

export const skills = [
  'Product Strategy',
  'Roadmapping & Prioritization',
  'Pricing Strategy',
  'System Design & Architecture',
  'Machine Learning',
  'Computer Vision',
  'IoT & Embedded',
  'Data Analytics',
  'Human-Centered Design',
  'Rapid Prototyping',
  'Generative AI',
  'Cross-Team Collaboration',
];

export const certifications = [
  'Deep Learning Specialization (Coursera)',
  'Intro to Machine Learning (Google)',
  'Computer Vision Foundations',
  'IoT & Embedded Systems (UCI)',
  'Data Science (DataCamp)',
  'Business Negotiation: The MIT Approach',
  'Product Design — The TU Delft Approach',
];
