import { EncryptStorage } from 'encrypt-storage';
import api from "@api/index";

export const formatDate = (date: Date): string => {
    const month = date.getMonth().toString().length === 1 ? `0${date.getMonth()}` : date.getMonth();
    const day = date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate();
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export const secureStorage = new EncryptStorage(import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY);

export const isInLocale = async <Type>(key: string, endPoint: string): Promise<Type> => {
    const dataInLocale = secureStorage.getItem(key);
    
    if (dataInLocale) {
      return dataInLocale;
    }

    const { data }: { data: Type } = await api.get(endPoint);
    secureStorage.setItem(key, data);
    return data;

}