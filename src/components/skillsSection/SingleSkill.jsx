const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-4 transition-all duration-300">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-white text-radiantViolet h-[80px] w-[80px] flex items-center justify-center rounded-full hover:text-blue-600 hover:scale-105 transition-all duration-300 text-4xl border-4 border-blue-200 shadow-sm">
          {imgSvg}
        </div>
        <p className="text-blue-800 font-semibold text-sm">{text}</p>
      </div>
    </div>
  );
};

export default SingleSkill;