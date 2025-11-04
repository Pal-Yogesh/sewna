// "use client";
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Sparkles, Users, Scissors, Heart, Star } from 'lucide-react';

// export default function SewnaHomepage() {
//   const [activeTab, setActiveTab] = useState('client');

//   // Fashion images for grid
//   const fashionImages = [
//     'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop',
//     'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop',
//     'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop',
//     'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=400&fit=crop',
//     'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&h=400&fit=crop',
//     'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=400&fit=crop',
//   ];

//   return (
//     <div className="h-[120vh] w-screen  bg-black flex flex-col md:flex-row">
//       {/* Left Side - Image Grid */}
//       <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
//         {/* Overlay gradient */}
//         <div className="absolute inset-0  from-black/60 via-black/40 to-transparent z-10" />
        
//         {/* Animated grid */}
//         <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-4">
//           {fashionImages.map((img, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
//               animate={{ 
//                 opacity: 1, 
//                 scale: 1, 
//                 rotate: 0,
//               }}
//               transition={{
//                 delay: index * 0.1,
//                 duration: 0.6,
//                 type: "spring"
//               }}
//               whileHover={{ 
//                 scale: 1.05,
//                 zIndex: 20,
//                 transition: { duration: 0.2 }
//               }}
//               className="relative overflow-hidden rounded-2xl group cursor-pointer"
//             >
//               {/* Image */}
//               <img
//                 src={img}
//                 alt={`Fashion ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
              
//               {/* Hover overlay */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileHover={{ opacity: 1 }}
//                 className="absolute inset-0 bg-[#00b67f]/80 flex items-center justify-center"
//               >
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   whileHover={{ scale: 1 }}
//                   transition={{ delay: 0.1 }}
//                 >
//                   <Heart className="w-8 h-8 text-white" />
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Floating badge on grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="absolute bottom-8 left-8 z-20 px-6 py-3 bg-black/80 backdrop-blur-md rounded-full border border-[#00b67f]/50 flex items-center gap-3"
//         >
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//           >
//             <Sparkles className="w-5 h-5 text-[#00b67f]" />
//           </motion.div>
//           <div>
//             <div className="text-white font-bold text-sm">50K+ Outfits Created</div>
//             <div className="text-gray-400 text-xs">By our talented designers</div>
//           </div>
//         </motion.div>

//         {/* Decorative elements */}
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.6, 0.3],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00b67f] rounded-full blur-3xl opacity-30 pointer-events-none z-0"
//         />
//       </div>

//       {/* Right Side - Content */}
//       <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 md:p-16">
//         {/* Background decoration */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <motion.div
//             animate={{
//               rotate: 360,
//             }}
//             transition={{
//               duration: 30,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//             className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 border border-[#00b67f]/10 rounded-full"
//           />
//           <motion.div
//             animate={{
//               rotate: -360,
//             }}
//             transition={{
//               duration: 40,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//             className="absolute -right-48 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#00b67f]/5 rounded-full"
//           />
//         </div>

//         <div className="relative z-10 max-w-xl">
//           {/* Tab switcher */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="inline-flex p-1 bg-white/5 rounded-full border border-white/10 mb-8"
//           >
//             <button
//               onClick={() => setActiveTab('client')}
//               className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all ${
//                 activeTab === 'client' ? 'text-black' : 'text-white'
//               }`}
//             >
//               {activeTab === 'client' && (
//                 <motion.div
//                   layoutId="activeTab"
//                   className="absolute  inset-0  bg-[#00b67f] rounded-full"
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 />
//               )}
//               <span className="relative z-50 flex items-center gap-2 ">
//                 <Users className="w-4 h-4" />
//                 For Clients
//               </span>
//             </button>
//             <button
//               onClick={() => setActiveTab('designer')}
//               className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all ${
//                 activeTab === 'designer' ? 'text-black' : 'text-white'
//               }`}
//             >
//               {activeTab === 'designer' && (
//                 <motion.div
//                   layoutId="activeTab"
//                   className="absolute inset-0 bg-[#00b67f] rounded-full"
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 />
//               )}
//               <span className="relative z-10 flex items-center gap-2">
//                 <Scissors className="w-4 h-4" />
//                 For Designers
//               </span>
//             </button>
//           </motion.div>

