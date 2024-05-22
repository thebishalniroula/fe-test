import { cn } from "../../libs/cn";

type ButtonProps = JSX.IntrinsicElements["button"];
const Button = (props: ButtonProps) => {
  const { className, children, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className={cn(
        "bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
