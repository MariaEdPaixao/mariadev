interface TitleProps {
  title: string;
}

export default function Title(props: TitleProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <h2 className="text-[36px] text-black font-bold">{props.title}</h2>
      <hr className="border-[#244070] w-80 self-center md:self-start" />
    </div>
  );
}
