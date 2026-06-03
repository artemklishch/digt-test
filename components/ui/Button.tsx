import {FC, JSX, MouseEventHandler} from "react";
import Spinner from "@/components/ui/Spinner";

type Props = {
    children: string | JSX.Element[];
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    loading?: boolean;
    className?: string;
}

const Button: FC<Props> = ({children, onClick, type = "button", disabled = false, loading = false, className}) => {
    return (
        <button
            className={`cursor-pointer bg-amber-800 text-white py-1 px-2 rounded-sm active:opacity-5 max-w-40 flex justify-between items-center gap-2 max-h-10 ${className}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            <div className="inline-block truncate">{children}</div>
            {loading && <Spinner className="h-5 w-5"/>}
        </button>
    )
}

export default Button;