"use client";
import { useState, ChangeEvent, MouseEvent } from "react";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

interface SearchComponentProps {}

const SearchComponent: React.FC<SearchComponentProps> = () => {
  const [search, setSearch] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [isCapsulesSelected, setIsCapsulesSelected] = useState<boolean>(false);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
    setIsCapsulesSelected(e.target.value === "capsules");
    if (e.target.value === "capsules") {
      setCountry("");
    }
  };

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  const handleReset = () => {
    setSearch("");
    setType("");
    setStatus("");
    setCountry("");
  };

  const handleSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Perform search logic
  };

  const isSearchDisabled: boolean = !search && !type && !status && !country;
  const isResetDisabled: boolean = isSearchDisabled;

  return (
    <div className="flex flex-wrap border-y py-4 w-full items-center justify-center gap-y-2 gap-x-4 border-neutral-200 dark:invert">
      <div className="p-1">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
          className="rounded-xl p-2 bg-white placeholder-black border border-black text-black"
        />
      </div>
      <div className="p-1">
        <select
          value={type}
          onChange={handleTypeChange}
          className="rounded-xl border-black p-2 bg-white border text-black"
        >
          <option value="">Select Type</option>
          <option value="rocket">Rocket</option>
          <option value="capsules">Capsules</option>
        </select>
      </div>
      <div className="p-1">
        <select
          value={status}
          onChange={handleStatusChange}
          className="rounded-xl border-black p-2 bg-white border text-black"
        >
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="retired">Retired</option>
          <option value="unknown">Unknown</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div className="p-1">
        <select
          value={country}
          onChange={handleCountryChange}
          disabled={isCapsulesSelected}
          className="rounded-xl border-black p-2 bg-white border text-black"
        >
          <option value="">Select Country</option>
          <option value="United States">United States</option>
          <option value="Republic of the Marshall Islands">
            Republic of the Marshall Islands
          </option>
        </select>
      </div>
      <div className="p-2">
        <PrimaryButton
          label="Search"
          onClick={handleSearch}
          disabled={isSearchDisabled}
        />
        <SecondaryButton
          label="Reset"
          onClick={handleReset}
          disabled={isResetDisabled}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
