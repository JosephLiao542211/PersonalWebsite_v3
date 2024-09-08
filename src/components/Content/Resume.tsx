import AccomplishmentSlider from "../AccomplishmentSlider";
import CenterDot from "../CenterDot";
import DynamicBackground from "../DynamicBackground";
import Timeline from "../Timeline";
import Hobbies from "../Hobbies";
import CircleLinks from "../CircleLinks";
const timelineItems = [
  {
    title: "Frontend Developer at XYZ Corp",
    date: "Jan 2021 - Present",
    description:
      "Developed modern web applications using React and TypeScript.",
  },
  {
    title: "Junior Developer at ABC Inc",
    date: "Jun 2019 - Dec 2020",
    description: "Assisted in the development and maintenance of web apps.",
  },
  {
    title: "Intern at DEF Ltd",
    date: "Jan 2019 - May 2019",
    description: "Worked on small features and bug fixes for internal tools.",
  },
];

function Resume() {
  return (
    <div className="relative bg-black pb-[5%]">
      <div className="flex h-full flex-col md:h-[80vh] md:flex-row">
        <img
          className="w-full object-cover md:w-5/12"
          src="queensu.png"
          alt="Placeholder"
        />

        <div className="flex h-full flex-col px-[5%] pr-[10%]">
          <h1 className="pt-[2%] font-bigger text-[8em] leading-[1em] tracking-[0.05em] text-white">
            QUEENS UNIVERSITY
          </h1>
          <h1 className="font-ztbro_i text-[2em] uppercase leading-[2em] tracking-[0.3em] text-red-500">
            Bachelor in Computing (Hons)
          </h1>
          <p className="pt-[5%] font-ztbro text-[1.5em] leading-[2em] tracking-[0.2em] text-gray-300">
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

      <div className="mx-[15%] h-screen py-[10%] align-middle">
        <Timeline items={timelineItems}></Timeline>
      </div>
      <div className=" bg-cyan-400 md:h-[80vh] md:flex-row">
        <AccomplishmentSlider></AccomplishmentSlider>
      </div>
      <div className=" bg-cyan-400 md:h-[80vh] md:flex-row">
        <Hobbies></Hobbies>
      </div>
    </div>
  );
}

export default Resume;
