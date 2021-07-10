import Icon from "@component/icon/Icon";

interface HeaderSearchProps {}

const HeaderSearch: React.FC<HeaderSearchProps> = () => {
  return (
    <div
      className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 
          bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600
          focus-within:shadow-md"
    >
      <Icon name="search" size="3xl" color="gray" />
      <input
        type="text"
        placeholder="Search"
        className="flex-grow px-5 text-base bg-transparent outline-none"
      />
    </div>
  );
};

export default HeaderSearch;
