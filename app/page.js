import Image from "next/image";
import {
  Search,
  Calendar,
  MapPin,
  Plane,
  Hotel,
  Car,
  Train,
  CreditCard,
} from "lucide-react";
import NavbarContainer from "@/components/Navbar/NavbarContainer";
import PromotionCarousel from "@/components/home/main/PromotionCarousel";
import { Input } from "@/components/ui/input";
export default function Home() {
  return (
    <>
      <header className="relative bg-blue-400">
        {/* Header */}
        <NavbarContainer />
        {/* Hero Section */}

        {/* Search Panel */}
        <div className="h-96 bg-transparent">
          {" "}
          <h1 className="text-4xl font-bold text-white mb-6 text-center my-10">
            Find Your Next Adventure
          </h1>
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
        <div className="h-10 rounded-t-3xl bg-white"></div>
      </header>

      {/* Promotions Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto mb-6">
          <PromotionCarousel />
        </div>

        <h2 className="text-2xl font-bold mb-6">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={`/api/placeholder/400/200`}
                alt={`Promotion ${i}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium mb-2">Special Deal {i}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Experience amazing travels with our exclusive offers
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold">
                    From THB 1,999
                  </span>
                  <CreditCard className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
