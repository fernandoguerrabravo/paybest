"use client";

// NOTE: If you using svg logo
import logoDark from "@/assets/images/logo/logo-dark.png";
import logoLight from "@/assets/images/logo/logo-light.png";

// NOTE: If you need png/jpeg logo then uncomment, this 2 lines
// import logoDark from "@/assets/images/logo/logo-dark.png";
// import logoLight from "@/assets/images/logo/logo-light.png";
import Image from "next/image";

type ILogoProp = {
    size?: number;
};

const Logo = ({ size = 150 }: ILogoProp) => {
    return (
        <div className="inline">
            <Image src={logoDark} width={150}  height={size} alt="logo-dark" className="hidden dark:inline" />
            <Image src={logoLight} width={150}  height={size} alt="logo-light" className="inline dark:hidden" />
        </div>
    );
};

export { Logo };
