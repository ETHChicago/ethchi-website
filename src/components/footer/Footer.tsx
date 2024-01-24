import {
  FaTelegram,
  FaTwitter,
  FaGithub,
  FaDiscord,
  FaParagraph,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import links from "../../data/links";

export default function Footer() {
  return (
    <div className="p-5 max-w-screen bg-primaryBackground text-primaryType">
      <div className="md:m-10 flex justify-center md:justify-between text-xs">
        <div className="m-5 w-64">
          <img
            src="/images/brand/ethchi_logo_vertical_white.png"
            alt="ethchi logo"
            width={200}
            height={200}
          />
        </div>

        <div className="m-2 md:m-10">
          <h3 className="font-mono font-bold">RESOURCES</h3>
          <ul>
            <a href={links.docs.intro}>
              <li className="hover:underline opacity-40">Docs</li>
            </a>
            <a href={links.docs.builderResources}>
              <li className="hover:underline opacity-40">Hacker Resources</li>
            </a>
            <Link to={links.sitePaths.conference}>
              <li className="hover:underline opacity-40">Conference Home</li>
            </Link>
            <a href={links.taikaiHome} target="_blank" rel="noreferrer">
              <li className="hover:underline opacity-40">Hackathon Home</li>
            </a>
            <a href={links.forum} target="_blank" rel="noreferrer">
              <li className="hover:underline opacity-40">Forum</li>
            </a>
            <a href={links.pretalx_schedule} target="_blank" rel="noreferrer">
              <li className="hover:underline opacity-40">Schedule</li>
            </a>
          </ul>
        </div>

        <div className="m-2 md:m-10">
          <h3 className="font-bold font-mono">CONTRIBUTE</h3>
          <ul>
            <a href={links.forms.volunteerApp}>
              <li className="hover:underline opacity-40">
                Volunteer Application
              </li>
            </a>
            <a href={links.forms.partnerApp}>
              <li className="hover:underline opacity-40">
                Partnership Application
              </li>
            </a>
            <a href={links.forms.speakerApp} target="_blank" rel="noreferrer">
              <li className="hover:underline opacity-40">
                Speaker Application
              </li>
            </a>
            <a href={links.forms.sideEventApp} target="_blank" rel="noreferrer">
              <li className="hover:underline opacity-40">
                Side Event Submission
              </li>
            </a>
          </ul>
        </div>
      </div>

      <div className="flex flex-col text-sm">
        <div className="flex flex-row space-x-10 justify-center mt-10">
          <a href={links.social.discord} target="_blank" rel="noreferrer">
            <FaDiscord size={30} />
          </a>
          <a href={links.social.telegram} target="_blank" rel="noreferrer">
            <FaTelegram size={30} />
          </a>
          <a href={links.social.twitter} target="_blank" rel="noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href={links.social.github} target="_blank" rel="noreferrer">
            <FaGithub size={30} />
          </a>
          <a href={links.social.mirror} target="_blank" rel="noreferrer">
            <img
              src="/images/icons/mirror-icon.png"
              alt="mirror icon"
              width={22}
              height={20}
            />
          </a>
          <a href={links.social.paragraph} target="_blank" rel="noreferrer">
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 104.531 104"
            >
              <path
                id="Paragraph_Logo_Shape_1"
                data-name="Paragraph Logo Shape 1"
                className="cls-1"
                d="M757.25,626.967l-0.237,23.753-7.606-.238,0.237-30.641c20-.228,38.922-1.655,45.161,11.876a24.838,24.838,0,0,1,1.426,14.015c-3.629,17.9-17.664,18.252-38.981,18.052q0.118,10.924.238,21.853h41.358c2.964,0,12.209,1.141,13.548-.713q0.118-33.132.238-66.271c2.108-.077,6.1-0.473,7.368.475q-0.237,36.933-.475,73.872H749.882l-0.475-.238V663.784l-29.236-.238V610.577c0-3.507-.76-16.36.951-17.577l72.732,0.238q0.357,0.237.713,0.475v6.175l-0.237.475H744.89c-3.093,0-15.94-.747-17.351.475q-0.118,21.138-.238,42.281c0,3.089-1.188,11.4.476,13.3l15.45,0.238c14.8,0,36.846,2.972,43.021-5.7,1.86-2.612,2.429-5.923,2.377-10.451C788.455,625.772,772.525,626.753,757.25,626.967ZM801.7,593.238l18.064,0.237-0.237,18.052-7.131-.237V600.363l-10.934-.237Q801.58,596.682,801.7,593.238Z"
                transform="translate(-717.469 -591)"
              ></path>
            </svg>
          </a>
        </div>

        <div className="mt-14">
          <h3 className="text-center opacity-40">
            Created with ❤️ by Chicagoans, for everyone.
          </h3>
        </div>
      </div>
    </div>
  );
}
