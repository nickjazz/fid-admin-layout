interface IFProps {
  data: {
    id: number;
    name: string;
    icon?: JSX.Element;
  }[];
}

const Navigation = ({ data }: IFProps) => {
  return (
    <div className='flex gap-6'>
      {data?.map((x) => {
        return (
          <div
            className='cursor-pointer text-sm font-medium text-slate-500 hover:text-slate-900'
            key={x?.id}
          >
            {x?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
