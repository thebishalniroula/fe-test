import { forwardRef } from "react";
import { cn } from "../../libs/cn";

type InputProps = JSX.IntrinsicElements["input"];

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={cn(
          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
          className
        )}
      />
    );
  }
);

export default Input;
