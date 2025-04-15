const SingleContactSocial = ({ Icon, link, label }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-glowingPink text-lavenderMist rounded-full p-3 flex items-center justify-center">
      <a
        href={link}
        title={label}
        className="cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
