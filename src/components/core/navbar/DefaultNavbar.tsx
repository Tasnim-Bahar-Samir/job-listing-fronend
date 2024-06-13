'use client'
import React from "react";
import Text from "../typography/Text";
import Button from "../button/Button";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Spinner from "../spinner/Spinner";

const DefaultNavbar = () => {
  const { status } = useSession();
  return (
    <nav className=" bg-blue-50">
      <div className="commonContainer flex items-center justify-between py-5">
       <div>
       <Link className="inline-block" href={'/'}>
          <Text label={"LOGO"} variant={"header_2"} />
        </Link>
       </div>
        {status == "authenticated" ? (
           <DropdownMenu>
           <DropdownMenuTrigger>
             <Avatar className="">
               <AvatarImage src={'/images/avatar.png'} />
               <AvatarFallback>
                 <Spinner />
               </AvatarFallback>
             </Avatar>
           </DropdownMenuTrigger>
           <DropdownMenuContent className="bg-white">
             <DropdownMenuItem>
               <div onClick={() => signOut()} className="cursor-pointer py-1">
                 <Text variant={'paragraph_3'} label={'Log Out'} />
               </div>
             </DropdownMenuItem>
           </DropdownMenuContent>
         </DropdownMenu>
        ) : (
          <div className="flex items-center gap-4">
            <Link href={"/auth/register"}>
              <Button variant={"outlineBtn"} label="Register" />
            </Link>
            <Link href={"/auth/login"}>
              <Button variant={"regulerBtn"} label="Login" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DefaultNavbar;
