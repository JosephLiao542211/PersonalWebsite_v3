import DynamicBackground from "../DynamicBackground";
import Card from "../ProjectCards";
const CardItems = [
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
    title: "Junior Developer at ABC Inc",
    date: "Jun 2019 - Dec 2020",
    description: "Assisted in the development and maintenance of web apps.",
  },
];

function Technology() {
  return (
    <div className="relative h-full bg-black ">
      <DynamicBackground></DynamicBackground>
      <div className="relative mx-[6.5%] flex h-full items-center justify-center overflow-x-hidden py-[5%] align-middle">
        <div className="flex flex-wrap justify-around gap-12">
          {CardItems.map((item) => (
            <Card
              title={item.title}
              link={item.date}
              description={item.description}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technology;
