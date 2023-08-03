interface IFProps {
  children?: React.ReactNode;
}

const PageLeft = ({ children }: IFProps) => {
  return <div className='left-0 top-0 w-64 pl-10 pt-10'>{children}</div>;
};

export default PageLeft;
