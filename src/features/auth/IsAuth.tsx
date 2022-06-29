import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface IsAuthProps {}

const IsAuth: React.FC<IsAuthProps> = ({ children }) => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.replace("/login");
    }
  }, [session, router]);

  return <>{children}</>;
};

export default IsAuth;
