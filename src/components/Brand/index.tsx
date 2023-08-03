interface IFProps {
  className?: string;
}

const Brand = ({ className }: IFProps) => {
  return <div className={`text-sm uppercase ${className} `}>Brand</div>;
};

export default Brand;
