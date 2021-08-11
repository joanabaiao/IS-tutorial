import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <div>
        <h1>That page cannot be found</h1>
        <h2><Link to="/">Homepage</Link></h2>
      </div>
    </div>
  );
}
 
export default NotFound;

