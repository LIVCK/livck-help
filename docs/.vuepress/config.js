// https://raw.githubusercontent.com/LIVCK/livck-docs/main/README.md

module.exports = {
    title: 'LIVCK.com - Self-Hosted',
    description: 'Here can you find detailed documentation of the self-hosted software.',
    dest: './dist',

    async additionalPages() {
        const rp = require('request-promise');

        const readme = await rp('https://raw.githubusercontent.com/LIVCK/livck-docs/main/README.md')
        const changelog = await rp('https://raw.githubusercontent.com/LIVCK/livck-docs/main/changelog.md')
        const docker = await rp('https://raw.githubusercontent.com/LIVCK/livck-docs/main/docker-compose.md')
        const update = await rp('https://raw.githubusercontent.com/LIVCK/livck-docs/main/upgrade.md')
        const updateDocker = await rp('https://raw.githubusercontent.com/LIVCK/livck-docs/main/upgrade-docker.md')
        const updateOld = await rp('https://raw.githubusercontent.com/LIVCK/livck-docs/main/upgrade-for-old-versions.md')
        return [
            {
                path: '/',
                content: readme
            },
            {
                path: '/docker-compose/',
                content: docker,
            },
            {
                path: '/upgrade/',
                content: update,
            },
            {
                path: '/upgrade-docker/',
                content: updateDocker,
            },
            {
                path: '/upgrade-for-old-versions/',
                content: updateOld,
            },
            {
                path: '/changelog/',
                content: changelog
            },
        ]
    },

    themeConfig: {
        sidebarDepth: 2,
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
                    ['/', 'Installation'],
                    ['/docker-compose/', 'Installation via Docker-Compose'],
                    ['/upgrade/', 'Upgrade LIVCK'],
                    ['/upgrade-docker/', 'Upgrade LIVCK via Docker-Compose'],
                    ['/upgrade-for-old-versions/', 'Upgrade LIVCK (for 1.1.3)'],
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


