
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";

type Props = {
  page: string;
  id: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, id, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = id.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
