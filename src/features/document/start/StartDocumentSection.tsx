import Icon from "@component/icon/Icon";
import IconButton from "@component/icon/IconButton";
import BlankDocument from "./BlankDocument";

interface StartDocumentSectionProps {}

const StartDocumentSection: React.FC<StartDocumentSectionProps> = () => {
  return (
    <section className="bg-[#F8F9FA] pb-10 px-10">
      <div className="flex items-center justify-between py-6">
        <h2 className="text-gray-700 text-lg">Start a new document</h2>
        <IconButton>
          <Icon name="more_vert" size="3xl" />
        </IconButton>
      </div>
      <BlankDocument />
    </section>
  );
};

export default StartDocumentSection;
