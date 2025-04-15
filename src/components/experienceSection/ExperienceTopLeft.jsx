import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-iceBlue font-bold uppercase text-3xl font-special text-center">
        Since 2015
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="7+" text="Years" />
        <p className="font-bold text-6xl text-lavenderMist">-</p>
        <ExperienceInfo number="8" text="Projects" />
      </div>
      <p className="text-center">
        Cross-disciplinary work in engineering, climate science, geophysics, ecology, and software
      </p>
      <ExperienceInfo number="6" text="Fields" />
    </div>
  );
};

export default ExperienceTopLeft;
