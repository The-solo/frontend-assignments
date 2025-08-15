import { useEffect, useState } from "react";

//Custom Hook
export function useCount(fn, timout) {
    useEffect(() => {
        const value = setInterval(() => {
            fn()
        }, timout);

//clearing the interval as the dependency changes or interval unmounts.
        return ()=>{ 
            clearInterval(value);
        } 
    }, [timout, fn])
}

