import IsAuth from "@feature/auth/IsAuth";
import HomePage from "@feature/home/HomePage";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <IsAuth>
      <HomePage />
    </IsAuth>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
