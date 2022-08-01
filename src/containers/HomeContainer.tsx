import HomePresentation from "@components/HomePresentation";
import { ChildrenProps } from "../types";

const HomeContainer  = ({ children }: ChildrenProps) => (
    <div className="container">
        <HomePresentation />
    </div>
);

export default HomeContainer;