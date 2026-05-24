import React from 'react';
import { FiShield, FiClock, FiLock } from 'react-icons/fi';

const WheyStudy = () => {
   
    const features = [
        {
            icon: <FiShield className="w-6 h-6 text-[#1e6b7b]" />,
            title: "Verified Space",
            description: "Every nook is hand-vetted for cleanliness, quietness, and high-speed connectivity."
        },
        {
            icon: <FiClock className="w-6 h-6 text-[#1e6b7b]" />,
            title: "Instant Booking",
            description: "No more hunting for empty tables. Book your spot in seconds with real-time availability."
        },
        {
            icon: <FiLock className="w-6 h-6 text-[#1e6b7b]" />,
            title: "Keyless Entry",
            description: "Unlock your room directly from your phone. Seamless, secure, and touch-free access."
        }
    ];

    return (
        <section className="bg-[#f4f8fa] py-16 px-4 font-sans text-center">

            <h2 className="text-3xl font-bold text-[#1a202c] mb-12">
                Why StudyNook?
            </h2>

 
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch">
                {features.map((feature, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-md"
                    >
                  
                        <div className="w-14 h-14 bg-[#e6f2f5] rounded-full flex items-center justify-center mb-6">
                            {feature.icon}
                        </div>
                        
                 
                        <h3 className="text-xl font-bold text-[#2d3748] mb-4">
                            {feature.title}
                        </h3>
                        
                      
                        <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WheyStudy;