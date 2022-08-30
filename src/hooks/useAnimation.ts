import { secureStorage } from "../utils";

export const useAnimation = (animation_key: string) => {

    const isAnimation = () => {
        const animated: string = secureStorage.getItem(animation_key) || "false";

        if (animated !== "false") {
            return true;
        }

        return false;
    }

    const setAnimationInLocalStorage = (timeout: number) => {
        console.log(`setAnimationInLocalStorage: ${timeout}`);
        setTimeout(() => {
            secureStorage.setItem(animation_key, "true");
        } , timeout);
    }

    const dropAnimationInLocalStorage = () => {
        secureStorage.removeItem(animation_key);
    }

    return { isAnimation, setAnimationInLocalStorage, dropAnimationInLocalStorage };
};
