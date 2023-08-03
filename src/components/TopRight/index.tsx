interface IFProps {
  children?: React.ReactNode;
}

const TopRight = ({ children }: IFProps) => {
  return <div data-name='TopRight'>{children}</div>;
};

export default TopRight;
