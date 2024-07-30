import LabelTag from "../label-tag";

const ExperienceCard = ()=>{
    return(
        <div>
            <h1 className="flex-1 text-lg font-extrabold text-green-500">{company}</h1>
            <div>
                <h3>{title}</h3>
                <ul>{MdDescription.map((item,index)=>{
                    <li key={index}>{item}</li>

                })}</ul>
            </div>
            <div>{date}</div>
        </div>
    );
};

export default ExperienceCard;