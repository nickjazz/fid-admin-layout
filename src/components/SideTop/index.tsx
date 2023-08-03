interface IFProps {
  children?: React.ReactNode;
}

const SideTop = ({ children }: IFProps) => {
  return (
    <div
      data-name='SideTop'
      className='flex min-h-[64px] items-center border-b border-b-slate-100/20 px-6'
    >
      {children}
    </div>
  );
};

export default SideTop;
