import {useCallback, useEffect, useState} from "react";
import {LaunchData} from "@/types/launches";
import LocalStorageService from "@/services/LocalStorageService";

export type UseFavorites = () => {
    favorites: LaunchData[],
    addFavorite: (launch: LaunchData) => void,
    removeFavorite: (id: string) => void
}
export const useFavorites: UseFavorites = () => {
    const [favorites, setFavorites] = useState<LaunchData[]>([]);

    const addFavorite = useCallback((launch: LaunchData): void => {
        LocalStorageService.addToFavorites(launch);
        setFavorites(prev => ([...prev, launch]));
    }, []);

    const removeFavorite = useCallback((id: string) => {
        console.log("12")
        LocalStorageService.removeFromFavorites(id);
        setFavorites(prev => prev.filter(f => f.id !== id));
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFavorites(LocalStorageService.getFavorites());
    }, []);

    return {favorites, addFavorite, removeFavorite};
}