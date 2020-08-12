import React, { useState, useCallback } from "react";
import TabMenu from "./TabMenu";
import TabList from "./TabList";

const TabTemplate = ({ tabData }) => {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = useCallback((id) => {
        setActiveTab(id);
    }, []);

    return (
        <div className="tab-wrap">
            <ul className="tab-menu">
                {tabData.map((tab) => {
                    return (
                        <TabMenu
                            key={tab.id}
                            tab={tab}
                            active={tab.id === activeTab ? true : false}
                            handleClick={handleTabClick}
                        />
                    );
                })}
            </ul>
            <div className="tab-contents">
                {tabData.map((tab) => {
                    return (
                        <TabList
                            key={tab.id}
                            tabContents={tab.tabContents}
                            active={tab.id === activeTab ? true : false}
                            childTab={tab.childTab && tab.childTab}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default React.memo(TabTemplate);
