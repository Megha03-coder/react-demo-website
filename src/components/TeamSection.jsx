import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    { name: "Alex Johnson", role: "Frontend Developer", image: "👨‍💻", color: "from-orange-500 to-red-600" },
    { name: "Sarah Chen", role: "UI/UX Designer", image: "👩‍🎨", color: "from-pink-500 to-purple-600" },
    { name: "Mike Rodriguez", role: "Backend Developer", image: "👨‍💼", color: "from-indigo-500 to-blue-600" }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-bl from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-bounce gradient-text" style={{animationDelay: '0.5s'}}>
              Meet The Team
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-float">
              A passionate group of professionals dedicated to creating exceptional digital experiences 
              through collaboration and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center card-hover transform transition-all duration-500" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-4xl animate-pulse hover:animate-spin transition-all duration-300`}>
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors duration-300 cursor-pointer">{member.name}</h3>
                <p className="text-gray-600 hover:text-pink-500 transition-colors duration-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="border-pink-200 border-2" />
    </>
  );
};

export default TeamSection;