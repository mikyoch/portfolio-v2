import {
    RiGithubFill,
    RiLinkedinBoxFill,
    RiDiscordFill,
    RiTelegramFill,
} from "react-icons/ri";
import LeetCodeSVG from "/public/icons/leetcode.svg";
import CodechefSVG from "/public/icons/codechef.svg";
import CodeforcesSVG from "/public/icons/codeforces.svg";

const SocialIcons = ({ data, rounded }) => {
    if (!data) return null;

    return (
        <ul className="mb-0 inline-flex list-none flex-wrap gap-3 pl-0 sm:gap-4">
            {data?.github && (
                <li className="inline-block align-middle">
                    <a
                        href={data?.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
                            rounded ? "rounded-full" : "rounded"
                        }`}
                    >
                        <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                            <RiGithubFill className="inline-block" />
                        </span>
                        <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                            <RiGithubFill className="inline-block" />
                        </span>
                    </a>
                </li>
            )}
            {data?.linkedin && (
                <li className="inline-block align-middle">
                    <a
                        href={data?.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
                            rounded ? "rounded-full" : "rounded"
                        }`}
                    >
                        <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                            <RiLinkedinBoxFill className="inline-block" />
                        </span>
                        <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                            <RiLinkedinBoxFill className="inline-block" />
                        </span>
                    </a>
                </li>
            )}
            {data?.leetcode && (
                <li className="inline-block align-middle">
                    <a
                        href={data?.leetcode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
                            rounded ? "rounded-full" : "rounded"
                        }`}
                    >
                        <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                            <LeetCodeSVG className="inline-block w-[18px]" fill="#BFBECB" />
                        </span>
                        <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                            <LeetCodeSVG className="inline-block w-[18px]" />
                        </span>
                    </a>
                </li>
            )}
            {data?.codechef && (
                <li className="inline-block align-middle">
                    <a
                        href={data?.codechef}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${rounded ? "rounded-full" : "rounded"
                            }`}
                    >
                        <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                            <CodechefSVG className="inline-block w-[18px] h-[18px]" fill="#BFBECB" />
                        </span>
                        <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                            <CodechefSVG className="inline-block w-[18px]" />
                        </span>
                    </a>
                </li>
            )}
            {data?.codeforces && (
                <li className="inline-block align-middle">
                    <a
                        href={data?.codeforces}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${rounded ? "rounded-full" : "rounded"
                            }`}
                    >
                        <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                            <CodeforcesSVG className="inline-block w-[18px]" fill="#BFBECB" />
                        </span>
                        <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                            <CodeforcesSVG className="inline-block w-[18px]" />
                        </span>
                    </a>
                </li>
            )}
        </ul>
    );
};

export default SocialIcons;
