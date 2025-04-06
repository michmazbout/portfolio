const ProjectsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-6xl text-cyan mb-10">Projects</h2>
      <p className="text-lg text-center">
      I've designed structures that defy history and code that bends the rules.
      <br />
      From ancient empires to modern empires, my tools have changed — but not my ambition.
      <br />
      Whether it's pyramids or pixels, I create what endures.

      {/* 🧠 Add your taglines below */}
      <div className="mt-6 text-lightGrey text-sm italic space-y-1">
        <p>“Full-stack developer, full-scale architect of civilization.”</p>
        <p>“3,000 years of building — and counting.”</p>
        <p>“From Petra to Python, I get things done.”</p>
      </div>
      </p>
    </div>
  );
};

export default ProjectsText;
