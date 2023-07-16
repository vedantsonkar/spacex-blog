"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { RocketProps } from "@/interface/RocketProps";

interface RocketContextProps {
  rockets: RocketProps[];
  loading: boolean;
}

const RocketContext = createContext<RocketContextProps | undefined>(undefined);

export function useRocketContext() {
  const context = useContext(RocketContext);
  if (!context) {
    throw new Error("useRocketContext must be used within a RocketProvider");
  }
  return context;
}

export function RocketProvider({ children }: { children: React.ReactNode }) {
  const [rockets, setRockets] = useState<RocketProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchRocketsData = async () => {
    setLoading(true);
    try {
      const dataFromApi: any = await fetch(
        `${process.env.NEXT_PUBLIC_PHP_BASE_URL}/rockets.php`
      ).then((res) => res.json());
      setRockets(dataFromApi.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRocketsData();
  }, []);

  return (
    <RocketContext.Provider value={{ rockets, loading }}>
      {children}
    </RocketContext.Provider>
  );
}
