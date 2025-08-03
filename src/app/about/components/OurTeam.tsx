import React from 'react'

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Jane Doe",
      position: "CEO Founder",
      id: 1
    },
    {
      name: "Jane Doe", 
      position: "CEO Founder",
      id: 2
    },
    {
      name: "Jane Doe",
      position: "CEO Founder", 
      id: 3
    }
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[#D61C1C] mb-2 uppercase tracking-wide">
            Our Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience Makes Us Mature
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla auctor elit, et mollis massa ullamcorper in. Vestibulum egestas, neque non accumsan mollis, dui lacus dictum nunc, a scelerisque nibh magna auctor tellus.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              {/* Card with red background */}
              <div className="bg-[#D61C1C] rounded-lg p-8 mb-6 min-h-[300px] flex items-center justify-center">
                {/* Placeholder for team member - just initials */}
                <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-black text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              
              {/* Member Info */}
              <h3 className="text-xl font-bold text-[#D61C1C] mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600 font-medium">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
