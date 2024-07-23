const NavLinks = ({ pages }) => {
  return (
    <ul
      className="flex gap-4 items-center text-gray-600 text-base );
"
    >
      {pages.map((page) => {
        return (
          <li>
            <a href={page.link}>{page.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
