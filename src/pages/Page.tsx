import Gallery from "@/components/Content/Gallery";
import Resume from "@/components/Content/Resume";
import DynamicBackground from "@/components/DynamicBackground";
type PageProps = {
  page: string;
};

const Page: React.FC<PageProps> = ({ page }) => {
  return (
    <div className="overflow-hidden ">
      {page === "Resume" && <Resume></Resume>}
      {page === "Project" && (
        <div className="w-[100vw] overflow-x-hidden">
          <DynamicBackground></DynamicBackground>
        </div>
      )}
      {page === "Gallery" && (
        <div>
          <Gallery></Gallery>
        </div>
      )}
    </div>
  );
};

export default Page;
