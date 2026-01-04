import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../constants/projects.jsx'

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-white to-primary-50/30 dark:from-gray-900 dark:to-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-effect rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover relative"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-bl from-primary-300/20 to-secondary-300/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-5 sm:p-6 md:p-8 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 uppercase tracking-wide">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-primary-600 dark:text-primary-400">
                          {tech.icon}
                        </span>
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-primary-600 dark:text-primary-400">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="h-1.5 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

