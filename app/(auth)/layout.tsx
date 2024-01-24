import Image from "next/image";
import authImage from "@/public/auth-image.jpg";
import Logo from "@/components/logo";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex text-slate-900">
      <section className="flex w-full flex-col p-8 bg-slate-50">
        <Logo />
        {children}
      </section>
      <section className="hidden w-full lg:flex">
        <Image
          src={authImage}
          alt="Picture of newpaper headlines"
          style={{ objectFit: "cover" }}
          className="w-full"
        />
      </section>
    </div>
  );
}
