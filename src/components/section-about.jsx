const SectionAbout = () => {
  return (
    <div className="bg-gray-50 mt-24">
      <div className="flex justify-center">
        <p className="bg-slate-300 rounded-xl text-sm text-gray-600 py-1 px-5 mt-24">
          About me
        </p>
      </div>
      <div className="flex justify-between px-28 mt-12">
        <img
          src="./images/Pic2.png"
          alt=""
          className="shadow-[-40px_-40px_#E5E7EB]"
        />
        <div>
          <h1 className="text-3xl">Curious about me? Here you have it:</h1>
          <img src="./images/Content.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
