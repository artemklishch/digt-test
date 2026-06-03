import {LOCAL_STORAGE} from "@/utils/constants";
import {LaunchData} from "@/types/launches";

class LocalStorageService {
    getFavorites = (): LaunchData[] => {
        const value = localStorage.getItem(LOCAL_STORAGE.favoritesLaunchesKey);
        return value ? JSON.parse(value) : [];
    }

    addToFavorites(value: LaunchData) {
        const favorites: LaunchData[] = this.getFavorites();
        favorites.push(value);
        localStorage.setItem(LOCAL_STORAGE.favoritesLaunchesKey, JSON.stringify(favorites));
    }

    removeFromFavorites(id: string) {
        const favorites: LaunchData[] = this.getFavorites().filter(fav => fav.id !== id);
        localStorage.setItem(LOCAL_STORAGE.favoritesLaunchesKey, JSON.stringify(favorites));
    }
}

export default new LocalStorageService();