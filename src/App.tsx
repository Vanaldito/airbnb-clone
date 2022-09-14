import { useFilterValues } from "./hooks/use-filter-values";
import Navbar from "./components/Navbar";
import Properties from "./components/Properties";
import FilterValues from "./contexts/FilterValues";

import "./App.css";

export default function App() {
  const filterValues = useFilterValues();

  return (
    <FilterValues.Provider value={filterValues}>
      <Navbar />
      <Properties />
    </FilterValues.Provider>
  );
}
