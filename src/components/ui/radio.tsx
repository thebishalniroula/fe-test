import { cn } from "../../libs/cn";

export type RadioOption = { label: string; value: string };

export type RadioProps<T extends RadioOption> = {
  options: T[];
  value: T["value"];
  onChange: (value: RadioOption["value"]) => void;
  className?: string;
  optionClassName?: string;
};

const Radio = <T extends RadioOption>({
  onChange,
  options,
  value,
  className,
  optionClassName,
}: RadioProps<T>) => {
  return (
    <div className={cn("flex gap-3", className)}>
      {options.map((item) => {
        return (
          <label
            key={item.value}
            className={cn(
              "flex gap-1 items-center cursor-pointer",
              optionClassName
            )}
          >
            <input
              type="radio"
              value={item.value}
              checked={item.value === value}
              onChange={(e) => onChange(e.target.value)}
              className="h-4 w-4"
            />
            {item.label}
          </label>
        );
      })}
    </div>
  );
};

export default Radio;