//           {/* Content based on active tab */}
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             {activeTab === 'client' ? (
//               <>
//                 {/* Client Content */}
//                 <motion.h1
//                   className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
//                 >
//                   Find Your Perfect
//                   <br />
//                   <span className="relative inline-block">
//                     <span className="text-[#00b67f]">Designer</span>
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{ width: "100%" }}
//                       transition={{ delay: 0.5, duration: 0.8 }}
//                       className="absolute -bottom-2 left-0 h-2 bg-[#00b67f]/30 rounded-full"
//                     />
//                   </span>
//                 </motion.h1>

//                 <p className="text-lg text-gray-400 mb-8 leading-relaxed">
//                   Connect with talented designers who bring your fashion dreams to life. Custom outfits, perfectly tailored to your unique style and vision.
//                 </p>

//                 {/* Features */}
//                 <div className="space-y-4 mb-10">
//                   {[
//                     { icon: <Users className="w-5 h-5" />, text: "500+ Expert Designers" },
//                     { icon: <Scissors className="w-5 h-5" />, text: "Custom Tailored Outfits" },
//                     { icon: <Star className="w-5 h-5" />, text: "10K+ Happy Clients" }
//                   ].map((feature, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.3 + i * 0.1 }}
//                       className="flex items-center gap-3 text-white"
//                     >
//                       <div className="w-10 h-10 bg-[#00b67f]/20 rounded-lg flex items-center justify-center text-[#00b67f]">
//                         {feature.icon}
//                       </div>
//                       <span className="font-medium">{feature.text}</span>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* CTA */}
//                 <motion.button
//                   whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 182, 127, 0.6)" }}
//                   whileTap={{ scale: 0.95 }}
//                   className="group w-full md:w-auto px-10 py-5 bg-[#00b67f] text-black rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-[#00b67f]/50"
//                 >
//                   Start Your Journey
//                   <motion.div
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <ArrowRight className="w-6 h-6" />
//                   </motion.div>
//                 </motion.button>
//               </>
//             ) : (
//               <>
//                 {/* Designer Content */}
//                 <motion.h1
//                   className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
//                 >
//                   Showcase Your
//                   <br />
//                   <span className="relative inline-block">
//                     <span className="text-[#00b67f]">Talent</span>
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{ width: "100%" }}
//                       transition={{ delay: 0.5, duration: 0.8 }}
//                       className="absolute -bottom-2 left-0 h-2 bg-[#00b67f]/30 rounded-full"
//                     />
//                   </span>
//                 </motion.h1>

//                 <p className="text-lg text-gray-400 mb-8 leading-relaxed">
//                   Join our platform to connect with clients seeking custom designs. Build your portfolio, grow your business, and turn your creativity into income.
//                 </p>

//                 {/* Features */}
//                 <div className="space-y-4 mb-10">
//                   {[
//                     { icon: <Users className="w-5 h-5" />, text: "10K+ Active Clients" },
//                     { icon: <Heart className="w-5 h-5" />, text: "Build Your Portfolio" },
//                     { icon: <Star className="w-5 h-5" />, text: "₹2Cr+ Designer Earnings" }
//                   ].map((feature, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.3 + i * 0.1 }}
//                       className="flex items-center gap-3 text-white"
//                     >
//                       <div className="w-10 h-10 bg-[#00b67f]/20 rounded-lg flex items-center justify-center text-[#00b67f]">
//                         {feature.icon}
//                       </div>
//                       <span className="font-medium">{feature.text}</span>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* CTA */}
//                 <motion.button
//                   whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 182, 127, 0.6)" }}
//                   whileTap={{ scale: 0.95 }}
//                   className="group w-full md:w-auto px-10 py-5 bg-[#00b67f] text-black rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-[#00b67f]/50"
//                 >
//                   Join as Designer
//                   <motion.div
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <ArrowRight className="w-6 h-6" />
//                   </motion.div>
//                 </motion.button>
//               </>
//             )}
//           </motion.div>

