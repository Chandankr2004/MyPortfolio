import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export const socialLinks = [
  {
    name: 'GitHub',
    icon: <FaGithub />,
    link: 'https://github.com/Chandankr2004',
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/chandan6205',
    color: 'hover:text-blue-600 dark:hover:text-blue-400',
  },
  {
    name: 'LeetCode',
    icon: <SiLeetcode />,
    link: 'https://leetcode.com',
    color: 'hover:text-orange-600 dark:hover:text-orange-400',
  },
]

