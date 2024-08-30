type PageProps = {
  page: string;
};

const Page: React.FC<PageProps> = ({ page }) => {
  return (
    <div>
      {page === "Resume" && <div>Resume</div>}
      {page === "Project" && <div>Project</div>}
      {page === "Gallery" && <div>Gallery</div>}
    </div>
  );
};

export default Page;
