import Icon from "@component/icon/Icon";
import IconButton from "@component/icon/IconButton";

interface HeaderRightProps {}

const HeaderRight: React.FC<HeaderRightProps> = ({}) => {
  return (
    <>
      <IconButton className="ml-5 md:ml-20">
        <Icon name="apps" size="3xl" color="gray" />
      </IconButton>

      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
        src={
          "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
        }
        alt="avatar"
      />
    </>
  );
};

export default HeaderRight;
