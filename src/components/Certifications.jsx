import { motion } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'
import { certifications } from '../constants/certifications'

const Certifications = () => {

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-white to-secondary-50/30 dark:from-gray-900 dark:to-gray-800/50">
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
            Certifications
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -10, rotateY: 5 }}
              className="glass-effect rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden block card-hover"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-300/30 to-secondary-300/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="flex items-center justify-between mb-4 relative z-10">
                <motion.div 
                  className="p-4 bg-gradient-to-br from-primary-100 via-secondary-100 to-primary-100 dark:from-primary-900/40 dark:via-secondary-900/40 dark:to-primary-900/40 rounded-xl shadow-lg group-hover:from-primary-200 group-hover:via-secondary-200 group-hover:to-primary-200 dark:group-hover:from-primary-900/60 dark:group-hover:via-secondary-900/60 dark:group-hover:to-primary-900/60 transition-all duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <FaCertificate className="text-primary-600 dark:text-primary-400 text-3xl" />
                </motion.div>
                <div className="text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  <FaExternalLinkAlt size={16} />
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 relative z-10">
                {cert.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium mb-1">
                {cert.issuer}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                {cert.year}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications

