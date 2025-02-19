import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ChevronDown, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export function NavbarSheet() {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="ghost">
        <Menu size={20} className="" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white text-black">

        <SheetHeader className="flex flex-row items-center space-x-2 mb-2">
          <SheetTitle className="text-white flex"> </SheetTitle>
          <Image src={"/mkjlogo.png"} className="grayscale" width={50} height={50} alt="Logo" />
        </SheetHeader>
        <hr />
        <div className="flex flex-col space-y-6 mt-6 ">
        <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-2"> <span>Solutions</span> <ChevronDown className="h-4 w-4" /> </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Our Services</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                Custom Furniture
              </DropdownMenuItem>
              <DropdownMenuItem>
                Kitchen Interiors
              </DropdownMenuItem>
              <DropdownMenuItem>
               Living Room Furniture
              </DropdownMenuItem>
              <DropdownMenuItem>
                Office Set-up
              </DropdownMenuItem>
              <DropdownMenuItem>
               Office Desk Making
              </DropdownMenuItem>
              <DropdownMenuItem>
               Office Working Space
              </DropdownMenuItem>
              <DropdownMenuItem>
               CCTV Installation
              </DropdownMenuItem>
              <DropdownMenuItem>
                Security Solutions
              </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>

        <Link href='#'>About Us</Link>
        <Link href='#'>
        <Button  className="w-full bg-blue-500 hover:bg-green-700">Book a Consultation</Button>
        </Link>
        </div>

        <SheetFooter className="">
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
