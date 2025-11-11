import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

const SocialMediaLinks = ({ icon, alternative, color, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "h-10 w-10 rounded-full bg-[#281C4D] grid place-content-center transition-all duration-300 hover:scale-110",
        color
      )}
      aria-label={alternative}
    >
      <FontAwesomeIcon icon={icon} className="w-5 h-5" />
    </a>
  );
};

export default SocialMediaLinks;
