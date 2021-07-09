interface DefaultWrapperProps {}

const DefaultWrapper: React.FC<DefaultWrapperProps> = ({ children }) => {
  return <div className="max-w-3xl mx-auto">{children}</div>;
};

export default DefaultWrapper;
