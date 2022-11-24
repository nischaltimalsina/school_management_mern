import { useContext } from "react";
import { Context } from "./context";

export function useToggle() {
    return useContext(Context);
  }