const SectionExperiences = () => {
  return (
    <div className="bg-gray-50 h-[1140px]">
      <div className="flex justify-center">
        <p className="bg-slate-300 rounded-xl text-sm text-gray-600 py-1 px-5 mt-24">
          Experiences
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <h1>Here is a quick summary of my most recent experiences:</h1>
      </div>
      <div className="flex justify-between m-auto mt-12 bg-white p-8 w-[896px] h-[288px] rounded-xl">
        <div className="">
          <img src="./images/logo-upwork.png" alt="" />
        </div>
        <div>
          <p>Sr. Frontend Developer</p>
          <img src="./images/Column.png" alt="" />
        </div>
        <div>Nov 2021 - Present</div>
      </div>
      <div className="flex justify-between m-auto mt-12 bg-white p-8 w-[896px] h-[288px] rounded-xl">
        <div className="">
          <img src="./images/logo-upwork.png" alt="" />
        </div>
        <div>
          <p>Team Lead</p>
          <img src="./images/Column2.png" alt="" />
        </div>
        <div>Nov 2021 - Present</div>
      </div>
      <div className="flex justify-between m-auto mt-12 bg-white p-8 w-[896px] h-[180px] rounded-xl ">
        <div className="">
          <img src="./images/logo-upwork.png" alt="" />
        </div>
        <div>
          <p>Full Stack Developer</p>
          <img src="./images/Column3.png" alt="" />
        </div>
        <div>Nov 2021 - Present</div>
      </div>
    </div>
  );
};
export default SectionExperiences;
