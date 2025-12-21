import { Contact, Instagram, Mail } from "lucide-react";
import ContactBtn from "./ContactBtn";
type Props = {
  className?: string;
};

function Profile({ className }: Props) {
  const iconStyle =
    "w-10 h-10 hover:opacity-80 hover:bg-[#FFFDF1] hover:text-[#252422] hover:rounded-2xl p-2 duration-300 transition-all cursor-pointer";
  return (
    <div
      className={`${className} w-[350px] bg-neutral-900 text-[#FFFDF1] text-center px-8 py-10 flex flex-col items-center gap-2 rounded-lg sticky top-30 self-start`}
    >
      <img
        src="/1.jpeg"
        alt="Profile"
        className="rounded-full w-[250px] h-[250px] brightness-[1]  object-fit cover "
      />
      <h1 className="font-bold text-[25px] mt-5">Thiago Bustamante</h1>
      <span className="text-[#BFBAB0] mb-2">Cali, Colombia</span>
      <p className="text-[#BFBAB0]">
        Software Engineer | Web Developer | <br /> FullStack Developer
      </p>
      <div className="flex gap-4 text-white">
        <Instagram className={iconStyle} />
        <Mail className={iconStyle} />
      </div>
      <ContactBtn className="mt-18 w-fit" />
    </div>
  );
}

export default Profile;
