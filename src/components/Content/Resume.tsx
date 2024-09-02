import AccomplishmentSlider from "../AccomplishmentSlider";
import CenterDot from "../CenterDot";
import DynamicBackground from "../DynamicBackground";
import Timeline from "../Timeline";
import Hobbies from "../Hobbies";
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
      <div className="flex h-auto flex-col md:h-[80vh] md:flex-row">
        <img
          className="w-full flex-1 object-cover md:w-5/12"
          src="queensu.png"
          alt="Placeholder"
        />

        <div className="flex-grow-2 flex p-[5%] px-[10%]">
          <div>
            <h1>this is text</h1>
            <p>
              em Ipsum è un testo segnaposto utilizzato nel settore della
              tipografia e della stampa. Lorem Ipsum è considerato il testo
              segnaposto standard sin dal sedicesimo secolo, quando un anonimo
              tipografo prese una cassetta di caratteri e li assemblò per
              preparare un testo campione. È sopravvissuto non solo a più di
              cinque secoli, ma anche al passaggio alla videoimpaginazione,
              pervenendoci sostanzialmente inalterato. Fu reso popolare, negli
              anni ’60, con la diffusione dei fogli di caratte
            </p>
          </div>
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
