const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-6 md:gap-10 items-center text-black">
      <h2 className="font-semibold text-center text-xl max-w-[500px]">
        {title}
      </h2>

      {subtitle && <p className="text-center max-w-[500px]">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
