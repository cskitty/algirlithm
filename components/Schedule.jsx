const Schedule = ({time, event}) => {
  return (
    <div className={"mb-8 border-l-4 border-primary-500 px-4 py-2"}>
      <h4 className={"text-lg font-medium text-white"}>{time}</h4>
      <h3 className={"text-xl font-medium text-white"}>{event}</h3>
    </div>
  );
};

export default Schedule;