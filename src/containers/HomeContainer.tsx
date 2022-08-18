import { memo } from "react";
import HomePresentation from "@components/HomePresentation";
import { ChildrenProps } from "../types";
import "@styles/containers/home.scss";

const HomeContainer  = memo(({ children }: ChildrenProps) => (
    <div className="home_container">
        <HomePresentation />
    </div>
));

export default HomeContainer;