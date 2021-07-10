import Icon from "@component/icon/Icon";
import RecentDocuments from "./RecentDocuments";

interface DocumentsSectionProps {}

const DocumentsSection: React.FC<DocumentsSectionProps> = () => {
  return (
    <section className="bg-white px-10 md:px-0">
      <div className="py-8 text-sm text-gray-700">
        <div className="flex items-center justify-between pb-5">
          <h2 className="font-medium flex-grow">My Documents</h2>
          <p className="mr-12">Date Created</p>
          <Icon name="folder" size="3xl" color="gray" />
        </div>
      </div>
      <RecentDocuments />
    </section>
  );
};

export default DocumentsSection;
