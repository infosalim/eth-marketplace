

export function Button({ 
    children, 
    className='text-white bg-indigo-600 hover:bg-indigo-700',
    ...rest
}) {
  return (
    <button
    {...rest}
      className={`disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer px-8 py-3 rounded-md border text-base font-medium transition transition-duration-400 border-none ${className}`}
    >
      {children}
    </button>
  );
}
