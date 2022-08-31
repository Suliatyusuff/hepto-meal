import Image from "next/image";
import Link from "next/link";
import { logo, MenuIcon } from "assets";

export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-5 mb-16 md:px-10 py-2 border-b border-b-[#000000]/80">
            <div className="flex items-center">
                <Link href="/">
                    <a className="text-2xl font-bold text-primary-500">
                        <Image src={logo} alt="logo" width={130} height={50} />
                    </a>
                </Link>
            </div>
            <div className="flex items-center ">
                <Link href="/home">
                    <a className="text-primary-500 hover:text-primary-500/80 font-medium text-lg">
                        Home
                    </a>
                </Link>
                <Link href="/Preferences">
                    <a className="text-primary-500 hover:text-primary-500/80 font-medium text-lg ml-5">
                        Preferences
                    </a>
                </Link>
                <Link href="/Preferences">
                    <a className="text-primary-500 hover:text-primary-500/80 font-medium text-lg ml-5">
                        Meal Plan
                    </a>
                </Link>
                <Link href="/Preferences">
                    <a className="text-primary-500 hover:text-primary-500/80 font-medium text-lg ml-5">
                        Log Food
                    </a>
                </Link>
            </div>
            <div className="flex items-center">
                <input type="search" placeholder="Search..." className="bg-black/20 h-12 px-3 focus:border-black/40 focus:outline-none text-black/30 rounded-lg mr-40" />

                <Image src={MenuIcon} alt="logo" width={50} height={50} className="rounded-full" />
            </div>
        </nav>
    )
}