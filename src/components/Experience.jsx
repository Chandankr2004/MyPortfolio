import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { experiences } from '../constants/experience'

const Experience = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-secondary-50/30 to-white dark:from-gray-900 dark:to-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-500 bg-clip-text text-transparent px-2 sm:px-0"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Experience & Internships
          </motion.h2>
          <motion.div 
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, x: 10 }}
              className="glass-effect rounded-2xl shadow-2xl p-8 mb-6 relative pl-12 border-l-4 border-gradient-to-b from-primary-600 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 overflow-hidden group card-hover"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 via-secondary-500 to-primary-600 dark:from-primary-400 dark:via-secondary-400 dark:to-primary-400" />
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 via-secondary-500 to-primary-600 dark:from-primary-400 dark:via-secondary-400 dark:to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.div
                className="absolute left-0 top-8 -translate-x-1/2 z-10"
                whileHover={{ scale: 1.3, rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-6 h-6 bg-gradient-to-br from-primary-600 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg" />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <div className="flex items-start gap-4 mb-4 relative z-10">
                <motion.div 
                  className="p-4 bg-gradient-to-br from-primary-100 via-secondary-100 to-primary-100 dark:from-primary-900/40 dark:via-secondary-900/40 dark:to-primary-900/40 rounded-xl shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                >
                  <FaBriefcase className="text-primary-600 dark:text-primary-400 text-3xl" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <motion.p 
                    className="text-xl bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent font-semibold mb-2"
                    animate={{
                      backgroundPosition: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {exp.company}
                  </motion.p>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <FaCalendarAlt className="text-primary-600 dark:text-primary-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mt-4">
                {exp.responsibilities.map((responsibility, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.1 }}
                    className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-primary-600 dark:text-primary-400 mt-0.5 sm:mt-1">▸</span>
                    <span>{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

