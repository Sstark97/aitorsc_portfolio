import { memo } from "react";
import { ExpandedIconProps } from "../types";
import "@styles/components/expanded_icon.scss";

const ExpandedIcon = memo(({ handleClickExpanded }: ExpandedIconProps ) => (
    <svg
      className="expanded_icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 35"
      width="30"
      onClick={handleClickExpanded}
    >
      <path d="M5 30L50 5l45 25" fill="none" strokeWidth="5" />
    </svg>
));

export default ExpandedIcon;
