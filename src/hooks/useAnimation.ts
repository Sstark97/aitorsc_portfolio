import { secureStorage } from "../utils";

export const useAnimation = (animation_key: string) => {

    const isAnimation = () => secureStorage.getItem(animation_key) !== undefined;

    const setAnimationInLocalStorage = (timeout: number) => {
        setTimeout(() => {
            secureStorage.setItem(animation_key, "true");
        }, timeout);
    }

    const dropAnimationInLocalStorage = () => secureStorage.removeItem(animation_key);


    return { isAnimation, setAnimationInLocalStorage, dropAnimationInLocalStorage };
};
