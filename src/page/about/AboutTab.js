import React from "react";
import TabTemplate from "../../components/TabTemplate";

//임시 tab 데이터
const tabData = [
    {
        id: 1,
        tabTitle: "탭1번",
        tabContents: "탭 컨텐츠 1번 입니다.",
    },
    {
        id: 2,
        tabTitle: "탭2번",
        tabContents: "탭 컨텐츠 2번 입니다.",
    },
    {
        id: 3,
        tabTitle: "탭3번",
        tabContents: "탭 컨텐츠 3번 입니다.",
        childTab: [
            {
                id: 1,
                tabTitle: "서브 탭1번",
                tabContents: "탭 컨텐츠 1번 입니다.",
            },
            {
                id: 2,
                tabTitle: "서브 탭2번",
                tabContents: "탭 컨텐츠 2번 입니다.",
            },
            {
                id: 3,
                tabTitle: "서브 탭3번",
                tabContents: "탭 컨텐츠 3번 입니다.",
            },
        ],
    },
    {
        id: 4,
        tabTitle: "탭4번",
        tabContents: "탭 컨텐츠 4번 입니다.",
    },
];

const AboutTab = () => {
    return (
        <section className="about-tab">
            <p>탭 기능 만들어보기</p>
            <TabTemplate tabData={tabData}></TabTemplate>
        </section>
    );
};

export default React.memo(AboutTab);
