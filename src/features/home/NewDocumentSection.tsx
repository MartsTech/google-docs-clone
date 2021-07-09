import Icon from "@component/icon/Icon";
import IconButton from "@component/icon/IconButton";
import Image from "next/image";

interface NewDocumentSectionProps {}

const NewDocumentSection: React.FC<NewDocumentSectionProps> = ({}) => {
  return (
    <section className="bg-[#F8F9FA] pb-10 px-10">
      <div className="flex items-center justify-between py-6">
        <h2 className="text-gray-700 text-lg">Start a new document</h2>

        <IconButton>
          <Icon name="more_vert" size="3xl" />
        </IconButton>
      </div>

      <div>
        <div
          className="relative h-52 w-40 border-2 cursor-pointer
        hover:border-blue-700 transform duration-200 transition-colors
        ease-in-out"
        >
          <Image src="/images/docs-blank.png" layout="fill" alt="blank" />
        </div>

        <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Blank</p>
      </div>
    </section>
  );
};

export default NewDocumentSection;
