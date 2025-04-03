export declare const getNavbarData: (isAuthed: boolean) => {
    logo: boolean;
    logoSrc: any;
    logoLink: boolean;
    linkUrl: string;
    optionalLinkText: string;
    altText: string;
    links: ({
        url: string;
        displayInNav: boolean;
        linkText: string;
        text?: undefined;
    } | {
        text: string;
        url: string;
        displayInNav: boolean;
        linkText: string;
    })[];
};
