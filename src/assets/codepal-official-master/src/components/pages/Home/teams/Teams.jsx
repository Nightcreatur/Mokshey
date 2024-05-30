import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-bold">
          About
          <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
            {" "}
            Us.
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Learn more about our company, our mission, vision, and values.
        </p>

        <div className="mt-10 max-w-2xl text-lg text-neutral-600 lg:max-w-none">
          <h2 className="text-2xl font-semibold mt-6">Our Mission</h2>
          <p className="mt-4">
            Our mission is to deliver high-quality products that bring value to
            our customers and improve their lives. We are dedicated to
            continuous innovation and excellence.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Our Vision</h2>
          <p className="mt-4">
            Our vision is to be a global leader in our industry, recognized for
            our exceptional products, outstanding customer service, and
            commitment to sustainability.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Our Values</h2>
          <p className="mt-4">
            We believe in integrity, innovation, and inclusivity. Our values
            guide our actions and decisions, ensuring we always do what is right
            for our customers, employees, and the community.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Our Team</h2>
          <p className="mt-4">
            Our team is composed of talented and passionate individuals who are
            committed to achieving our mission and vision. Together, we strive
            for excellence and continuous improvement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
