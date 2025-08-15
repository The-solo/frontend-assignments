import axios from "axios";
import { useEffect, useState } from "react";

export function useDebouncing({value , timeout}) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        let timeOut = setTimeout(() => {
            setDebouncedValue(value);
        },timeout)

        return() => {
            clearTimeout(timeOut);
        }
    },[value]);
    
    return debouncedValue;
}