import Header from "@component/header/Header";
import DefaultWrapper from "@component/wrappers/DefaultWrapper";
import NewDocumentSection from "./NewDocumentSection";
import RecentDocumentsSection from "./RecentDocumentsSection";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <>
      <Header />

      <DefaultWrapper>
        <NewDocumentSection />
        <RecentDocumentsSection />
      </DefaultWrapper>
    </>
  );
};

export default HomePage;
