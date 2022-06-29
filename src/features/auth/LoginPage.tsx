import Button from "@component/buttons/Button";
import { signIn } from "next-auth/react";
import Image from "next/image";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <div
      className="flex flex-col items-center justify-center
    min-h-screen py-2"
    >
      <Image
        src="/images/banner.png"
        height="300"
        width="550"
        objectFit="contain"
        alt="banner"
      />
      <Button
        className="w-44 mt-10"
        type="filled"
        ripple="light"
        color="blue"
        onClick={signIn}
      >
        Login
      </Button>
      <div
        className="text-base bg-[#3B82F6] text-white
          py-4 px-12 absolute bottom-0 w-full"
      >
        <strong>Disclaimer:</strong> This is not the official Google Docs. It is
        a redesign, built purely for educational purpose.
      </div>
    </div>
  );
};

export default LoginPage;
