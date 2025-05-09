import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import { SiTelegram, SiMatrix } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const ContactSocial = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex gap-4">
        <SingleContactSocial
          link="mailto:contact@eliasalalam.dev"
          Icon={MdEmail}
          label="Email"
        />
        <SingleContactSocial
          link="https://www.linkedin.com/in/elias-al-alam/"
          Icon={FaLinkedinIn}
          label="LinkedIn"
        />
        <SingleContactSocial
          link="https://t.me/Elijahmks"
          Icon={SiTelegram}
          label="Telegram"
        />
      </div>
      <div className="flex gap-4">
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
          link="https://matrix.to/#/@michmazbout:matrix.org"
          Icon={SiMatrix}
          label="Matrix"
        />
      </div>
    </div>
  );
};

export default ContactSocial;
