import { motion } from 'framer-motion'
import { skillCategories } from '../constants/skills.jsx'

const Skills = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="section-padding bg-gradient-to-b from-primary-50/30 to-white dark:from-gray-900 dark:to-gray-800/50">
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
            Skills
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -8, rotateY: 5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-xl sm:text-2xl"
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-50 dark:from-primary-900/30 dark:via-secondary-900/30 dark:to-primary-900/30 rounded-lg sm:rounded-xl text-gray-700 dark:text-gray-300 relative z-10 border-2 border-primary-200/60 dark:border-primary-800/60 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg transition-all duration-300 font-medium text-sm sm:text-base"
                  >
                    <motion.span 
                      className="text-primary-600 dark:text-primary-400"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.span>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

