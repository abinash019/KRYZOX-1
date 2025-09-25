import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/shadcn-ui/navigation-menu";
import { NavLink } from "react-router-dom";
import Logout from "../auth/Logout"; // your fully functional Logout component

export default function ProfileDropdown({ userData }) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent active:bg-transparent p-0 h-auto font-semibold text-purple-300 shadow-none outline-none">
                        {userData?.name || "Ram"}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="bg-[#241B3A] border border-purple-500/20 rounded-2xl shadow-lg p-4 w-[220px]">
                        <ul className="flex flex-col gap-3">
                            <li>
                                <NavLink
                                    to="/admin"
                                    className="block px-3 py-2 rounded-lg text-purple-200 hover:text-white hover:bg-[#1B1230] transition-all"
                                >
                                    Admin
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/profile/edit"
                                    className="block px-3 py-2 rounded-lg text-purple-200 hover:text-white hover:bg-[#1B1230] transition-all"
                                >
                                    Edit Profile
                                </NavLink>
                            </li>
                            <li>
                                <Logout />
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
