import { createContext, useState, useContext } from 'react';
import api from '@api/index';
import { ChildrenProps, AppState } from '../types';

const context = createContext<AppState>({
    portFolio: {},
    loadPortfolio: () => {}
});

export const AppProvider = ({ children }: ChildrenProps) => {
    const { Provider } = context;

    const [portFolio, setPortfolio] = useState<any>({});

    const loadPortfolio = async () => {
        const userData: any = await api.get("user");
        setPortfolio(userData.data);
    }

    return (
        <Provider value={{ portFolio, loadPortfolio }}>
            {children}
        </Provider>
    );

};

export const useGlobalContext = () => useContext(context);
