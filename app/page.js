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
import { Content } from "next/font/google";
import ContentHeader from "@/components/home/header/ContentHeader";
export default function Home() {
  return (
    <>
      <header
        className="relative bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage:
            "url('https://ak-d.tripcdn.com/images/05E3s12000cmarxu50A1C.webp')",
        }}
      >
        {/* Header */}
        <NavbarContainer />
        {/* Hero Section */}

        {/* Search Panel */}
        <ContentHeader />
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
