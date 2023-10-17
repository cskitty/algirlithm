const Blobs = () => {
  return (
    <>
      <div
        className={
          "blur-3xl bg-pink-200 w-96 h-96 fixed top-36 -left-16 rounded-full"
        }
      />
      <div
        className={
          "blur-3xl mix-blend-multiply bg-primary-200 w-80 h-80 fixed top-12 left-16 rounded-full"
        }
      />
      <div
        className={
          "blur-3xl mix-blend-multiply bg-purple-200 w-96 h-96 fixed top-60 left-1/4 rounded-full"
        }
      />
      <div
        className={
          "blur-3xl mix-blend-multiply bg-pink-200 w-96 h-96 fixed -bottom-36 -right-24 rounded-full"
        }
      />
    </>
  );
};

export default Blobs;
