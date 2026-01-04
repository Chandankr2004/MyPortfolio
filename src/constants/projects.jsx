import React from 'react'
import { SiReact, SiRedux, SiNodedotjs, SiMongodb, SiSocketdotio } from 'react-icons/si'

export const projects = [
  {
    title: 'Real-Time Chat Web Application',
    description: 'A full-featured real-time chat application built with MERN stack, featuring JWT authentication, Socket.io for real-time messaging, and Redux for state management.',
    technologies: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Socket.io', icon: <SiSocketdotio /> },
    ],
    features: [
      'JWT Authentication',
      'Real-time messaging',
      'Redux state management',
      'MERN stack',
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'Movix | Live – Movie Explorer',
    description: 'A modern movie exploration platform built with React and Redux, allowing users to browse trending, popular, and top-rated movies with integrated trailer viewing.',
    technologies: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Redux', icon: <SiRedux /> },
    ],
    features: [
      'Browse trending movies',
      'Popular & top-rated movies',
      'Watch trailers',
      'Responsive design',
    ],
    github: '#',
    demo: '#',
  },
]

