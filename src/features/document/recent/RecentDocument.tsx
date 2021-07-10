import Icon from "@component/icon/Icon";
import IconButton from "@component/icon/IconButton";
import { useRouter } from "next/router";

interface RecentDocumentProps {
  id: string;
  filename: string;
  date: string;
}

const RecentDocument: React.FC<RecentDocumentProps> = ({
  id,
  filename,
  date,
}) => {
  const router = useRouter();

  return (
    <div
      className="flex items-center p-4 rounded-lg cursor-pointer 
    hover:bg-gray-100 text-gray-700 text-sm"
      onClick={() => router.push(`/doc/${id}`)}
    >
      <Icon name="article" size="3xl" color="blue" />
      <p className="flex-grow pl-5 w-10 pr-10 truncate">{filename}</p>
      <p className="pr-5 text-sm">{date}</p>
      <IconButton rounded>
        <Icon name="more_vert" size="3xl" />
      </IconButton>
    </div>
  );
};

export default RecentDocument;
