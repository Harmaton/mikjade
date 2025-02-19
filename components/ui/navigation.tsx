"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./button"

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-16">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-background text-black">Our Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >

                    <div className="mb-2 mt-4 text-lg font-medium">
                      <Image src={"/mkjlogo.png"} width={200} height={50} alt="Logo" />
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                        MKJ is a leading provider of solutions for Intererior design, architecture, and construction. 
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="#" title="Custom Furniture">
                Bespoke furniture, wardrobes, and storage units tailored to client needs.
                </ListItem>
                <ListItem href="#" title="Kitchen Interiors">
                Stylish and functional modular kitchens with high-quality materials.
                </ListItem>
                <ListItem href="#" title="Living Room Furniture">
                Elegant and comfortable living room sets, entertainment units, and décor.
                </ListItem>
                <ListItem href="#" title="Office Set-up">
                Designing and implementing efficient and inspiring office spaces.
                </ListItem>
                <ListItem href="#" title="CCTV Installation">
                We provide high-quality CCTV installation services to ensure the safety and security of your property.
                </ListItem>
                <ListItem href="#" title="Office Desk Making">
                Custom-made desks and workstations designed for productivity.
                </ListItem>
                <ListItem href="#" title="Security solutions">
                Our solutions include state-of-the-art cameras, monitoring systems, and maintenance to guarantee effective surveillance.
                </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
       
        <NavigationMenuItem className="hover:text-blue-500">
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className="bg-background text-black  hover:text-blue-500">
             About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:text-blue-500">
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className="bg-background text-black ">
                <Button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Book a Consultation
                </Button>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
