import Header from "@component/header/Header";
import DefaultWrapper from "@component/wrappers/DefaultWrapper";
import DocumentsSection from "@feature/document/recent/DocumentsSection";
import StartDocumentSection from "@feature/document/start/StartDocumentSection";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Header />
      <DefaultWrapper>
        <StartDocumentSection />
        <DocumentsSection />
      </DefaultWrapper>
    </>
  );
};

export default HomePage;
