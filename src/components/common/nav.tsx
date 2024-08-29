import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { useState } from "react";
import Logo from "./logo";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const pathname = window?.location?.pathname;
    if (['/signin'].includes(pathname)) {
        return null;
    }

    const menuItems = [
        {
            title: "Profile",
            href: "/profile"
        },
        {
            title: "Dashboard",
            href: "/dashboard"
        },
        {
            title: "Analytics",
            href: "/analytics"
        },
        {
            title: "Help & Feedback",
            href: "/help"
        }
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <Link href="/">
                    <NavbarBrand>
                        <Logo />
                        <p className="font-bold text-inherit">GLANCE</p>
                    </NavbarBrand>
                </Link>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/features">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/docs">
                        Docs
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/pricing">
                        Pricing
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="/signin">Login</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color="primary"
                            className="w-full text-lg"
                            href={item.href}
                            size="lg"
                        >
                            {item.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
