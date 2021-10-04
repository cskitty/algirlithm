import Image from "next/image";
const Organizer = ({ name, role, image }) => {
  return (
    <div
      className={
        "bg-white rounded hover:shadow-xl py-8 px-6 hover:duration-150 duration-700"
      }
    >
      {image ? (
        <div
          className={
            "w-32 h-32 rounded-full border-4 border-primary-300 overflow-hidden mx-auto"
          }
        >
          <Image src={image} placeholder="blur" alt={name} />
        </div>
      ) : (
        <div
          className={
            "w-32 rounded-full border-4 border-primary-300 h-32 bg-gray-100 mx-auto"
          }
        />
      )}

      <h3 className={"text-center text-2xl font-bold mt-3"}>{name}</h3>
      {role && <p className={"text-center text-xl text-gray-400"}>{role}</p>}
    </div>
  );
};

export default Organizer;
