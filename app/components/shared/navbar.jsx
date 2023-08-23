"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import Logo from "../../assets/anemlogo.png"
import Image from "next/image";

export default function CustomNavbar() {
    const [isActive, SetIsActive] = useState(true)
    const color = isActive ? "" : "foreground"
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
                    className="w-48"
                    defaultSelectedKeys={["fr"]}
                >
                    <SelectItem key="fr" value="Français">
                        Français
                    </SelectItem>
                    <SelectItem key="ar" value="العربية">
                        العربية
                    </SelectItem>
                </Select>
            </NavbarContent>
        </Navbar>
    )
}
