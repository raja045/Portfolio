export const bio = [
  "Hello! I’m Raja,", 
  "I am a passionate cybersecurity enthusiatic and graduate student at Florida International University, pursuing a Master’s in Cyber Security with a perfect GPA of 4.0. Specializied in <b> Penetration Testing, Incident Response, and Threat Detection.</b> As a Certified Expert Penetration Tester (CEPT), I have hands-on experience uncovering vulnerabilities and implementing secure solutions.", 
  "Thanks for visiting!",
];

export const skills = [
  {
    title: "CyberSecurity Skill",
    skillName: "Penetration Testing, Incident Response & Threat Detection, SIEM, Cryptography",
    color: "1",
    percentage: "80",
  },
  {
    title: "Network",
    skillName: "Network security, Network Protocols (TCP, IP, HTTP/s, DNS, DHCP)",
    color: "6",
    percentage: "70",
  },
  {
    title: "Scripting",
    skillName: "Bash, Shell Scripting, Powershell",
    color: "4",
    percentage: "70",
  },
  {
    title: "Programming",
    skillName: "Python, Java, C and C++",
    color: "7",
    percentage: "70",
  },
  {
    title: "WebDevelopment",
    skillName: "HTML, CSS, and JavaScript",
    color: "3",
    percentage: "80",
  },
  {
    title: "Tools",
    skillName: "Splunk/Wazuh, Burpsuite, Nmap, Nessus, ",
    color: "5",
    percentage: "50",
  },
  {
    title: "Operating System",
    skillName: "MacOS, Windows, Linux(Ubuntu, Kali, Parrot), FreeBSD",
    color: "6",
    percentage: "70",
  },
];

