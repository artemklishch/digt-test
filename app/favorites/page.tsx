"use client"

import {useFavorites} from "@/hooks/useFavorites";
import LaunchItem from "@/components/LaunchItem";

export default function FavoritesPage() {
    const {favorites, removeFavorite} = useFavorites();
    return (
        <div className="flex flex-col flex-1 font-sans w-full h-full">
            <div className="h-full overflow-auto px-4 md:px-20">
                {
                    favorites.map((launch) => {
                        return (
                            <LaunchItem
                                key={launch.id} launch={launch}
                                removeFromFavorite={() => removeFavorite(launch.id)}
                                isFavorite
                                style={{position: "relative"}}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}