"use client";

import { cn } from "@/lib/utils";
import { Eye, EyeOff, LucideProps } from "lucide-react";
import { ChangeEvent, ReactNode, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  onTogglePassword?: () => void;
  className?: string;
}

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  icon,
  onTogglePassword,
  className,
  ...props
}: InputProps) => {
  const [showPassword, setshowPassword] = useState(false);

  const toggleShowPassword = () => {
    setshowPassword((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "flex justify-between items-center gap-4 p-3 text-slate-500 focus-within:text-orange-500 border border-slate-300 rounded text-sm w-full max-w-80 focus-within:border-orange-500 transition-all duration-200 ease-in",
        className
      )}
    >
      {/* Icon */}
      {icon}
      {/* Input */}
      <input
        className="bg-transparent w-full placeholder:text-slate-500 focus:outline-none text-slate-900 placeholder:font-medium font-medium transition-all duration-200 ease-in text-sm outline-none border-none"
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
        {...props}
      />
      {/* Show/Hide Password */}
      {type === "password" && (
        <span
          onClick={toggleShowPassword}
          className="cursor-pointer select-none"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </span>
      )}
    </div>
  );
};
