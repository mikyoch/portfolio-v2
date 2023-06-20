import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { RiCloseLine } from "react-icons/ri";

const MobileNavigation = ({ changeState }) => {
  const handleClick = () => {
    changeState(false);
  };

  return (
    <>
      <button
        className="btn btn-small btn-transparent absolute left-auto right-4 top-4 z-10 h-10 w-10 rounded-full p-0 text-center text-3xl"
        onClick={() => changeState(false)}
      >
        <RiCloseLine className="inline" />
      </button>
      <nav className="relative max-h-full w-full overflow-y-auto">
        <ul className="mb-0 list-none pl-0">
          <li className="block">
            <Link href="/">
              <a
                className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                onClick={() => handleClick()}
              >
                Home
                <span className="absolute bottom-5 left-0 top-auto inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
              </a>
            </Link>
          </li>
          <li className="block">
            <Link href="/about">
              <a
                className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                onClick={() => handleClick()}
              >
                About
                <span className="absolute bottom-5 left-0 top-auto inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
              </a>
            </Link>
          </li>
          <li className="block">
            <Link href="/resume">
              <a
                className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                onClick={() => handleClick()}
              >
                Resume
                <span className="absolute bottom-5 left-0 top-auto inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
              </a>
            </Link>
          </li>
          <li className="block">
            <Link href="/works">
              <a
                className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                onClick={() => handleClick()}
              >
                Works
                <span className="absolute bottom-5 left-0 top-auto inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
              </a>
            </Link>
          </li>
          <li className="block">
            <Link href="/posts/1">
              <a
                className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                onClick={() => handleClick()}
              >
                Blog
                <span className="absolute bottom-5 left-0 top-auto inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
              </a>
            </Link>
          </li>
          <li className="block">
            <Link href="/contact">
              <a
                className="group relative inline-block cursor-pointer py-2 text-lg uppercase tracking-wider text-heading before:text-primary"
                onClick={() => handleClick()}
              >
                Contact
                <span className="absolute bottom-5 left-0 top-auto inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
              </a>
            </Link>
          </li>
        </ul>
        <div className="header-button pt-8">
          <ScrollLink
            activeClass="active"
            to="section-contact"
            spy={true}
            smooth="easeInQuad"
            offset={-74}
            duration={1000}
            className="btn btn-small"
            onClick={() => handleClick()}
          >
            <span>Hire Me</span>
          </ScrollLink>
        </div>
      </nav>
    </>
  );
};

export default MobileNavigation;
