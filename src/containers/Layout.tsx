import '@styles/index.scss';
import { ChildrenProps } from '../types';

const Layout = ({ children }: ChildrenProps) => (
    <div className="container">
        <header>

        </header>

        <main>
            {children}
        </main>

    </div>
);

export default Layout;
