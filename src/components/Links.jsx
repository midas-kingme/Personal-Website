import '../styles/components.css';

const Links = () => {
  const links = [
    { href: "https://github.com/kingmidas-hack", icon: "fab fa-github", text: "Github" },
    { href: "https://www.linkedin.com/in/midasoden/", icon: "fab fa-linkedin", text: "LinkedIn" },
    { href: "https://beta.crunchyroll.com/crunchylists/eeb252c9-fb45-483a-b119-3ba075445157", icon: "fa fa-play-circle", text: "MyAnimeList" }
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




// import './links.css';

// function Links() {
//   return (
//     <div id="links">
//       <a className="link" href="http://github.com/kingmidas-hack" target="_blank">
//         <i className="fab fa-github">&nbsp;</i>Github
//       </a>
//       <a className="link" href="https://www.linkedin.com/in/midasoden/" target="_blank">
//         <i className="fab fa-linkedin">&nbsp;</i>LinkedIn
//       </a>
//       <a className="link" href="https://beta.crunchyroll.com/crunchylists/eeb252c9-fb45-483a-b119-3ba075445157" target="_blank">
//         <i className="fa fa-play-circle">&nbsp;</i>MyAnimeList
//       </a>
//     </div>
//   );
// }

// export default Links;
