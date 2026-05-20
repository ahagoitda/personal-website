/**
 * 박준서 이력서 데이터
 * XSS 방지: 모든 텍스트는 React에서 자동 이스케이프됨
 */

export const PERSONAL_INFO = {
  name: "박준서",
  nameEn: "BAK JUN SEO",
  title: "AI Engineering Student",
  university: "서울과학기술대학교",
  major: "인공지능응용학과",
  year: "26학번",
  highSchool: "신성고등학교",
  email: "junseobag796@gmail.com",
  github: "https://github.com/ahagoitda",
  location: "Seoul, South Korea",
  bio: "인공지능의 가능성을 탐구하고, 기술로 세상의 문제를 해결하고자 하는 서울과학기술대학교 인공지능응용학과 학생입니다. 데이터와 알고리즘 너머에 있는 사람의 이야기에 관심을 두고 있습니다.",
} as const;

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  tag?: string;
}

export const TIMELINE: TimelineItem[] = [
  {
    year: "2026",
    title: "서울과학기술대학교 입학",
    description: "인공지능응용학과 26학번으로 입학. AI 기초 이론과 프로그래밍 역량을 쌓으며 다양한 프로젝트에 참여 중.",
    tag: "현재",
  },
  {
    year: "2026",
    title: "신성고등학교 졸업",
    description: "3년간의 고등학교 생활을 마무리하고, 인공지능 분야로의 진로를 확정.",
    tag: "졸업",
  },
  {
    year: "2023–2024",
    title: "프로그래밍 & AI 탐구",
    description: "Python, 머신러닝 기초를 독학하며 개인 프로젝트를 진행. 교내 SW 관련 활동에 적극 참여.",
  },
  {
    year: "2022",
    title: "신성고등학교 입학",
    description: "고등학교에 입학하며 본격적으로 컴퓨터 과학과 인공지능에 대한 관심을 키워나감.",
  },
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C/C++"],
  },
  {
    category: "AI / ML",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy"],
  },
  {
    category: "Web",
    skills: ["React", "Next.js", "HTML/CSS", "Node.js"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Linux", "VS Code"],
  },
];

export const INTERESTS = [
  "딥러닝 & 신경망 아키텍처",
  "자연어 처리 (NLP)",
  "컴퓨터 비전",
  "데이터 엔지니어링",
  "오픈소스 기여",
] as const;
