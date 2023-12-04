import GetIcon from "./getIcons";

const LoadMore = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <GetIcon
        icon="ImSpinner8"
        className="text-blue-700 text-3xl animate-spin"
      />
    </section>
  );
};

export default LoadMore;
