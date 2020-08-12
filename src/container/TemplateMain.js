import React from "react";

const TemplateMain = ({ children }) => {
    return (
        <main id="contents" className="main">
            {children}
        </main>
    );
};

export default TemplateMain;
