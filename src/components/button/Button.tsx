interface IButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: IButtonProps) => {
  return (
    <button
      className="p-3 bg-[#DAA520] rounded-md text-white cursor-pointer"
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
