import HomePresentation from "@components/HomePresentation";
import { ChildrenProps } from "../types";
import "@styles/containers/home.scss";

const HomeContainer  = ({ children }: ChildrenProps) => (
    <div className="home_container">
        <HomePresentation />
    </div>
);

export default HomeContainer;