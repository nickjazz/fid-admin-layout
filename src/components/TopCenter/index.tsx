interface IFProps {
  children?: React.ReactNode;
}

const TopCenter = ({ children }: IFProps) => {
  return <div data-name='TopCenter'>{children}</div>;
};

export default TopCenter;
