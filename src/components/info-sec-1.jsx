import { GrLocation } from "react-icons/gr";
import { VscGithubAlt } from "react-icons/vsc";
import { CiTwitter } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";
const InfoSec1 = () => {
  return (
    <div className="mt-12">
      <div className="flex items-center gap-2 text-4 text-gray-600">
        <GrLocation />
        <p>Ulaanbaatar, Mongolia</p>
      </div>
      <div className="flex items-center gap-2 text-4 text-gray-600">
        <div className="bg-green-500 w-2 h-2 rounded-full"></div>
        <p>Available for new projects</p>
      </div>
      <div className="flex gap-[14px] items-center mt-[54px]">
      <VscGithubAlt size={24}/>
      <CiTwitter size={24}/>
      <FaFigma size={24} />
      </div>
      
    </div>
  );
};

export default InfoSec1;