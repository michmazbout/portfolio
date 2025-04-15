const ProjectsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-6xl text-glowingPink mb-10">Projects</h2>
      <p className="text-wt text-center">
        Over the years, I've engineered innovative systems, built environmental tools,
        and analyzed our planet with the precision of a coder and the eye of a scientist.
        <br />
        From glacial modeling to smart homes and river sediment analysis —
        everything I build is rooted in purpose, backed by data, and designed to last.

        <div className="mt-6 text-lavenderMist text-sm italic space-y-1">
          <p>“Environmental engineer meets full-stack inventor.”</p>
          <p>“From sediment to software — I design solutions that scale.”</p>
          <p>“I build systems that speak science and code fluently.”</p>
        </div>
      </p>
    </div>
  );
};

export default ProjectsText;
