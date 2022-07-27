import { SOCIAL_ROUTES } from "../const";
import { SocialRoutes } from "../types";
import "@styles/nav.scss";

const SocialNetWorks = () => (
    <div id="social_container">
        {SOCIAL_ROUTES.map((route: SocialRoutes) => (
            <a className="social_icons" href={route.route} key={route.route}>
                <route.icon/>
            </a>
        ))}
    </div>
);

export default SocialNetWorks;
