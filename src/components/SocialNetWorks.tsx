import { SOCIAL_ROUTES } from "../const";
import { SocialRoutes } from "../types";
import "@styles/containers/nav.scss";

const SocialNetWorks = () => (
    <section id="social_container">
        {SOCIAL_ROUTES.map((route: SocialRoutes) => (
            <a aria-label={route.label} className="social_icons" href={route.route} key={route.route}>
                <route.icon/>
            </a>
        ))}
    </section>
);

export default SocialNetWorks;
