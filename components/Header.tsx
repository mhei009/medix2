import Image from "next/image";
import Link from "next/link"; // Import Link for client-side navigation
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between bg-blue-50 py-4 shadow-md z-10 px-6">
      {/* Logo */}
      <div className="flex items-center">
        <div className="max-w-[496px] w-full flex justify-center">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/assets/icons/logo-full.webp"
              height={100}
              width={100}
              alt="logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </div>

      {/* hamburger dropdown small screen */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-white shadow-lg rounded-md"
          >
            <DropdownMenuItem asChild>
              <Link
                href="/"
                className="font-bold text-green-500 hover:text-blue-500"
              >
                Get Started
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/about-us"
                className="font-bold text-ligt-700 hover:text-blue-500"
              >
                About Us
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/contact"
                className="font-bold text-gray-700 hover:text-blue-500"
              >
                Contact Us
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/faq"
                className="font-bold text-gray-700 hover:text-blue-500"
              >
                FAQs
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Navigation Links for Larger Screens */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="font-bold text-green-500 hover:text-blue-500">
          Get Started
        </Link>
        <Link
          href="/about-us"
          className="font-bold text-gray-700 hover:text-blue-500"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="font-bold text-gray-700 hover:text-blue-500"
        >
          Contact Us
        </Link>
        <Link
          href="/faq"
          className="font-bold text-gray-700 hover:text-blue-500"
        >
          FAQs
        </Link>
      </nav>
    </header>
  );
};

export default Header;
