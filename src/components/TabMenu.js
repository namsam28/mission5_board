import React, { useEffect } from "react";

const TabMenu = ({ tab, active, handleClick }) => {
    const onClick = () => {
        handleClick(tab.id);
    };
    useEffect(() => {
        //console.log("탭메뉴", tab.id);
    }, [handleClick, active, tab]);

    return (
        <li className={active ? "active" : ""}>
            <button type="button" onClick={onClick}>
                {tab.tabTitle}
            </button>
        </li>
    );
};

export default React.memo(TabMenu);
