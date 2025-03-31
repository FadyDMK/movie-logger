import logo from '/src/logo.png';

export const navbarData = {
    logo: true,
    logoSrc: logo,
    logoLink: true,
    linkUrl: '#/',
    optionalLinkText: '',
    altText: 'logo',
    links: [
        {
            url: '#/',
            displayInNav: true,
            linkText: 'Home'
        },
        {
            url: '#/log',
            displayInNav: true,
            linkText: 'Log'
        },
        {
            text: 'profile',
            url: '#/profile',
            displayInNav: true,
            linkText: 'Profile'
        },
        {
            url: '#/notfound',
            displayInNav: false,
            linkText: ''
        }
    ]
}