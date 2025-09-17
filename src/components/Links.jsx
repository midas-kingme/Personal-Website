import '../styles/components.css';

const Links = () => {
  const links = [
    { href: "https://midas-kingme.github.io/src/Welcome.html", icon: "fab fa-github", text: "Not a blog" },
    { href: "https://www.linkedin.com/in/midasoden/", icon: "fab fa-linkedin", text: "LinkedIn" },
    { href: "https://www.goodreads.com/review/list/189102741?ref=nav_mybooks", icon: "fa fa-play-circle", text: "Reading List" }
  ];

  return (
    <div id="links">
      {links.map(({ href, icon, text }, index) => (
        <a key={index} className="link" href={href} target="_blank" rel="noopener noreferrer">
          <i className={icon}>&nbsp;</i>{text}
        </a>
      ))}
    </div>
  );
};

export default Links;



