import React from "react";
export default function About() {
  return (
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Who Are We?
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>We are Manas and Palak, first-year BTech students and aspiring developers.</strong> 
            This is our very first React project, built with curiosity, teamwork, and a strong desire to learn. 
            <br /><br />
            Manas has experience in management, content creation, and co-founding an environmental NGO, 
            bringing leadership and creativity into our projects.  
            <br />
            Palak has a strong background in academics, leadership roles, debates, and extracurricular activities, 
            contributing discipline, communication skills, and structure.
            <br /><br />
            Together, we combine technical learning with creativity and real-world experience to build meaningful projects.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            What Are We Doing?
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>This project marks the beginning of our journey into web development.</strong>  
            <br /><br />
            We are currently learning and building using React, focusing on:
            <ul>
              <li>Understanding frontend development fundamentals</li>
              <li>Building responsive and user-friendly interfaces</li>
              <li>Working collaboratively using real-world development practices</li>
              <li>Improving problem-solving and coding skills</li>
            </ul>
            This project is not just about coding—it's about learning how to think, build, and grow as developers.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            FAQs About Us
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>Some quick answers about us:</strong>
            <br /><br />

            <strong>Q: Are you beginners?</strong><br />
            Yes! This is our first React project, and we are learning step by step.
            <br /><br />

            <strong>Q: What makes your team unique?</strong><br />
            Our combination of technical curiosity, leadership experience, and creative thinking.
            <br /><br />

            <strong>Q: What are your future goals?</strong><br />
            To build impactful tech projects, improve our development skills, and explore opportunities in software development and startups.
            <br /><br />

            <strong>Q: What do you enjoy outside coding?</strong><br />
            We enjoy activities like music, sports, content creation, and working on social/environmental initiatives.
          </div>
        </div>
      </div>
    </div>
  );
}