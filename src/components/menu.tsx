import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface DashboardProps {
  children: React.ReactNode;
}

const Menu = ({ children }: DashboardProps) => {
  const router = useRouter();
  return (
    <div className="container mx-auto flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              aria-label="User menu"
              className="rounded-full bg-rose-300 p-4 hover:bg-rose-400 focus:outline-slate-800"
            >
              <HamburgerMenuIcon className="h-8 w-8 text-slate-800" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="flex flex-col gap-1 rounded border border-slate-800 bg-slate-100 p-4 mx-4"
              sideOffset={5}
            >
              <DropdownMenu.Item
                onClick={() => void router.push("/dashboard")}
                className="cursor-pointer focus:outline-none"
              >
                Dashboard
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="h-[1px] bg-rose-300" />
              <DropdownMenu.Item
                onClick={() => void router.push("/settings")}
                className="cursor-pointer focus:outline-none"
              >
                Settings
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="h-[1px] bg-rose-300" />
              <DropdownMenu.Item
                className="cursor-pointer focus:outline-none"
                onClick={() =>
                  void signOut({
                    callbackUrl: "/",
                  })
                }
              >
                Log Out
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
      {children}
    </div>
  );
};

export default Menu;
