// https://raw.githubusercontent.com/LIVCK/livck-docs/main/README.md

module.exports = {
    title: 'LIVCK - Documentation',
    description: 'Here can you find detailed documentation of the software.',
    dest: './dist',

    async additionalPages() {
        const rp = require('request-promise');

        const readme = await rp('https://raw.githubusercontent.com/LIVCK/livck-docs/main/README.md')
        const changelog = await rp('https://raw.githubusercontent.com/LIVCK/livck-docs/main/changelog.md')
        return [
            {
                path: '/',
                content: readme
            },
            {
                path: '/changelog/',
                content: changelog
            }
        ]
    },

    themeConfig: {
        sidebarDepth: 1,
        search: false,
        nav: [
            {text: 'LIVCK', link: 'https://livck.com'},
            {text: 'Github', link: 'https://github.com/LIVCK'},
            {text: 'Twitter', link: 'https://twitter.com/LIVCKCOM'},
        ],
        sidebar: [

            {
                title: 'Getting Started',
                collapsable: false,
                children: [
                    ['/', 'Installation & Usage'],
                ],
            },
            {
                title: 'Changelog',
                collapsable: false,
                children: [
                    ['/changelog/', 'Changelog'],
                ],
            },

        ],
    },
    head: [
        ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png'}],
        ['link', {rel: 'icon" type="image/png', sizes: '32x32', href: '/favicon-32x32.png'}],
        ['link', {rel: 'icon" type="image/png', sizes: '16x16', href: '/favicon-16x16.png'}],
        ['link', {rel: 'manifest', href: '/site.webmanifest'}],
        ['style', {}, 'img + .icon.outbound {display: none;}'],
    ],
    plugins: [
        [
            'sitemap',
            {
                hostname: 'https://help.livck.com',
            },
        ],
    ],
}


