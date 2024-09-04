import Gallery from "@/components/Content/Gallery";
import Resume from "@/components/Content/Resume";
import Technology from "@/components/Content/Technology";
import DynamicBackground from "@/components/DynamicBackground";
type PageProps = {
  page: string;
};

const Page: React.FC<PageProps> = ({ page }) => {
  return (
    <div className="overflow-x-hidden ">
      {page === "Resume" && <Resume></Resume>}
      {page === "Project" && (
        <div>
          <Technology></Technology>
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
