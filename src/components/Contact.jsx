import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { personalInfo } from '../constants/personalInfo'
import { socialLinks } from '../constants/socialLinks.jsx'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: personalInfo.location,
      link: null,
    },
  ]

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
    <section id="contact" className="section-padding bg-gradient-to-b from-primary-50/30 to-white dark:from-gray-900 dark:to-gray-800/50">
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
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full mb-3 sm:mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2 sm:px-0">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -8, rotateY: 5 }}
                className="glass-effect rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group card-hover"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-300/30 to-secondary-300/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="flex items-center gap-4 relative z-10">
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-primary-100 via-secondary-100 to-primary-100 dark:from-primary-900/40 dark:via-secondary-900/40 dark:to-primary-900/40 rounded-xl shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-primary-600 dark:text-primary-400 text-3xl">
                      {info.icon}
                    </div>
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {info.label}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
              Connect With Me
            </h3>
            <div className="flex justify-center gap-4 sm:gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, y: -10, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 relative overflow-hidden group`}
                  aria-label={social.name}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="text-xl sm:text-2xl relative z-10">{social.icon}</div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Chandan Kumar. Built with React & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

