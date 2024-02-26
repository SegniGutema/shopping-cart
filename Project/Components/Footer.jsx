import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-950 flex flex-col gap-3">
      <div>
        <h2 className="">Company</h2>
        <ul>
          <li>
            <Link>qbev</Link>
          </li>
          <li>
            <Link>bt3qve</Link>
          </li>
          <li>
            <Link>bt31qve</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>Products</h2>
        <ul>
          <li>
            <Link>b3tvqef</Link>
          </li>
          <li>
            <Link>b3t1v</Link>
          </li>
          <li>
            <Link>b3t1qevf</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>About</h2>
        <ul>
          <li>
            <Link>b31qve</Link>
          </li>
          <li>
            <Link>b13tevqf</Link>
          </li>
          <li>
            <Link>3btvqef</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
