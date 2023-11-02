import Link from "next/link";

const Logo = ({ url = "/", text = false }) => {
  return (
    <Link href={url}>
      <a className="sitelogo">
        {text ? (
          <span className="text-4xl font-bold uppercase leading-none text-primary">
            Stephen
          </span>
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* <img
              className="h-16 max-h-full w-auto"
              src="/images/logo.png"
              alt="Stephen"
            /> */}
          </>
        )}
      </a>
    </Link>
  );
};

export default Logo;
