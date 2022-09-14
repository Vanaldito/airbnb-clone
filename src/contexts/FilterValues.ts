import { createContext } from "react";
import { FilterValues } from "../types";

export default createContext<FilterValues | null>(null);
