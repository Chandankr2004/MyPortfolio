import React from 'react'
import {
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaTools,
} from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiVercel, SiRender } from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'

export const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FaCode className="text-2xl" />,
    skills: [
      { name: 'C++', icon: <TbBrandCpp /> },
      { name: 'Java', icon: <FaCode /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'OOPs', icon: <FaCode /> },
    ],
  },
  {
    title: 'Frontend',
    icon: <FaHtml5 className="text-2xl" />,
    skills: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    title: 'Backend',
    icon: <FaNodeJs className="text-2xl" />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
    ],
  },
  {
    title: 'Database',
    icon: <FaDatabase className="text-2xl" />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'SQL', icon: <FaDatabase /> },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: <FaTools className="text-2xl" />,
    skills: [
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'VS Code', icon: <FaCode /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Render', icon: <SiRender /> },
    ],
  },
]

