interface IFProps {
  children?: JSX.Element;
}

const SideMenu = ({ children }: IFProps) => {
  return (
    <div data-name='SideMenu' className='flex-1 overflow-scroll px-4 py-4 '>
      {children}
    </div>
  );
};

export default SideMenu;
