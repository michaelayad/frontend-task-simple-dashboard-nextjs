"use client";
import clsx from "clsx";
import { useState } from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  label?: string;
}

const TextArea = ({ className, label, ...props }: TextAreaProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-4">
      {label && (
        <label
          className={clsx("block mb-2 text-sm font-medium", {
            "text-primary": isFocused,
          })}
        >
          {label}
        </label>
      )}
      <textarea
        className={clsx(
          "bg-white-bg dark:bg-dark-bg border border-primary-lightest text-sm rounded-lg focus:ring-primary focus:outline-primary focus:border-primary block w-full p-2.5 resize-y",
          className
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </div>
  );
};

export default TextArea;
