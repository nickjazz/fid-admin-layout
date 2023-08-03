interface IFProps {
  children?: React.ReactNode;
}

const PageRight = ({ children }: IFProps) => {
  return (
    <div className='fixed right-0 top-0  min-h-screen w-80 bg-slate-100 pt-[64px]'>
      {children}
    </div>
  );
};

export default PageRight;
