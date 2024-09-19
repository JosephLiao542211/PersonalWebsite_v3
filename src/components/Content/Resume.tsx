import AccomplishmentSlider from "../AccomplishmentSlider";

import Timeline from "../Timeline";
import Hobbies from "../Hobbies";
import CircleLinks from "../CircleLinks";
const timelineItems = [
  {
    title: "Local Reach",
    date: "Jan 2021 - Present",
    position: "Co-Founder & Lead Developer",
    description:
      "Co-founded a computer vision startup to help bars and restaurants reclaim ad space using AI commercial detection. Raised $60,000+ in seed funding and $3,000+ in revenue within 5 months. Developed a 96% accuracy ad detection algorithm with TensorFlow, OpenCV, and Python, and designed custom circuitry deployed at 5 restaurants. Completed incubator programs QYourVenture and Startup Survivor, now part of League of Innovators (Lab 13).",
  },
  {
    title: "Elevate Intergrated Solutions",
    date: "Jun 2019 - Dec 2020",
    position: "UI/UX Intern",
    description: "Assisted in the development and maintenance of web apps.",
  },
  {
    title: "Code Ninjas",
    position: "Marketing Coordinator",
    date: "Jan 2019 - May 2019",
    description: "Worked on small features and bug fixes for internal tools.",
  },
];

function Resume() {
  return (
    <div className="relative h-full w-full bg-black pb-[5%]">
      <div className="flex h-full flex-col md:h-[80vh] md:flex-row">
        <img
          className="w-full object-cover md:w-5/12"
          src="queensu.png"
          alt="Placeholder"
        />

        <div className="flex h-full flex-col overflow-hidden px-[5%] pr-[10%]">
          <h1 className="pt-[2%] font-bigger text-[7em] leading-[1em] tracking-[0.05em] text-white md:text-[7.8vw]">
            QUEENS UNIVERSITY
          </h1>
          <h1 className="font-ztbro_i text-[2em] uppercase leading-[2em] tracking-[0.3em] text-red-500">
            Bachelor in Computing (Hons)
          </h1>
          <p className="pt-[2%] font-ztbro text-[1.3rem] leading-[2rem] tracking-[0em] text-gray-300">
            Attending Queen's University for my Bachelor in Computing (Hons)
            with a specialization in Fundamental Computation was a
            transformative journey. I gained a strong foundation in
            computational theory and honed my problem-solving skills.
            Collaborating with talented peers, I explored innovative solutions
            and developed a passion for pushing the boundaries of technology.
          </p>

          {/* Spacer div to push CircleLinks to the bottom and take remaining space */}
          <div className="flex-grow"></div>

          {/* CircleLinks component taking remaining space and sitting at the bottom */}
          <CircleLinks></CircleLinks>
        </div>
      </div>

      <div className="h-fit py-[7%] text-center align-middle md:mx-[10%] md:text-left">
        <Timeline items={timelineItems}></Timeline>
      </div>

      <div className=" bg-cyan-400 md:h-full md:flex-row">
        <AccomplishmentSlider></AccomplishmentSlider>
      </div>
      <div className=" bg-cyan-400 md:h-[80vh] md:flex-row">
        <Hobbies></Hobbies>
      </div>
    </div>
  );
}

export default Resume;
