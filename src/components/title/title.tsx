interface Props {
  title: string;
  subtitle: string;
}

export default function (props: Props) {
  return (
    <div class="w-full text-center mb-10 mt-5 px-4">
      <div class="text-primary font-bold text-3xl uppercase">{props.title}</div>
      <div>{props.subtitle}</div>
    </div>
  );
}
