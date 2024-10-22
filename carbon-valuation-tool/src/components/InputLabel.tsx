interface InputLabelProps {
  value: string;
  htmlFor: string;
  errorMessage?: string;
  children: React.ReactNode;
}

const InputLabel: React.FC<InputLabelProps> = ({
  value,
  htmlFor,
  errorMessage,
  children,
}) => {
  return (
    <div className='flex self-start flex-col w-full gap-1'>
      <label
        className='font-semibold uppercase text-light-primary'
        htmlFor={htmlFor}
      >
        {value}
      </label>
      {children}
      {errorMessage && (
        <p className='text-red-500 text-xs font-light'>{errorMessage}</p>
      )}
    </div>
  );
};

export default InputLabel;