export const projects = {
  webProjects: [
    {
      projectName: "HomeLab-Security-Operations-Center",
      image: "images/soc2_processed.png",
      summary:
        "Developed a comprehensive Security Operations Center (SOC) simulation to enhance Blue Team operations. Focused on collecting and analyzing the logs.",
      preview: "https://github.com/raja045/HomeLab-Security-Operations-Center?tab=readme-ov-file",
      techStack: ["Network and Configuration", "Firewall", "VPN", "Virtual Machines", "Wazuh"],
    },
    {
      projectName: "Web Application Penetration Project",
      image: "images/owasp.png",
      summary:
        "This project contains a comprehensive penetration testing and security assessment report for the 'Online Book Catalog' web application, identifying vulnerabilities and providing remediation strategies.",
      preview: "https://github.com/raja045/WebApplicationPenetrationProject",
      techStack: ["Burpsuite", "Nmap", "OWASP Top 10", "Documentation"],
    },
    {
      projectName: "Cloud Security with AWS Identity and Access Management",
      image: "images/images.jpeg",
      summary:
        "In this project, I implemented robust Identity and Access Management (IAM) policies, ensuring secure role-based access control (RBAC), and enforcing least privilege principles to protect cloud resources and enhance compliance.",
      preview: "https://github.com/raja045/Cloud_Security_with_IAM",
      techStack: ["AWS EC2", "AWS IAM"],
    },
    {
      projectName: "Build Your Own VPN Server",
      image: "images/openvpnlogoprocessed.jpg",
      summary:
        "In this project, I tried creating my own VPN server using the existing Amazon Image.",
      preview: "https://github.com/raja045/Network-Related-Projects/tree/main/Create_An_Own_VPN_Server",
      techStack: ["AWS EC2", "OpenVPN", "VPN Server Configuration"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Pizza Ordering ChatBot",
      image: "images/pizzaorderchatbot.png",
      summary:
        "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
      preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["Dailogflow", "Firebase"],
    },
    {
      projectName: "WhatsApp-Bot",
      image: "images/whatsappbot.jpg",
      summary:
        "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
      preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
      techStack: ["Selenium", "Chrome Webdriver", "Python"],
    },
    {
      projectName: "Bill Generator",
      image: "images/billgenerator.png",
      summary:
        "GUI to transfer data to excel sheets and generate bills on the local shops.",
      preview: "https://github.com/vinaysomawat/Bill-Generator",
      techStack: ["Tkinter", "Openxlpy", "Python"],
    },
  ],
  androidProjects: [
    {
      projectName: "Email Spam Detection",
      image: "images/EmailSpam.jpg",
      summary:
        "This project demonstrates the effective use of logistic regression combined with feature engineering and NTLK to build a high-accuracy email spam detection system.",
      preview: "https://github.com/raja045/Email-Spam-Detection-Using-Logistic-Regression",
      techStack: ["Logistic Regression", "SciKit-Learn", "NTLK", "Feature Engineering"],
    },
    {
      projectName: "Intrusion Detection System",
      image: "images/intrusion.jpg",
      summary:
        "Developed an Intrusion Detection System using Logistic Regression to classify network threats with machine learning.",
      preview: "https://github.com/raja045/Machine-Learning/tree/main/IDS_Using_LogisticRegression",
      techStack: ["Logistic Regression", "SciKit-Learn", "Seaborn"],
    },
    {
      projectName: "Binary Classification Cat or Dog",
      image: "images/binaryclassification.png",
      summary:
        "This project demonstrates the effective use of logistic regression combined with feature engineering and NTLK to build a high-accuracy email spam detection system.",
      preview: "https://github.com/raja045/Machine-Learning/blob/main/3_BinaryImageClassification.ipynb",
      techStack: ["Binary Classification", "Tensorflow", "keras", "CNN"],
    },
    {
      projectName: "Decision Tree Implementation on Cancer",
      image: "images/nitwcse.jpg",
      summary:
        "This project demonstrates the effective use of logistic regression combined with feature engineering and NTLK to build a high-accuracy email spam detection system.",
      preview: "https://github.com/raja045/Machine-Learning/blob/main/3_BinaryImageClassification.ipynb",
      techStack: ["Decision Tree Classifier"],
    },
  ],
  freelanceProjects: [
    
  ],
};

export const experience = [
  {
    title: "School of Engineering - Florida International University",
    duration: "August 2024 - Present",
    subtitle: "Graduate Student Assistant - Introduction to cloud computing",
    details: [
      `Evaluated cloud computing assignments, ensuring accurate assessment and deeper understanding.`,
      `Provided constructive feedback, improving student performance and comprehension.`,
       ],
    tags: ["Cloud Computing", "AWS", "Azure"],
    icon: "truck ",
  },
  {
    title: "Cyber Security and Privacy Lab - FIU",
    duration: "January 2024 - August 2024",
    subtitle: "Graduate Research Assistant",
    details: [
      `Designed and constructed a custom dataset of 10,000 entries using Python and Scrapy.`,
      `Orchestrated data labelling and implemented machine learning models, including decision trees, random forests, and logistic regression, improving accuracy by 18% with Scikit-learn.`,
    ],
    tags: [
      "Python",
      "Machine Learning Algorithms",
      "Logistic regression",
      "Decision Trees",
      "Classification",
      "Scikit-Learn",
    ],
    icon: "heartbeat",
  },
  {
    title: "Freelancer - Bugcrowd, Hackerone",
    duration: "July 2023 - January 2024",
    subtitle: "White-hat Security Researcher ",
    details: [
      `Conducted comprehensive security assessments and penetration testing on web applications and APIs.`,
      `Identified, exploited, and responsibly disclosed security vulnerabilities, adhering to ethical guidelines.`,
      `Collaborated with developers to remediate vulnerabilities and enhance overall application security.`,
      `Achieved 70 percent code coverage of the entire application by writing unit tests for legacy code.`,
    ],
    tags: ["WAPT", "OWASP TOP 10", "Vulnerability Assessment", "Burpsuite"],
    icon: "qrcode",
  },
  {
    title: "Lovely Professional Univesity",
    duration: "January 2023 - July 2023",
    subtitle: "UnderGraduate Academic Researcher",
    details: [
      `Conducted a thorough review of privacy challenges in the digital age, exploring various tools like anonymous remailers, browser extensions, and TOR for maintaining online anonymity.`,
      `Analyzed the effectiveness of anonymity technologies, comparing their security, ease of use, and latency to determine the best solutions for different online activities`,
      `Achieved a comprehensive understanding of anonymity strategies, concluding that technologies like TOR and I2P offer robust solutions for securing user privacy, with room for future improvements in ease of use and accessibility.`,
    ],
    tags: ["TOR", "Internet Security", "Documentation", "Microsoft Office Tools",],
    icon: "group",
  },
  {
    title: "Verzeo",
    duration: "January 2023 - July 2023",
    subtitle: "Cyber Security Intern",
    details: [
      `Participated in the Product Security Incident Response Team (PSIRT), supporting software developers and security architects in daily product security tasks.`,
      `Assisted with the integration of security tools into centralized security management systems, improving response times to security incidents.`,
      `Executed pre-triaging of security submissions, evaluating reports for completeness and accuracy.`,
      `Conducted periodic access control inventories and assessments, contributing to overall security posture improvement.`,
    ],
    tags: ["TOR", "Internet Security", "Documentation", "Microsoft Office Tools",],
    icon: "group",
  },
];

export const education = [
  {
    title: "Masters of Science in Cyber Security",
    duration: "January 2024 - December 2025",
    subtitle: "Florida International University, Miami,Florida.",
    details: [],
    tags: ["Principles of Cyber Security", "Cyber Security Attacks and Defenses", "Software Security"],
    icon: "book",
  },
  {
    title: "Bachelors Of Technology in Computer Science",
    duration: "2019 - 2023",
    subtitle: "Lovely Professional University, Punjab,India.",
    details: [],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
      {
        text: "GitHub",
        link: "https://github.com/raja045",
      },
      {
        text: "LinkedIN",
        link: "https://www.linkedin.com/in/raja045/",
      },
      {
        text: "TryHackMe",
        link: "https://tryhackme.com/r/p/Raja.shekar",
      },
    ],
  },
  {
    label: "Resources",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableDarkMode()",
      },
      {
        text: "Print this page",
        func: "window.print()",
      },
  
    ],
  },
  // {
  //   label: "Links",
  //   data: [
  //     {
  //       text: "Linkedin",
  //       link: "https://www.linkedin.com/in/raja045/",
  //     },

  //     {
  //       text: "Github/raja045.github.io",
  //       link: "https://github.com/raja045",
  //     },
  //   ],
  // },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Raja.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];
