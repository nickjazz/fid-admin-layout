interface IFProps {
  children?: JSX.Element;
}

const SideBottom = ({ children }: IFProps) => {
  return (
    <div data-name='SideBottom' className='p-4 px-6 text-sm'>
      {children}
    </div>
  );
};

export default SideBottom;
