import { TfiNewWindow } from "react-icons/tfi";

const CompaniesInfo = ({ companyInfo }) => {
  return (
    <div className="">
      {companyInfo.map((info) => (
        <div className="flex gap-20">
          <img src={info.companyImg} alt="" />
          <div>
            <h4 className="text-blue">{info.title}</h4>
            <p className="text-gray-600">{info.text}</p>
            <TfiNewWindow />
          </div>
        </div>
      ))}
    </div>
  );
};
export default CompaniesInfo;
