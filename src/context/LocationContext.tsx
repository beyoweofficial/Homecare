import { createContext, useContext, useState, ReactNode } from 'react';
import { tamilNaduDistricts } from '../data/districts';

interface LocationContextType {
  selectedDistrict: string;
  setSelectedDistrict: (district: string) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [selectedDistrict, setSelectedDistrict] = useState<string>(tamilNaduDistricts[0]);

  return (
    <LocationContext.Provider value={{ selectedDistrict, setSelectedDistrict }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}