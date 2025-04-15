import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import { GiIceCube } from "react-icons/gi"; // Placeholder glacier icon

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/elias-al-alam/"
        Icon={FaLinkedinIn}
        label="LinkedIn"
      />
      <SingleContactSocial
        link="https://github.com/michmazbout"
        Icon={FiGithub}
        label="GitHub"
      />
      <SingleContactSocial
        link="https://discord.com/users/628877617331830786"
        Icon={FaDiscord}
        label="Discord"
      />
      <SingleContactSocial
        link="https://wp.unil.ch/glace/team/"
        Icon={GiIceCube}
        label="Glacier Team @ UNIL"
      />
    </div>
  );
};

export default ContactSocial;
