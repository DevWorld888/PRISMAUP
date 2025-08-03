import React from 'react'
import Image from 'next/image'

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Residential Project",
      description: "We bring the right people together to challenge established thinking and drive transform in 2020",
      icon: "🏠",
      position: "top-left"
    },
    {
      id: 2,
      title: "Commercial Project", 
      description: "We bring the right people together to challenge established thinking and drive transform in 2020",
      icon: "🏢",
      position: "top-right"
    },
    {
      id: 3,
      title: "Wallpapering",
      description: "We bring the right people together to challenge established thinking and drive transform in 2020", 
      icon: "🎨",
      position: "bottom-left"
    },
    {
      id: 4,
      title: "Restoration Project",
      description: "We bring the right people together to challenge established thinking and drive transform in 2020",
      icon: "🔧",
      position: "bottom-right"
    }
  ]

  return (
    <section className="py-16 px-4 bg-[#FDF7F0]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#FF6B35] font-medium text-lg mb-2">Our Service</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience Makes Us Confident
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla auctor elit, et mollis massa ullamcorper in. Vestibulum egestas, neque non accumsan pede, ipsum lorem dictum nunc, a scelerisque nibh magna auctor tellus.
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative">
          {/* Central Image */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="relative">
              {/* Decorative elements */}
              
              
              {/* Yellow circle background */}
              <div className="w-80 h-80 bg-yellow-400 rounded-full flex items-center justify-center">
                <Image 
                  src="/images/about-us.png" 
                  alt="Worker" 
                  width={256}
                  height={256}
                  className="w-64 h-64 object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto pt-20 pb-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`
                  relative p-8 rounded-2xl transition-all duration-300 cursor-pointer group
                  ${index === 0 
                    ? 'bg-[#FF6B35] text-white' 
                    : 'bg-white text-gray-800 hover:bg-[#FF6B35] hover:text-white border border-gray-100'
                  }
                  ${service.position === 'top-left' ? 'md:mr-40 mb-40 md:mb-0' : ''}
                  ${service.position === 'top-right' ? 'md:ml-40 mb-40 md:mb-0' : ''}
                  ${service.position === 'bottom-left' ? 'md:mr-40 mt-40 md:mt-0' : ''}
                  ${service.position === 'bottom-right' ? 'md:ml-40 mt-40 md:mt-0' : ''}
                `}
              >
                {/* Icon */}
                <div className={`
                  text-4xl mb-4 transition-all duration-300
                  ${index === 0 
                    ? 'text-white' 
                    : 'text-[#FF6B35] group-hover:text-white'
                  }
                `}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`
                  text-sm leading-relaxed
                  ${index === 0 
                    ? 'text-white/90' 
                    : 'text-gray-600 group-hover:text-white/90'
                  }
                `}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