//           {/* Trust indicators */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10"
//           >
//             <div className="flex -space-x-3">
//               {[1, 2, 3, 4].map((i) => (
//                 <div
//                   key={i}
//                   className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00b67f] to-[#00b67f]/50 border-2 border-black"
//                 />
//               ))}
//             </div>
//             <div>
//               <div className="text-white font-bold">Trusted by 10,000+</div>
//               <div className="text-gray-500 text-sm">Fashion enthusiasts</div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Palette, Check, Star, TrendingUp, Award, Zap } from 'lucide-react';

export default function SewnaHomepage() {
  const [activeTab, setActiveTab] = useState('need-designer');

  const designerImages = [
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&h=600&fit=crop',
  ];

  const clientFeatures = [
    { icon: <Users className="w-5 h-5" />, title: "500+ Expert Designers", desc: "Curated network of talented professionals" },
    { icon: <Check className="w-5 h-5" />, title: "100% Custom Fit", desc: "Perfectly tailored to your measurements" },
    { icon: <Star className="w-5 h-5" />, title: "Premium Quality", desc: "High-end fabrics and craftsmanship" },
  ];

  const designerFeatures = [
    { icon: <TrendingUp className="w-5 h-5" />, title: "Grow Your Business", desc: "Access to 10K+ active clients" },
    { icon: <Award className="w-5 h-5" />, title: "Build Your Brand", desc: "Showcase your portfolio professionally" },
    { icon: <Zap className="w-5 h-5" />, title: "Earn More", desc: "₹2Cr+ earned by our designers" },
  ];

  const stats = activeTab === 'need-designer' 
    ? [
        { value: "500+", label: "Designers" },
        { value: "10K+", label: "Outfits Made" },
        { value: "4.9★", label: "Rating" }
      ]
    : [
        { value: "10K+", label: "Active Clients" },
        { value: "₹2Cr+", label: "Total Earned" },
        { value: "4.8★", label: "Avg Rating" }
      ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,182,127,.08)_4px,transparent_4px),linear-gradient(90deg,rgba(0,182,127,.08)_4px,transparent_4px)] bg-size-[96px_96px] pointer-events-none" />
      
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#00b67f] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#00b67f] rounded-full blur-3xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-16"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 bg-[#00b67f] rounded-xl flex items-center justify-center"
            >
              <Sparkles className="w-6 h-6 text-black" />
            </motion.div>
            <h1 className="text-2xl font-black">SEWNA</h1>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 border border-white/20 rounded-full text-sm font-semibold hover:border-[#00b67f] hover:text-[#00b67f] transition-colors"
          >
            Sign In
          </motion.button>
        </motion.div>

        {/* Tab Switcher - Centered & Large */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-20"
        >
          <div className="inline-flex p-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <button
              onClick={() => setActiveTab('need-designer')}
              className="relative px-10 py-4 rounded-full text-base font-bold transition-all"
            >
              {activeTab === 'need-designer' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#00b67f] rounded-full shadow-lg shadow-[#00b67f]/50"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 flex items-center gap-2 ${activeTab === 'need-designer' ? 'text-black' : 'text-white/60'}`}>
                <Users className="w-5 h-5" />
                I Need a Designer
              </span>
            </button>
            
            <button
              onClick={() => setActiveTab('i-am-designer')}
              className="relative px-10 py-4 rounded-full text-base font-bold transition-all"
            >
              {activeTab === 'i-am-designer' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#00b67f] rounded-full shadow-lg shadow-[#00b67f]/50"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 flex items-center gap-2 ${activeTab === 'i-am-designer' ? 'text-black' : 'text-white/60'}`}>
                <Palette className="w-5 h-5" />
                I'm a Designer
              </span>
            </button>
          </div>
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Content */}
            <div className="space-y-10">
              {activeTab === 'need-designer' ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#00b67f]/10 border border-[#00b67f]/30 rounded-full mb-6"
                    >
                      <div className="w-2 h-2 bg-[#00b67f] rounded-full animate-pulse" />
                      <span className="text-sm font-semibold text-[#00b67f]">For Fashion Enthusiasts</span>
                    </motion.div>
                    
                    <h2 className="text-6xl lg:text-7xl font-black leading-tight mb-6">
                      Your Dream
                      <br />
                      Outfit Awaits
                    </h2>
                    
                    <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                      Connect with expert designers who transform your vision into stunning reality. Custom-crafted, perfectly fitted, uniquely yours.
                    </p>
                  </motion.div>

                  {/* Features Grid */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="grid gap-4"
                  >
                    {clientFeatures.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00b67f]/50 transition-all group"
                      >
                        <div className="w-12 h-12 bg-[#00b67f]/20 rounded-xl flex items-center justify-center text-[#00b67f] flex-shrink-0 group-hover:bg-[#00b67f] group-hover:text-black transition-colors">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                          <p className="text-gray-400 text-sm">{feature.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(0, 182, 127, 0.5)" }}
                      whileTap={{ scale: 0.98 }}
                      className="group px-8 py-5 bg-[#00b67f] text-black rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-[#00b67f]/30"
                    >
                      Find Your Designer
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02, borderColor: "#00b67f" }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-5 bg-transparent border-2 border-white/20 text-white rounded-full font-bold text-lg hover:border-[#00b67f] hover:text-[#00b67f] transition-all"
                    >
                      View Gallery
                    </motion.button>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#00b67f]/10 border border-[#00b67f]/30 rounded-full mb-6"
                    >
                      <div className="w-2 h-2 bg-[#00b67f] rounded-full animate-pulse" />
                      <span className="text-sm font-semibold text-[#00b67f]">For Creative Designers</span>
                    </motion.div>
                    
                    <h2 className="text-6xl lg:text-7xl font-black leading-tight mb-6">
                      Build Your
                      <br />
                      Fashion Empire
                    </h2>
                    
                    <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                      Join thousands of designers earning a living doing what they love. Connect with clients, showcase your talent, grow your brand.
                    </p>
                  </motion.div>

                  {/* Features Grid */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="grid gap-4"
                  >
                    {designerFeatures.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00b67f]/50 transition-all group"
                      >
                        <div className="w-12 h-12 bg-[#00b67f]/20 rounded-xl flex items-center justify-center text-[#00b67f] flex-shrink-0 group-hover:bg-[#00b67f] group-hover:text-black transition-colors">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                          <p className="text-gray-400 text-sm">{feature.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(0, 182, 127, 0.5)" }}
                      whileTap={{ scale: 0.98 }}
                      className="group px-8 py-5 bg-[#00b67f] text-black rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-[#00b67f]/30"
                    >
                      Start Selling Today
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02, borderColor: "#00b67f" }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-5 bg-transparent border-2 border-white/20 text-white rounded-full font-bold text-lg hover:border-[#00b67f] hover:text-[#00b67f] transition-all"
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </>
              )}
            </div>

            {/* Right Content - Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {designerImages.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8, rotate: i % 2 === 0 ? -5 : 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.3 + i * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: i % 2 === 0 ? 2 : -2,
                      zIndex: 10
                    }}
                    className={`relative overflow-hidden rounded-3xl ${
                      i === 1 || i === 2 ? 'mt-8' : ''
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Fashion ${i + 1}`}
                      className="w-full h-72 object-cover"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#00b67f] via-[#00b67f]/50 to-transparent flex items-end p-6"
                    >
                      <div className="text-white">
                        <div className="font-bold text-lg">Premium Design</div>
                        <div className="text-sm opacity-90">Custom Tailored</div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md"
              >
                <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                  <div className="grid grid-cols-3 gap-6">
                    {stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + i * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl font-black text-[#00b67f] mb-1">{stat.value}</div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-32 text-center"
        >
          <p className="text-gray-500 text-sm mb-6">Trusted by thousands</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {['VOGUE', 'ELLE', 'GQ', 'BAZAAR'].map((brand, i) => (
              <motion.div
                key={i}
                whileHover={{ opacity: 1, scale: 1.1 }}
                className="text-2xl font-black tracking-wider"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}