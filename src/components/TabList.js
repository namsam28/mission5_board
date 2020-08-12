import React, { useEffect } from "react";
import TabTemplate from "./TabTemplate";

const TabList = ({ tabContents, active, childTab }) => {
    //console.log(childTab);
    useEffect(() => {
        //console.log("탭컨텐츠", tabContents);
    }, [tabContents, active]);

    return (
        <div className={`tab-content ${active ? "active" : ""}`}>
            {tabContents}
            {childTab && <TabTemplate tabData={childTab} />}
        </div>
    );
};

export default React.memo(TabList);
