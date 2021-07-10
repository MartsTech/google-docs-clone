import IsNotAuth from "features/auth/IsNotAuth";
import LoginPage from "features/auth/LoginPage";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <IsNotAuth>
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
