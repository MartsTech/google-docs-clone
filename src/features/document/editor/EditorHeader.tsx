import Button from "@component/buttons/Button";
import Icon from "@component/icon/Icon";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface EditorHeaderProps {
  filename: string;
}

const EditorHeader: React.FC<EditorHeaderProps> = ({ filename }) => {
  const router = useRouter();
  const session = useSession();

  return (
    <header className="flex justify-between items-center p-3 pb-1">
      <span onClick={() => router.push("/")} className="cursor-pointer">
        <Icon name="description" size="5xl" color="blue" />
      </span>
      <div className="flex-grow">
        <h2>{filename}</h2>
        <div
          className="flex items-center text-sm space-x-1 -ml-1
        h-8 text-gray-600"
        >
          <p className="option">File</p>
          <p className="option">Edit</p>
          <p className="option">View</p>
          <p className="option">Insert</p>
          <p className="option">Format</p>
          <p className="option">Tools</p>
        </div>
      </div>
      <Button
        color="lightBlue"
        type="filled"
        ripple="light"
        className="hidden md:inline-flex h-10"
      >
        <Icon name="people" size="md" />
        Share
      </Button>

      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="rounded-full cursor-pointer h-10 w-10 ml-2"
        src={session?.data?.user?.image || ""}
        alt="avatar"
      />
    </header>
  );
};

export default EditorHeader;
