import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { currency } from "@/constants/currency";
const Currency = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">{currency[0].currency}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-52">
        <div className="grid ">
          <h4 className="font-medium leading-none mb-3">Currency</h4>

          {currency.map((item, index) => (
            <div
              key={index}
              className="grid gap-2 px-2 rounded-md hover:bg-gray-100"
            >
              <div className="grid grid-cols-3 items-center gap-4 p-2">
                <Label htmlFor="width" className="col-span-1">
                  {item.currency}
                </Label>
                <Label htmlFor="width" className="col-span-2">
                  {item.title}
                </Label>
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Currency;
