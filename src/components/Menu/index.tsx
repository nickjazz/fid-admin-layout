interface IFProps {
  data?: {
    id: string | number;
    name: string;
    url?: string;
    icon?: JSX.Element;
    submenu?: {
      id: string | number;
      name: string;
      url?: string;
      icon?: JSX.Element;
    }[];
  }[];
}

const Menu = ({ data }: IFProps) => {
  return (
    <div className='flex flex-col text-sm'>
      {data?.map((x) => {
        return (
          <div
            key={x.id}
            className='flex cursor-pointer items-center gap-4 rounded-md px-2 py-2 text-slate-500 hover:text-slate-600'
          >
            {x.icon}
            {x.name}
          </div>
        );
      })}
    </div>
  );
};
export default Menu;
