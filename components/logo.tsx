import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        "font-oswald text-2xl font-semibold lg:text-3xl",
        className
      )}
    >
      <span className="text-orange-500">DECE</span>
      <span className="text-slate-900">NUEZ</span>
    </span>
  );
}
