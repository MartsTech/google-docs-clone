import Icon from "@component/icon/Icon";
import IconButton from "@component/icon/IconButton";
import { signOut, useSession } from "next-auth/react";

interface HeaderRightProps {}

const HeaderRight: React.FC<HeaderRightProps> = () => {
  const session = useSession();

  return (
    <>
      <IconButton
        rounded
        className="hidden md:inline-flex h-20 w-20 ml-5 md:ml-20 "
      >
        <Icon name="apps" size="3xl" color="gray" />
      </IconButton>

      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
        src={session?.data?.user?.image || ""}
        onClick={() => signOut()}
        alt="avatar"
      />
    </>
  );
};

export default HeaderRight;
