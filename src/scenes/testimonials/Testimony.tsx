type Props = {
  image: string;
  testimony: string;
  client: string;
};

const Testimony = ({ image, testimony, client }: Props) => {
  return (
    <div className="relative w-auto px-10 h-[12rem] rounded-lg bg-slate-50 flex flex-col justify-center items-center">
      <img
        className="rounded-full w-20 absolute -top-5"
        alt={`${image}`}
        src={image}
      />
      <div className="flex pt-10">
        <p>{`"${testimony}" - ${client}`}</p>
      </div>
    </div>
  );
};

export default Testimony;
