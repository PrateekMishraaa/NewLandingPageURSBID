import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

// Import all your images here (same as original)
import Iron from "../assets/tmt.jpg";
import Live from "../assets/live.png";
import Nego from "../assets/nego.png";
import Order from "../assets/order.png";
import Building from "../assets/building.jpg";
import Person from "../assets/person.png";
import Bricks from "../assets/bricks.jpg";
import Equipment from "../assets/equipment.jpg";
import Quality from "../assets/quality.jpg";
import Rice from "../assets/rice.jpg";
import Pulses from "../assets/pulses.jpg";
import Cotton from "../assets/cottonyarn-y.jpg";
import Banner from "../assets/banner.jpg";
import App from "../assets/playstore.png";
import Android from "../assets/android.jpg";
import Steel2 from "../assets/steel2.jpg";
import App2 from "../assets/android.jpg";

const LandingPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 100 
      } 
    }
  };

  // Floating animation
  const floatingAnimation = {
    float: {
      y: [0, -10, 0], // Move up and down
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity, // Repeat indefinitely
        repeatType: "loop",
      },
    },
  };

  return (
    <div className="w-full mx-auto">
      <Navbar />

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-gradient-to-br from-blue-50 to-teal-50"
      >
        {/* Hero Section */}
        <motion.div 
          variants={itemVariants}
          className="relative h-[70vh] w-full overflow-hidden"
        >
          <motion.img 
            src={Steel2} 
            alt="Iron" 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover filter brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4 drop-shadow-lg"
            >
              Buy Or Sell in India with Ease
            </motion.h1>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          variants={containerVariants}
          className="container mx-auto px-4 py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Live, title: "Registered Agri Buyers", count: "9,55,235" },
              { icon: Nego, title: "Registered Construction Buyers", count: "23,11,165" },
              { icon: Order, title: "Registered Sellers", count: "80,18,335" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all"
              >
                <div className="flex justify-center mb-4">
                  <img src={stat.icon} alt={stat.title} className="h-12 w-12" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{stat.title}</h3>
                <p className="text-2xl md:text-3xl font-bold text-teal-600">{stat.count}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* About Us Section */}
        <motion.section 
          variants={containerVariants}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16 px-4"
        >
          <div className="container mx-auto">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12"
            >
              About Our Company
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-full lg:w-1/2"
              >
                <img 
                  src={Building} 
                  alt="About Us" 
                  className="rounded-xl shadow-2xl object-cover w-full" 
                />
              </motion.div>
              <div className="w-full lg:w-1/2 text-gray-700">
                <p className="mb-4 text-base md:text-lg leading-relaxed">
                  We are a global leader in facilitating seamless trade between buyers and sellers across various industries. Our mission is to simplify transactions, ensuring safe and secure processes.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Comprehensive Global Marketplace",
                    "Advanced Verification Processes", 
                    "Personalized Customer Support",
                    "Easy and Secure Payment Solutions"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center space-x-3 text-sm md:text-base"
                    >
                      <span className="text-teal-500">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section 
          variants={containerVariants}
          className="bg-gradient-to-br from-cyan-50 to-blue-50 py-16 px-4"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12"
          >
            Our Services
          </motion.h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Bricks, title: "Material Supply", desc: "High-quality construction materials" },
              { icon: Equipment, title: "Equipment Rental", desc: "Latest construction equipment" },
              { icon: Nego, title: "Project Management", desc: "Timely and efficient project delivery" },
              { icon: Building, title: "Architectural Design", desc: "Modern and sustainable designs" },
              { icon: Person, title: "Labor Supply", desc: "Skilled professionals for your projects" },
              { icon: Iron, title: "Waste Management", desc: "Eco-friendly disposal services" }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all"
              >
                <div className="flex justify-center mb-4">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover" 
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Products Section */}
        <motion.section 
          variants={containerVariants}
          className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 px-4"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12"
          >
            Trending Products
          </motion.h2>
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            {[
              { img: Rice, title: "Rice" },
              { img: Iron, title: "TMT Saria" },
              { img: Pulses, title: "Pulses" },
              { img: Cotton, title: "International Logistics / Yarn" },
              { img: Banner, title: "Other Products" }
            ].map((product, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg p-4 text-center transform transition-all"
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-32 md:h-40 lg:h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-2">{product.title}</h3>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-md text-xs md:text-sm hover:bg-indigo-700 transition">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mobile App Section */}
        <motion.section 
          variants={containerVariants}
          className="bg-gradient-to-br from-purple-50 to-pink-50 py-16 px-4"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              variants={itemVariants}
              className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
            >
              <img 
                src={App} 
                alt="Mobile App" 
                className="w-64 md:w-full max-w-md"
              />
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                URSBID is Coming Soon!
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                We're working hard to bring you an amazing experience. Stay tuned for updates!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-base md:text-lg hover:bg-indigo-700 transition"
              >
                Get Notified
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          variants={containerVariants}
          className="bg-gradient-to-br from-teal-50 to-blue-50 py-16 px-4"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12"
          >
            Contact Us
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="container mx-auto max-w-2xl bg-white rounded-xl shadow-lg p-6 md:p-10"
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.section>
      </motion.div>

      <Footer />
    </div>
  );
};

export default LandingPage;