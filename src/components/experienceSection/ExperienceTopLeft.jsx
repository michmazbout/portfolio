import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="5000+" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="7" text="Wonders" />
      </div>
      <p className="text-center">
        With 2000 years of experience building modern architecture
      </p>
      <ExperienceInfo number="$ 9999 B" text="Max Budget" />
    </div>
  );
};

export default ExperienceTopLeft;
