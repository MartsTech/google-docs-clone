import Icon from "@component/icon/Icon";
import IconButton from "@component/icon/IconButton";

interface HeaderLeftProps {}

const HeaderLeft: React.FC<HeaderLeftProps> = () => {
  return (
    <>
      <IconButton rounded className="hidden md:inline-flex h-20 w-20 ">
        <Icon name="menu" size="3xl" />
      </IconButton>
      <div className="hidden md:inline-flex">
        <Icon name="description" size="5xl" color="blue" />
      </div>

      <h1
        className="hidden md:inline-flex ml-2 text-gray-700 
          text-2xl"
      >
        Docs
      </h1>
    </>
  );
};

export default HeaderLeft;
