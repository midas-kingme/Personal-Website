import { Link } from "react-router-dom";

function Links() {
  return (
    <div id="links">
      <a className="link" href="https://www.linkedin.com/in/midasoden/" target="_blank">
        LinkedIn
      </a>

      <a className="link" href="https://www.goodreads.com/review/list/189102741?ref=nav_mybooks" target="_blank">
        Reading List
      </a>

      <Link className="link" to="/projects">
        Projects
      </Link>
    </div>
  );
}

export default Links;
