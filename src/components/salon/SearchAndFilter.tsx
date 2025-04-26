
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onSort: (value: string) => void;
}

export const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ onSearch, onSort }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full max-w-7xl mx-auto mb-8 px-4">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-lg shadow-sm">
        <div className="relative flex-1 w-full">
          <Input
            type="text"
            placeholder="Search styles..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              onSearch(e.target.value);
            }}
            className="pl-10 w-full"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <select
            onChange={(e) => onSort(e.target.value)}
            className="px-4 py-2 border rounded-md flex-1 sm:flex-none"
          >
            <option value="popular">Most Popular</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
          </select>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
};
