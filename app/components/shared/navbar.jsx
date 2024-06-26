
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Select, SelectItem, Spacer, commonColors, Button } from "@nextui-org/react";
import { useState } from "react";
import Logo from "../../assets/anemlogo.png"
import Image from "next/image";

export default function CustomNavbar() {
    const [isActive, SetIsActive] = useState(true)
    const LangIcon = () => {
        return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
        </svg>
    }
    return (
        <Navbar
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-primary",
                ],
            }}
        >
            <NavbarBrand>
                <Image
                    src={Logo}
                    alt="logo"
                    width={70}
                    quality={100}
                />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={isActive}>
                    <Link color={isActive ? "" : "foreground"} href="#" aria-current="page">
                        <div onClick={() => SetIsActive(!isActive)}>Acceuil</div>
                    </Link>
                </NavbarItem>
                <Spacer x={4} />
                <NavbarItem isActive={!isActive}>
                    <Link color={isActive ? "foreground" : ""} href="#">
                        <div onClick={() => SetIsActive(!isActive)}>FAQ</div>
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <Select
                    size="sm"
                    placeholder="lang"
                    className="w-32"
                    aria-label="lang"
                    defaultSelectedKeys={["fr"]}
                    startContent={<LangIcon />}
                >
                    <SelectItem key="fr" value="Français">
                        Français
                    </SelectItem>
                    <SelectItem key="ar" value="العربية">
                        العربية
                    </SelectItem>
                </Select>
                <Link href="/auth/login">
                    <Button color="primary" className="text-primary font-bold" variant="bordered" >
                        Se connecter
                    </Button>
                </Link>
            </NavbarContent>
        </Navbar>
    )
}
