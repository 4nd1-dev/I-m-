import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import { SocialMedias } from "../components/SocialMedias";
import { TranslateButton } from "../components/TranslateButton";

export default function HeaderNav() {
  const { text, handleLanguage } = useContext(LanguageContext);

  return (
    <nav className="md:inline hidden h-full flex">
      <ul className="h-full flex items-center gap-3 border-amber-100 text-sm font-normal text-gray-100">
        <li>
          <a>{text.header.link1}</a>
        </li>
        <li>
          <a>{text.header.link2}</a>
        </li>
        <li>
          <a>{text.header.link3}</a>
        </li>
        <li>
          <a>{text.header.link4}</a>
        </li>
        <li>
          <a>{text.header.link5}</a>
        </li>
        <li>
          <a>{text.header.link6}</a>
        </li>

        <hr className="w-[1px] h-6 bg-gray-600 ml-20" />

        <div className="h-full flex justify-center items-center">
          <SocialMedias />
          <TranslateButton />
        </div>
      </ul>
    </nav>
  );
}
