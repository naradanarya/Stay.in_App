import List from "../../components/list/List";
import { Link } from "@material-ui/core";
import "./result.css";

export default function Result() {
  return (
    <div className="resultContainer">
      <span className="spanResult">
        Your search results in Bandung, Jawa Barat
      </span>
      <div className="resultNotice">
        <span className="spanNotice">
          All of our partners have implemented the best health protocols
        </span>
      </div>
      <div className="resultContent">
        <Link href="/detail" style={{ textDecoration: "none" }}>
          <List />
        </Link>
      </div>
      <div className="resultLeft">
        <span className="spanLeft">Sort your search results by:</span>
      </div>
    </div>
  );
}
