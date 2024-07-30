const imgList = [
  { label: "Javascript", url: "./images/js.png" },
  { label: "Typescript", url: "./images/typescript.png" },
  { label: "React", url: "./images/icon-react.png" },
  { label: "Next.js", url: "./images/icon-nextjs.png" },
  { label: "Node.js", url: "./images/icon-nodejs.png" },
  { label: "Express.js", url: "./images/icon-express.png" },
  { label: "Nest.js", url: "./images/icon-nest.png" },
  { label: "Socket.io", url: "./images/icon-socket.png" },
  { label: "PostgreSQL", url: "./images/icon-postgresql.png" },
  { label: "MongoDB", url: "./images/icon-mongodb.png" },
  { label: "Sass/Scss", url: "./images/icon-sass.png" },
  { label: "Tailwindcss", url: "./images/icon-tailwindcss.png" },
  { label: "Figma", url: "./images/icon-figma.png" },
  { label: "Cypress", url: "./images/icon-cypress.png" },
  { label: "Storybook", url: "./images/icon-storybook.png" },
  { label: "Git", url: "./images/icon-git.png" },
];

const SectionSkills = () => {
  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="flex justify-center">
        <p className="bg-slate-300 rounded-xl text-sm text-gray-600 py-1 px-5 mt-24">
          Skills
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <h1>The skills, tools and technologies I am really good at:</h1>
      </div>

      <div
        className="grid grid-cols-8 gap-22
      "
      >
        {imgList.map((imgData) => {
          return (
            <div>
              <img className="" src={imgData.url} alt="" />
              <p className="mt-2 text-gray-600"> {imgData.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SectionSkills;
