const SectionAbout = () => {
  return (
    <div className="bg-gray-50 mt-24 h-[826px] dark: bg-slate-950">
      <div className="flex justify-center">
        <p className="bg-slate-300 rounded-xl text-sm text-gray-600 py-1 px-5 mt-24">
          About me
        </p>
      </div>
      <div className="flex justify-between px-28 mt-12 gap-48">
        <img
          src="./images/Pic2.png"
          alt=""
          className="shadow-[-40px_-40px_#E5E7EB]"
        />
        <div className="w-146">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Curious about me? Here you have it:</h1>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300">I'm a designer turned full stack developer, passionate about React.js and Node.js. I excel in blending technical and visual aspects to craft exceptional digital products, prioritizing user experience, precise design, and optimized code.</p>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300">Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends. Now in my early thirties, seven years in, I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.</p>
          <p className=" mt-4 text-base text-gray-600 dark:text-gray-300">With a progressive mindset, I enjoy the entire product development process, from ideation to execution. Off duty, you'll find me on Twitter, tracking startup journeys, or unwinding. Follow me for tech insights and public project updates on Twitter or GitHub.</p>
          <p>Finally, some quick bits about me.</p>
          <ul className="mt-4 text-gray-600 dark:text-gray-300">
            <li>• B.E. in Computer Engineering</li>
            <li>• Full time freelancer</li>
            <li>• Avid learner</li>
          </ul>
          <p className="mt-4 text-gray-600 dark:text-gray-300">One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
