"use client";
import clsx from "clsx";
import { useState } from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}

const TextField = ({ className, label, ...props }: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-2">
      <div className="text-field-wrapper">
        {label && (
          <label className={clsx("block mb-2 text-sm font-medium", {
            "text-primary": isFocused,
          })}>
            {label}
          </label>
        )}
        <input
          type="text"
          className={`bg-white-bg dark:bg-dark-bg border border-primary-lightest text-sm rounded-lg focus:ring-primary focus:outline-primary focus:border-primary block w-full p-2.5 ${className}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>
    </div>
  );
};

export default TextField;
