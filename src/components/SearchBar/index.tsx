import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

const SearchBar = () => {
  return (
    <div className='flex items-center space-x-1 overflow-hidden rounded-md border pl-2'>
      <MagnifyingGlassIcon className='h-4 w-4 opacity-20' />
      <input
        type='text'
        placeholder='Search for anything...'
        className='min-w-[200px] p-2 text-sm text-slate-500 hover:outline-none focus-visible:outline-none active:outline-none '
      />
    </div>
  );
};
export default SearchBar;
