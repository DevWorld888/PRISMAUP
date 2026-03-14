'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const RecentProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Interior House Painting Refresh",
      description: "Residential interior painting in Sydney with premium wall preparation, smooth finishes, and long-lasting colour coverage.",
      image: "/images/recentWorks/1.jpeg",
      category: "Residential"
    },
    {
      id: 2,
      title: "Modern Living Room Repaint",
      description: "Professional residential repainting for living rooms, featuring clean lines, durable coatings, and a modern interior finish.",
      image: "/images/recentWorks/2.jpeg",
      category: "Residential"
    },
    {
      id: 3,
      title: "Residential Wall And Trim Finish",
      description: "Expert house painting services for walls and trim, delivering crisp edges, premium workmanship, and elegant residential results.",
      image: "/images/recentWorks/3.jpeg",
      category: "Residential"
    },
    {
      id: 4,
      title: "Apartment Interior Painting Project",
      description: "Sydney apartment painting with seamless preparation, premium residential coatings, and a polished contemporary interior look.",
      image: "/images/recentWorks/4.jpeg",
      category: "Residential"
    },
    {
      id: 5,
      title: "Home Makeover Paint Upgrade",
      description: "Residential painting and surface preparation designed to refresh home interiors with clean finishes and durable paint systems.",
      image: "/images/recentWorks/5.jpeg",
      category: "Residential"
    },
    {
      id: 6,
      title: "Premium Home Interior Coating",
      description: "High-end residential coating application for interiors, combining refined colour selection with flawless house painting results.",
      image: "/images/recentWorks/6.jpeg",
      category: "Residential"
    },
    {
      id: 7,
      title: "Family Home Painting Service",
      description: "Trusted residential painters delivering neat preparation, quality finishes, and reliable interior painting for family homes.",
      image: "/images/recentWorks/7.jpeg",
      category: "Residential"
    },
    {
      id: 8,
      title: "Residential Room Repainting",
      description: "Interior residential repainting focused on clean surfaces, smooth walls, and lasting protection for everyday living spaces.",
      image: "/images/recentWorks/8.jpeg",
      category: "Residential"
    }
  ]);

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxIndex = isMobile ? projects.length - 1 : projects.length - 3;
          const nextIndex = prevIndex >= maxIndex ? 0 : prevIndex + 1;
          scrollToProject(nextIndex);
          return nextIndex;
        });
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, projects.length, isMobile]);

  const scrollToProject = (index: number) => {
    if (scrollRef.current) {
      if (isMobile) {
        // En móvil: scroll completo por card
        const scrollPosition = index * window.innerWidth;
        scrollRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      } else {
        // En pantallas grandes: mostrar 3, scroll de 1 en 1
        const cardWidth = 384; // w-96 = 384px
        const gap = 24; // gap-6 = 24px
        const scrollPosition = index * (cardWidth + gap);
        scrollRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const goToSlide = (index: number) => {
    const maxIndex = isMobile ? projects.length - 1 : projects.length - 3;
    const validIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(validIndex);
    scrollToProject(validIndex);
  };

  return (
    <section className="py-8 sm:py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4">
            <div className="w-1 h-12 bg-red-500 mr-4" aria-hidden="true"></div>
            <span className="text-sm md:text-base font-medium text-gray-400 uppercase tracking-wider">
              Residential Projects
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-2 sm:mb-4">
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white text-center">
              Explore <span className="text-red-500 italic font-script">residential </span> painting projects in Sydney.
            </h2>
            {isAutoPlaying && (
              <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 mt-2 sm:mt-0">
                <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium">Auto</span>
              </div>
            )}
          </div>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
             See real residential painting and interior coating work completed across Sydney, with premium finishes, careful preparation, and results built to last.
          </p>
        </div>

        {/* Projects Slider */}
        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide md:max-w-none"
          >
            <div className="flex md:gap-6 pb-4 md:w-max">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-screen md:w-80 lg:w-96 px-4 md:px-0 bg-white dark:bg-gray-800 md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-48 md:h-56 w-full overflow-hidden md:rounded-t-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    {/* <button className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
                      View Details
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              const maxIndex = isMobile ? projects.length - 1 : projects.length - 3;
              goToSlide(currentIndex > 0 ? currentIndex - 1 : maxIndex);
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 sm:p-3 hover:shadow-xl transition-all duration-200 z-10"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => {
              const maxIndex = isMobile ? projects.length - 1 : projects.length - 3;
              goToSlide(currentIndex < maxIndex ? currentIndex + 1 : 0);
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 sm:p-3 hover:shadow-xl transition-all duration-200 z-10"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-1 sm:space-x-2">
            {Array.from({ 
              length: isMobile 
                ? projects.length      // móvil: un indicador por proyecto
                : projects.length - 2  // pantallas grandes: menos indicadores porque muestra 3 a la vez
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-blue-600 dark:bg-blue-400 w-6 sm:w-8'
                    : 'bg-blue-200 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <aside className="text-center mt-12">
          <p className="text-gray-400 text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Ready to transform your space with professional painting and coating services? 
            Contact us today for a personalized quote tailored to your project needs.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-red-500 hover:bg-red-600 text-white font-semibold text-sm md:text-base rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-describedby="gallery-cta-description"
          >
            Request Your Free Quote Today
            <svg className="ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <div id="gallery-cta-description" className="sr-only">
            Contact Prisma Coatings for professional painting and coating services consultation
          </div>
        </aside>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default RecentProjects;
