import CompaniesInfo from "./companyinfo";
import LabelTag from "./label-tag";

const companyInfo = [
  {
    companyImg: "/images/Picture.png",
    title: "UBCab",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    companyImg: "/images/Picture1.png",
    title: "Mentorhub",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    companyImg: "/images/Picture2.png",
    title: "iToim",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
];

const Section5 = () => {
  return (
    <section>
   <div className="items-center">
    <LabelTag label="Work"/>
    <p>Some of the noteworthy projects I have built:</p>
   </div>
      <CompaniesInfo companyInfo={companyInfo} />
      
      </section>
  );
};
export default Section5;
