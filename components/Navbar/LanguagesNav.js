import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { flags } from "@/constants/languages";
const DefaultFlag = flags[0].icon;
const LanguagesNav = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <DefaultFlag />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-52">
        <div className="grid ">
          <div className="space-y-2 mb-3">
            <h4 className="font-medium leading-none">Languages</h4>
            <p className="text-sm text-muted-foreground">prefered language</p>
          </div>
          {flags.map((flag, index) => (
            <div
              key={index}
              className="grid gap-2 px-2 rounded-md hover:bg-gray-100"
            >
              <div className="grid grid-cols-3 items-center gap-4 p-2">
                <flag.icon className="w-5 h-5" />
                <Label htmlFor="width" className="col-span-2">
                  {flag.title}
                </Label>
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default LanguagesNav;
