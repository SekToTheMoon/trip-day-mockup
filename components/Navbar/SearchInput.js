// "use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Search } from "lucide-react";
const SearchInput = () => {
  // const searchURL = useSearchParams();
  // const url = usePathname();
  // const searchParams = searchURL.get("search");
  // const { replace } = useRouter();
  // const [search, setSearch] = useState(searchParams?.toString() || "");

  // const handleSearch = useDebouncedCallback((value) => {
  //   const params = new URLSearchParams(searchURL);
  //   if (value) {
  //     params.set("search", value);
  //   } else {
  //     params.delete("search");
  //   }
  //   replace(`${url}?${params.toString()}`);
  // }, 500);

  // useEffect(() => {
  //   // code body
  //   if (!searchParams) {
  //     setSearch("");
  //   }
  // }, [searchParams]);

  return (
    <div className="relative flex-1">
      <button className="absolute right-0 top-0 p-2 m-1 text-muted-foreground bg-blue-400 rounded-md flex items-center justify-center">
        <Search className="h-4 w-4" />
      </button>
      <Input
        type="text"
        placeholder="Destination, hotel, flight"
        className="max-w-md "
        // onChange={(e) => {
        //   setSearch(e.target.value);
        //   handleSearch(e.target.value);
        // }}
        // value={search}
      />
    </div>
  );
};
export default SearchInput;
