import { motion } from 'framer-motion'
import { FaGraduationCap, FaUniversity } from 'react-icons/fa'
import { education } from '../constants/education'

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-primary-50/50 to-white dark:from-gray-900 dark:to-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            About Me
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
          <motion.div
            variants={itemVariants}
            className="glass-effect rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 relative overflow-hidden group card-hover"
          >
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-primary-300/40 to-secondary-300/40 dark:from-primary-800/30 dark:to-secondary-800/30 rounded-full blur-3xl -translate-y-16 sm:-translate-y-20 translate-x-16 sm:translate-x-20 group-hover:scale-150 transition-transform duration-700"
            />
            <motion.div
              className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-secondary-300/30 to-primary-300/30 dark:from-secondary-800/20 dark:to-primary-800/20 rounded-full blur-2xl translate-y-12 sm:translate-y-16 -translate-x-12 sm:-translate-x-16 group-hover:scale-150 transition-transform duration-700"
            />
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6 relative z-10">
              <motion.div 
                className="p-4 sm:p-5 bg-gradient-to-br from-primary-100 via-secondary-100 to-primary-100 dark:from-primary-900/40 dark:via-secondary-900/40 dark:to-primary-900/40 rounded-xl shadow-lg"
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.6 }}
              >
                <FaGraduationCap className="text-primary-600 dark:text-primary-400 text-3xl sm:text-4xl" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {education.degree}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-gray-600 dark:text-gray-400 mb-2">
                  <FaUniversity className="text-primary-600 dark:text-primary-400" />
                  <p className="text-base sm:text-lg">{education.institution}</p>
                </div>
                <motion.p 
                  className="text-lg font-semibold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  CGPA: {education.cgpa}
                </motion.p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-effect rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8 relative overflow-hidden group card-hover"
          >
            <motion.div
              className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-tr from-secondary-300/40 to-primary-300/40 dark:from-secondary-800/30 dark:to-primary-800/30 rounded-full blur-3xl translate-y-16 sm:translate-y-24 -translate-x-16 sm:-translate-x-24 group-hover:scale-150 transition-transform duration-700"
            />
            <motion.div
              className="absolute top-0 right-0 w-24 h-24 sm:w-36 sm:h-36 bg-gradient-to-bl from-primary-300/30 to-secondary-300/30 dark:from-primary-800/20 dark:to-secondary-800/20 rounded-full blur-2xl -translate-y-12 sm:-translate-y-18 translate-x-12 sm:translate-x-18 group-hover:scale-150 transition-transform duration-700"
            />
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text relative z-10">
              Passion & Focus
            </h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {education.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

