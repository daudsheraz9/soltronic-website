"use client";

import { useState, useRef } from 'react';

const teamMembers = [
  {
    name: "Mr. Faheem Maalik",
    title: "CEO",
    bio: "Mr.Faheem leads Soltronic Energy Distribution with a vision for a sustainable future, driving innovation in renewable energy.",
    image: "/ceo.png"
  },
  {
    name: "Nasir Rashid",
    title: "General Manager",
    bio: "Mr.Nasir oversees the strategic direction and daily operations, ensuring exceptional service delivery and operational excellence.",
    image: "/NasirRashid.png"
  },
  {
    name: "Khursheed Abbas",
    title: "Chief Marketing Officer",
    bio: "Mr.Khursheed leads our marketing strategy, ensuring Soltronic Energy's innovative solutions reach those who need them most.",
    image: "/khursheedabbas.png"
  },
  {
    name: "Waseem Bhatti",
    title: "Chief Operating Officer",
    bio: "Mr.Waseem oversees daily operations and strategic execution, ensuring seamless delivery of our sustainable energy projects.",
    image: "/waseembhatti.png"
  },
  {
    name: "Abbas Shoukat",
    title: "Head of Finance",
    bio: "Mr.Abbas manages our financial health and strategy, enabling us to offer competitive pricing and flexible financing.",
    image: "/abbasshoukat.png"
  },
  {
    name: "Zaeem Maalik",
    title: "Sales Manager",
    bio: "Mr.Zaeem drives our sales initiatives, building strong relationships with clients to deliver tailored solar solutions.",
    image: "/zaeemmaalik.png"
  },
  {
    name: "Qamar Maqsood",
    title: "Finance Manager",
    bio: "Mr.Qamar drives our financial strategy and planning, ensuring sustainable growth and optimal resource allocation.",
    image: "/QamarMaqsood.png"
  },
  {
    name: "Muhammad Yaqub",
    title: "HR & Admin",
    bio: "Mr.Yaqub oversees human resources and administrative operations, ensuring a supportive and efficient workplace for our team.",
    image: "/MuhmmadYaqub.png"
  },
  {
    name: "Raza Naeem",
    title: "EPC Manager",
    bio: "Mr.Raza manages Engineering, Procurement, and Construction, guaranteeing the highest quality in every installation.",
    image: "/razanaeem.png"
  },
  {
    name: "Asad-ur-Rehman",
    title: "Ecommerce Manager",
    bio: "Mr.Asad spearheads our digital storefront, making the transition to solar energy accessible through a seamless online experience.",
    image: "/asadurrehman.png"
  }
];

export default function TeamAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group w-full">
      {/* Left Arrow */}
      <button 
        onClick={scrollLeft}
        className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 z-30 bg-white dark:bg-surface-container-highest p-2 rounded-full shadow-lg border border-outline-variant/20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-surface-container-high"
        aria-label="Scroll left"
      >
        <span className="material-symbols-outlined text-on-surface">chevron_left</span>
      </button>

      <div 
        ref={scrollContainerRef}
        className="w-full flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 h-[320px] md:h-[340px] pb-4 md:pb-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `\n        div::-webkit-scrollbar { display: none; }\n      `}} />
      {teamMembers.map((member, index) => {
        const isActive = activeIndex === index;
        
        return (
          <div
            key={index}
            className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-row shrink-0 snap-center
              ${isActive ? 'w-[85vw] md:flex-grow-[4] md:w-[44.44%]' : 'w-[15vw] md:flex-grow-[1] md:w-[11.11%]'}
              h-full bg-surface-container-lowest shadow-lg border border-outline-variant/20`}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
          >
            {/* Image Container */}
            <div className={`relative transition-all duration-500 h-full shrink-0 ${isActive ? 'w-[45%] md:w-[40%]' : 'w-full'}`}>
              <div className="absolute inset-0 bg-black/20 z-10 hover:bg-transparent transition-colors"></div>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
              {/* Name Overlay */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 z-20 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                <h4 className="text-white font-bold whitespace-nowrap overflow-hidden text-ellipsis hidden md:block">{member.name}</h4>
                <p className="text-white/80 text-sm whitespace-nowrap overflow-hidden text-ellipsis hidden md:block">{member.title}</p>
              </div>
            </div>

            {/* Bio Container (only visible when active) */}
            <div 
              className={`transition-all duration-500 overflow-hidden flex flex-col justify-center relative shrink-0 h-full
                ${isActive ? 'opacity-100 w-[55%] md:w-[60%]' : 'opacity-0 w-0 pointer-events-none'}`}
            >
              <div className={`p-4 md:p-6 h-full flex flex-col justify-center w-full transition-transform duration-500 ${isActive ? 'translate-x-0' : 'translate-x-8'}`}>
                <div className="mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-on-surface font-headline-md leading-tight">{member.name}</h3>
                  <p className="text-[#B8860B] font-semibold text-sm md:text-base">{member.title}</p>
                </div>
                
                <div className="w-8 md:w-12 h-1 bg-[#00d084] mb-3 md:mb-4 rounded-full shrink-0"></div>
                
                <p className="text-on-surface-variant leading-snug md:leading-relaxed text-xs md:text-sm line-clamp-6 md:line-clamp-none break-words">
                  {member.bio}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      </div>

      {/* Right Arrow */}
      <button 
        onClick={scrollRight}
        className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 z-30 bg-white dark:bg-surface-container-highest p-2 rounded-full shadow-lg border border-outline-variant/20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-surface-container-high"
        aria-label="Scroll right"
      >
        <span className="material-symbols-outlined text-on-surface">chevron_right</span>
      </button>
    </div>
  );
}
