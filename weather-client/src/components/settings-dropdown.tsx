import { Button } from "@/components/ui/button";
import { GearIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";

export default function SettingsDropdown({
  fahrenheit,
  setFahrenheit,
}: {
  fahrenheit: boolean;
  setFahrenheit: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <GearIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Game Settings</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <div className="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm w-full justify-between">
              <p>Temperature</p>
              <p className="self-end">
                °C{" "}
                <Switch
                  className=""
                  checked={fahrenheit}
                  onCheckedChange={() => {setFahrenheit(!fahrenheit)
                  localStorage.setItem("tempUnit",String(!fahrenheit));
                  }}
                />{" "}
                °F
              </p>
            </div>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
