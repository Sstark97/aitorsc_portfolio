import { useState } from "react";

export const useAnimation = (animation_key: string) => {
    const [animation, setAnimation] = useState(false);

    console.log(animation);

    const isAnimation = () => {
        const animated: string = localStorage.getItem(animation_key) || "false";

        if (animated !== "false") {
            return true;
        }

        return false;
    }

    const setAnimationInLocalStorage = (timeout: number) => {
        setTimeout(() => {
            localStorage.setItem(animation_key, "true");
            setAnimation(true);
        } , timeout);
    }

    const dropAnimationInLocalStorage = () => {
        localStorage.removeItem(animation_key);
        setAnimation(false);
    }

    return { isAnimation, setAnimationInLocalStorage, dropAnimationInLocalStorage };
};
