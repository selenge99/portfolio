import InfoSec1 from "./info-sec-1";
import { CiTwitter } from "react-icons/ci";
const SectionInfo = () => {
  return (
  <div className="flex justify-between px-28">
    <div className=" mt-24 items-center">
      <h2 className="text-6xl font-bold">Hi, I’m Tom 👋 </h2>
      <p className="mt-2 text-4 text-gray-600 font-normal">
        I specialize in full stack development, particularly with React.js and
        Node.js. <br />
        My main goal is to create exceptional digital experiences that are fast,
        visually <br />
        appealing, and accessible to everyone. With over 7 years of experience
        in web <br />
        development, I continue to find joy in crafting innovative solutions and
        designs.
      </p>
      <InfoSec1/>  
    </div>
    <div className="mt-24">
      <img src="./images/Pic.png" alt="" />
    </div> 
   
  </div>
 
  );
};

export default SectionInfo;
