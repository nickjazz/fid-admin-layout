const Metric = () => {
  return (
    <div className='flex justify-evenly gap-4'>
      <div className='flex-1 rounded-md bg-white p-5'>
        <div className='text-2xl font-bold'>1,000</div>
        <div className='text-sm text-slate-500'>Total Users</div>
        <div className='h-1.4 mt-2 w-full rounded-full bg-gray-200 dark:bg-gray-700'>
          <div
            className='h-1.5 rounded-full bg-red-600'
            style={{ width: '85%' }}
          />
        </div>
      </div>

      <div className='flex-1 rounded-md bg-white p-5'>
        <div className='text-2xl font-bold'>2,020</div>
        <div className='text-sm text-slate-500'>Total Products</div>
        <div className='h-1.4 mt-2 w-full rounded-full bg-gray-200 dark:bg-gray-700'>
          <div
            className='h-1.5 rounded-full bg-blue-600'
            style={{ width: '45%' }}
          />
        </div>
      </div>

      <div className='flex-1 rounded-md bg-white p-5'>
        <div className='text-2xl font-bold'>421</div>
        <div className='text-sm text-slate-500'>Total Orders</div>
        <div className='h-1.4 mt-2 w-full rounded-full bg-gray-200 dark:bg-gray-700'>
          <div
            className='h-1.5 rounded-full bg-green-600'
            style={{ width: '45%' }}
          />
        </div>
      </div>

      <div className='flex-1 rounded-md bg-white p-5'>
        <div className='text-lg font-bold text-blue-600'>USD 195,020</div>
        <div className='text-sm text-slate-500'>Total Sales</div>
      </div>
    </div>
  );
};

export default Metric;
