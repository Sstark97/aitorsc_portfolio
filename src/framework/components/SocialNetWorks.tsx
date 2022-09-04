import { ReactSVG } from "react-svg";
import { SOCIAL_ROUTES } from "../../const";
import type { SocialRoutes } from "../../types";
import "@styles/containers/nav.scss";

export default function SocialNetWorks() {
    return(
        <section id="social_container">
        {SOCIAL_ROUTES.map((route: SocialRoutes) => (
            <a aria-label={route.label} className="social_icons" href={route.route} key={route.route}>
                <ReactSVG src={route.icon} />
            </a>
        ))}
    </section>
    )
};

