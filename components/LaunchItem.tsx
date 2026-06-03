import {formatDate} from "@/utils/time";
import Button from "@/components/ui/Button";
import {LaunchData} from "@/types/launches";
import {FC, CSSProperties, MouseEventHandler} from "react";
import Link from "next/link";

type Props = {
    launch: LaunchData;
    addToFavorite?: () => void;
    removeFromFavorite: () => void;
    isFavorite: boolean;
    style?: CSSProperties;
}

const LaunchItem: FC<Props> = ({launch, addToFavorite, removeFromFavorite, isFavorite, style}) => {
    const addToFavoritesHandler: MouseEventHandler<HTMLButtonElement> | undefined = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (addToFavorite) {
            addToFavorite();
        }
    }
    const removeFromFavoritesHandler: MouseEventHandler<HTMLButtonElement> | undefined = (e) => {
        e.preventDefault();
        e.stopPropagation();
        removeFromFavorite();
    }
    return (
        <Link
            href={`/${launch.id}`}
            className="flex justify-between items-center px-4 py-2 hover:bg-gray-400 hover:text-white cursor-pointer absolute top-0 left-0 w-full text-xs sm:text-sm md:text-lg"
            style={style}
        >
            <div>
                <span>Name: {launch.name}</span>,
                <span> launch date: {formatDate(launch.date_utc)}</span>
            </div>
            {isFavorite && <Button className="bg-red-700 max-w-50" onClick={removeFromFavoritesHandler}>
                Remove from favorites
            </Button>}
            {!isFavorite && addToFavorite && <Button onClick={addToFavoritesHandler}>Add to favorites</Button>}
        </Link>
    )
}

export default LaunchItem;