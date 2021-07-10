import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface IsNotAuthProps {}

const IsNotAuth: React.FC<IsNotAuthProps> = ({ children }) => {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.replace("/");
    }
  }, [session, router]);

  return <>{children}</>;
};

export default IsNotAuth;
