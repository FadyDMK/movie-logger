import logo from '/src/logo.png';
export const getNavbarData = (isAuthed) => {
    return {
        logo: true,
        logoSrc: logo,
        logoLink: true,
        linkUrl: '/',
        optionalLinkText: '',
        altText: 'logo',
        links: [
            {
                url: '/',
                displayInNav: true,
                linkText: 'Home'
            },
            {
                url: '/log',
                displayInNav: isAuthed,
                linkText: 'Log'
            },
            {
                text: 'profile',
                url: '/profile',
                displayInNav: isAuthed,
                linkText: 'Profile'
            },
            {
                url: '/notfound',
                displayInNav: false,
                linkText: ''
            },
            {
                url: '/auth/login',
                displayInNav: !isAuthed,
                linkText: 'Log In'
            },
            {
                url: '/auth/register',
                displayInNav: !isAuthed,
                linkText: 'Sign Up'
            },
            {
                url: '/auth/logout',
                displayInNav: isAuthed,
                linkText: 'Log Out'
            }
        ]
    };
};
