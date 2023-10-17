export const Title = ({ children, className }) => {
  return (
    <h1
      className={`mt-16 text-5xl sm:text-6xl font-extrabold${
        className ? ` ${className}` : ""
      }`}
    >
      <span className={"title"}>{children}</span>
    </h1>
  );
};

export const Subtitle = ({ children }) => {
  return <h2 className={"text-4xl font-medium mb-4"}>{children}</h2>;
};

export const SubSubtitle = ({ children }) => {
  return <h3 className={"text-3xl font-medium mb-2 mt-4"}>{children}</h3>;
};
