import { GearIcon } from '@radix-ui/react-icons';

const ActionButton = () => {
  return (
    <div className='flex cursor-pointer items-center gap-4 opacity-60 hover:opacity-100'>
      <GearIcon />
      More settings
    </div>
  );
};

export default ActionButton;
