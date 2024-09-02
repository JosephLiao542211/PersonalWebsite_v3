import CenterDot from "../CenterDot";
import DynamicBackground from "../DynamicBackground";
import Timeline from "../Timeline";
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
function Gallery() {
  return (
    <div className="relative bg-black">
      <div className="justify-centerm left-1/2 h-screen  overflow-x-hidden">
        <DynamicBackground></DynamicBackground>
      </div>
    </div>
  );
}

export default Gallery;
