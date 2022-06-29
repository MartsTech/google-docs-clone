import IsNotAuth from "features/auth/IsNotAuth";
import LoginPage from "features/auth/LoginPage";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <IsNotAuth>
      <Head>
        <title>Login</title>
      </Head>
      <LoginPage />
    </IsNotAuth>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
