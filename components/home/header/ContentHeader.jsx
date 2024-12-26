import { Calendar, MapPin, Plane, Hotel, Car, Train } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
const ContentHeader = () => {
  return (
    <div className="py-12 bg-transparent text-white">
      <h1 className="text-4xl font-bold  mb-6 text-center my-10">
        Your Trip Starts Here
      </h1>
      <div className="flex justify-center items-center h-4 space-x-4 mb-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">Secure payment</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Payments are secured using the latest industry standards</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Separator orientation="vertical" />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">Support in approx. 30s</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>We usually answer phone calls within 30 seconds</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-7xl mx-auto">
        {/* Navigation Tabs */}
        <div className="flex space-x-6 mb-6">
          <button className="flex items-center space-x-2 text-blue-600 font-medium">
            <Plane className="w-5 h-5" />
            <span>Flights</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600">
            <Hotel className="w-5 h-5" />
            <span>Hotels</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600">
            <Train className="w-5 h-5" />
            <span>Trains</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600">
            <Car className="w-5 h-5" />
            <span>Cars</span>
          </button>
        </div>

        {/* Search Form */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="From"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="To"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Depart"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Return"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContentHeader;
