import ITextInput from  "../interface/ITextInput"

const CustomInput: React.FC<ITextInput> = ({ id, type = "text", name, value, onChange, placeholder }) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
