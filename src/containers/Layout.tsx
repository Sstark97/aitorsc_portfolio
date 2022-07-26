import '@styles/index.scss';
import { ChildrenProps } from '../types';
import Nav from './Nav';

const Layout = ({ children }: ChildrenProps) => (
    <div className="container">
        <header>
            <Nav />
        </header>

        <main>
            {children}
        </main>

    </div>
);

export default Layout;
