const Prize = ({
  title,
  body,
  className = "",
  paragraphClass = "text-center",
}) => {
  return (
    <div
      className={`${className} bg-secondary-800/80 text-primary-100 hover:bg-secondary-50/30 hover:text-secondary-800 duration-150 py-8 px-4 rounded-md shadow-lg hover:shadow-xl`}
    >
      <h3 className={"text-xl font-medium"}>{title}</h3>
      <p className={`${paragraphClass} text-base`}>{body}</p>
    </div>
  );
};

export default Prize;
