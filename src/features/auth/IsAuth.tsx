import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface IsAuthProps {}

const IsAuth: React.FC<IsAuthProps> = ({ children }) => {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace("/login");
    }
  }, [session, router]);

  return <>{children}</>;
};

export default IsAuth;
