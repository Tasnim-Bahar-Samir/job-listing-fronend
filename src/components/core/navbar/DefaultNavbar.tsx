"use client";
import React from "react";
import Text from "../typography/Text";
import Button from "../button/Button";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Spinner from "../spinner/Spinner";
import Image from "next/image";

const DefaultNavbar = ({ group }: { group?: string }) => {
  const { status } = useSession();
  return (
    <nav className=" bg-blue-50">
      <div className="commonContainer grid grid-cols-3 py-5">
        <div>
          <Link className="flex items-center" href={"/"}>
            <Text
              className="font-mono text-blue-500"
              variant={"header_1"}
              label={"Find"}
            />
            <Image
              className="-ml-[10px]"
              src={"/images/logo.png"}
              width={63}
              height={75}
              alt="LOGO"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          {group === "CANDIDATE" && (
            <Link className="" href={"/job/saved"}>
              <Text className="" variant={"button_3"} label={"Saved Jobs"} />
            </Link>
          )}
          {group === "COMPANY" && (
            <Link href={"/job/create"}>
              <Text className="" variant={"button_3"} label={"Create Job"} />
            </Link>
          )}
        </div>
        <div className="flex justify-end">
          {status == "authenticated" ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="">
                  <AvatarImage src={"/images/avatar.png"} />
                  <AvatarFallback>
                    <Spinner />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>
                  <div className="py-1 capitalize">Group: {group}</div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div
                    onClick={() => signOut()}
                    className="cursor-pointer py-1"
                  >
                    <Text variant={"paragraph_3"} label={"Log Out"} />
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
      </div>
    </nav>
  );
};

export default DefaultNavbar;
