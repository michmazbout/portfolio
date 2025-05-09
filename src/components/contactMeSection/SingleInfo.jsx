const SingleInfo = ({ text, Image }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-start">
      <Image className="text-3xl" />
      <p>{text}</p>
    </div>
  );
};

export default SingleInfo;
