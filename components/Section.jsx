const Section = ({ children }) => {
  return (
    <section className={"py-12 px-16 sm:px-20 md:px-24"}>
      <div className={"max-w-4xl w-full mx-auto"}>{children}</div>
    </section>
  );
};
export default Section;
