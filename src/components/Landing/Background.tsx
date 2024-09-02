function Background() {
  return (
    <div
      className="absolute z-[-1] h-screen w-[100vw] overflow-hidden bg-cover bg-repeat-x"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url('image 7.jpg')`,
        backgroundSize: "auto 100%", // Full height, auto width
        backgroundPosition: "center top", // Position it at the top center
        backgroundRepeat: "repeat-x", // Repeat horizontally
      }}
    />
  );
}

export default Background;
