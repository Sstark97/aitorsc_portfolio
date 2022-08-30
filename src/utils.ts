import { EncryptStorage } from 'encrypt-storage';

export const formatDate = (date: Date): string => {
    const month = date.getMonth().toString().length === 1 ? `0${date.getMonth()}` : date.getMonth();
    const day = date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate();
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export const secureStorage = new EncryptStorage(import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY);