import "./FooterContent.css";
const FooterContent = () => {
  return (
    <div className="links">
      <ul className="list-inline d-flex flex-column flex-md-row justify-content-center align-items-center">
        <li className="pb-4">
          <a href="#" className="text-decoration-none text-white">
            SEARCH
          </a>
        </li>
        <li className="pb-4">
          <a href="#" className="text-decoration-none text-white">
            HELP
          </a>
        </li>
        <li className="pb-4">
          <a href="#" className="text-decoration-none text-white">
            INFORMATION
          </a>
        </li>
        <li className="pb-4">
          <a href="#" className="text-decoration-none text-white">
            PRIVACY POLICY
          </a>
        </li>
        <li className="pb-4">
          <a href="#" className="text-decoration-none text-white">
            SHIPPING DETAILS
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterContent;
