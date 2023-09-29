"use client";
import { useState, ChangeEvent, MouseEvent, useEffect } from "react";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import { useRocketContext } from "@/context/rocketsContext";
import { RocketProps } from "@/interface/RocketProps";

interface SearchComponentProps {
  setFilteredRockets: React.Dispatch<React.SetStateAction<RocketProps[]>>;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  setFilteredRockets,
}) => {
  const { rockets } = useRocketContext();
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

  const handleFormSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  };

  const handleReset = () => {
    setSearch("");
    setType("");
    setStatus("");
    setCountry("");
    setFilteredRockets(rockets);
  };

  const handleSearch = () => {
    const filteredResults = rockets.filter((rocket) => {
      const nameMatch = rocket.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const typeMatch = type ? rocket.type === type : true;
      const statusMatch = status ? rocket.active.toString() === status : true;
      const countryMatch = country ? rocket.country === country : true;

      return nameMatch && typeMatch && statusMatch && countryMatch;
    });

    const sortedResults = filteredResults.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setFilteredRockets(sortedResults);
  };

  useEffect(() => {
    setFilteredRockets(rockets);
  }, [setFilteredRockets, rockets]);

  const isSearchDisabled: boolean = !search && !type && !status && !country;
  const isResetDisabled: boolean = isSearchDisabled;

  return (
    <form onSubmit={handleFormSubmit}>
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
            className="rounded-xl border-black pr-2 bg-white border text-black"
          >
            <option value="">Select Type</option>
            <option value="rocket">Rocket</option>
            <option value="capsules" hidden={country !== ""}>
              Capsules
            </option>
          </select>
        </div>
        <div className="p-1">
          <select
            value={status}
            onChange={handleStatusChange}
            className="rounded-xl border-black p-2 bg-white border text-black"
          >
            <option value="">Select Status</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
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
            type="submit"
            label="Search"
            disabled={isSearchDisabled}
          />
          <SecondaryButton
            type="reset"
            label="Reset"
            onClick={handleReset}
            disabled={isResetDisabled}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchComponent;
