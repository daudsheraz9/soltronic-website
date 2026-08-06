"use client";

import { useState } from 'react';

const teamMembers = [
  {
    name: "Khursheed Abbas",
    title: "Chief Marketing Officer",
    bio: "Khursheed leads our marketing strategy, ensuring Soltronic Energy's innovative solutions reach those who need them most.",
    image: "/khursheedabbas.png"
  },
  {
    name: "Waseem Bhatti",
    title: "Chief Operating Officer",
    bio: "Waseem oversees daily operations and strategic execution, ensuring seamless delivery of our sustainable energy projects.",
    image: "/waseembhatti.png"
  },
  {
    name: "Abbas Shoukat",
    title: "Head of Finance",
    bio: "Abbas manages our financial health and strategy, enabling us to offer competitive pricing and flexible financing.",
    image: "/abbasshoukat.png"
  },
  {
    name: "Zaeem Maalik",
    title: "Sales Manager",
    bio: "Zaeem drives our sales initiatives, building strong relationships with clients to deliver tailored solar solutions.",
    image: "/zaeemmaalik.png"
  },
  {
    name: "Raza Naeem",
    title: "EPC Manager",
    bio: "Raza manages Engineering, Procurement, and Construction, guaranteeing the highest quality in every installation.",
    image: "/razanaeem.png"
  },
  {
    name: "Asad-ur-Rehman",
    title: "Ecommerce Manager",
    bio: "Asad spearheads our digital storefront, making the transition to solar energy accessible through a seamless online experience.",
    image: "/asadurrehman.png"
  }
];

export default function TeamAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex flex-col md:flex-row gap-4 h-auto md:h-[450px]">
      {teamMembers.map((member, index) => {
        const isActive = activeIndex === index;
        
        return (
          <div
            key={index}
            className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex
              ${isActive ? 'md:flex-grow-[4] md:w-[44.44%] flex-col md:flex-row h-auto md:h-full' : 'md:flex-grow-[1] md:w-[11.11%] h-24 md:h-full flex-col'}
              bg-surface-container-lowest shadow-lg border border-outline-variant/20`}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
          >
            {/* Image Container */}
            <div className={`relative transition-all duration-500 ${isActive ? 'w-full md:w-[40%] h-48 md:h-full shrink-0' : 'w-full h-full'}`}>
              <div className="absolute inset-0 bg-black/20 z-10 hover:bg-transparent transition-colors"></div>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
              {/* Name Overlay (when inactive on desktop, or always on mobile) */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 z-20 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${isActive ? 'md:opacity-0' : 'opacity-100'}`}>
                <h4 className="text-white font-bold whitespace-nowrap overflow-hidden text-ellipsis">{member.name}</h4>
                <p className="text-white/80 text-sm whitespace-nowrap overflow-hidden text-ellipsis">{member.title}</p>
              </div>
            </div>

            {/* Bio Container (only visible when active) */}
            <div 
              className={`flex-1 p-6 md:p-8 flex flex-col justify-center transition-all duration-500
                ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 absolute pointer-events-none hidden md:flex'}`}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-on-surface font-headline-md">{member.name}</h3>
                <p className="text-[#B8860B] font-semibold">{member.title}</p>
              </div>
              
              <div className="w-12 h-1 bg-[#00d084] mb-6 rounded-full"></div>
              
              <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
                {member.bio}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
