import * as motion from "motion/react-client"

export default function AboutPage() {
  
  const MotionDiv = motion.div;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Add some content before the about section to demonstrate scroll trigger */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Welcome</h1>
          <p className="text-xl opacity-75">Scroll down to see the about section animate in</p>
          <div className="mt-8 animate-bounce">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* About section with viewport-triggered animations */}
      <div className="flex items-center justify-center p-8 min-h-screen">
        <motion.section
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            scale: { type: "spring", visualDuration: 0.6, bounce: 0.3 },
          }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="md:flex">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👋</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Hello There!</h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="md:w-2/3 p-8"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-4xl font-bold text-gray-800 mb-6"
              >
                About Us
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="space-y-4 text-gray-600"
              >
                <p className="text-lg leading-relaxed">
                  We are a passionate team dedicated to creating amazing digital experiences. Our journey started with a
                  simple idea: to make technology more accessible and enjoyable for everyone.
                </p>

                <p className="leading-relaxed">
                  With years of experience in design and development, we bring creativity and technical expertise
                  together to solve complex problems and deliver exceptional results for our clients.
                </p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="flex flex-wrap gap-3 mt-6"
                >
                  {["Innovation", "Quality", "Collaboration", "Excellence"].map((value, index) => (
                    <motion.span
                      key={value}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
                      className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {value}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
