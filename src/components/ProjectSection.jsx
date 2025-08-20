import React from 'react';

const ProjectSection = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              About My Projects
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-left">
              I have worked on multiple projects including a full-stack 
              <br></br>Excel Analytics Platform using the MERN stack,<br></br> which supports Excel upload, chart generation, <br></br>AI insights, and an admin dashboard.<br></br> I also built a Blogging Platform with user authentication, blog creation,<br></br> filtering, comments, likes, and real-time updates.<br></br> Along with these, I have developed portfolio websites and smaller React applications <br></br>that showcase my skills in frontend design, backend integration,<br></br> and database management.
            </p>
          </div>
        </div>
      </section>
      <hr className="border-gray-200" />
    </>
  );
};

export default ProjectSection;