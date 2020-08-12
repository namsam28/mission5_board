const Sitemap = [
    {
        path: "/",
        pagename: "홈",
    },
    {
        path: "/about",
        pagename: "소개",
        depth2: [
            { path: "/motion", pagename: "모션" },
            { path: "/tab", pagename: "탭 넣어보기" },
        ],
    },
    {
        path: "/mypage",
        pagename: "마이페이지",
        depth2: [
            { path: "/info", pagename: "정보" },
            { path: "/secession", pagename: "탈퇴" },
        ],
    },
    {
        path: "/etc",
        pagename: "ETC",
    },
];

export default Sitemap;
