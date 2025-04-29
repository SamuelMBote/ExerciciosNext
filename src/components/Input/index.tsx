import React from 'react';
type InputProps = React.ComponentProps<'input'> & {
  label: string;
};
const Input = ({ type, id, label, value, ...props }: InputProps) => {
  return (
    <div className="w-72 my-4">
      <div className=" w-full min-w-[200px] h-10 flex flex-col p-2 m-2">
        {' '}
        <label htmlFor={id} className="text-sm font-mono mb-1">
          {label}
        </label>
        <input
          className="bg-transparent border-2 border-black rounded-lg focus:outline-2 focus:outline-blue-800 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 placeholder:p-2 "
          placeholder={label}
          id={id}
          type={type}
          value={value}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
