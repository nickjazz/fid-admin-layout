interface IFNavigation {
  children?: React.ReactNode;
}

const TopLeft = ({ children }: IFNavigation) => {
  return (
    <div data-name='TopLeft' className='flex w-[inherit] gap-4 px-12'>
      {children}
    </div>
  );
};

export default TopLeft;
