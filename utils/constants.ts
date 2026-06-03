// localStorage keys
export type LocalStorageKeys = {
    favoritesLaunchesKey: string;
}
export const LOCAL_STORAGE: LocalStorageKeys = {
    favoritesLaunchesKey: 'favoritesLaunches'
}

// route paths
export type FavoritePaths = {
    homepage: string;
    favorites: string;
}
export const PAGES_PATHS: FavoritePaths = {
    homepage: "/",
    favorites: "/favorites"
};

// request constants
export const BASE_URL = 'https://api.spacexdata.com/v4'; // TODO: this value is usually put in the .env file
export type Endpoints = {
    launchesQuery: string;
    launches: string;
    rockets: string;
    launchpads: string;
}
export const API_ENDPOINTS: Endpoints = {
    launchesQuery: "/launches/query",
    launches: "/launches",
    rockets: "/rockets",
    launchpads: "/launchpads",
};
export const COMMON_HEADERS: HeadersInit = {
    "Content-Type": "application/json"
}

// other
export const ITEMS_PER_PAGE = 50;
