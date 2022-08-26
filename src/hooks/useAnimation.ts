import { useState, useEffect } from "react";

const useAnimation = (animation_key: string) => {
    const [animation, setAnimation] = useState(false);

    const isAnimation = () => {
        const animated: string = localStorage.getItem(animation_key) || "false";

        if (animated !== "false") {
            return true;
        }

        return false;
    }

    const setAnimationInLocalStorage = () => {
        localStorage.setItem(animation_key, "true");
    }

    const dropAnimationInLocalStorage = () => {
        localStorage.removeItem(animation_key);
    }

    useEffect(() => {

        if(!isAnimation()) {
            setAnimationInLocalStorage();
            setAnimation(true);
        }

    }, [animation]); 

    return { animation, dropAnimationInLocalStorage };
};

export default useAnimation;