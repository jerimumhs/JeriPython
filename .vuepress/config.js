module.exports = {
    title: 'JeriPython web Site',
    description: 'Just playing around for JeriPython',
    base: '/JeriPython/',
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        nav: [
          { text: 'Folder 1', link: '/folder1/' },
          { text: 'Folder 2', link: '/folder2/' },
        //   { text: 'Github', link: 'https://github.com/jerimumhs/JeriPython' },
        //   {
        //     text: 'Languages',
        //     ariaLabel: 'Language Menu',
        //     items: [
        //       { text: 'Chinese', link: '/language/chinese/' },
        //       { text: 'Japanese', link: '/language/japanese/' }
        //     ]
        //   }
        ],
        sidebar: {
            '/folder1/': [
                '',     /* /folder1/ */
                'page-a',  /* /folder1/page-a.html */
                'page-b'   /* /folder1/page-b.html */
            ],
            '/folder2/': [
                '',     /* /folder2/ */
                'page-a',  /* /folder2/page-a.html */
                'page-b'   /* /folder2/page-b.html */
            ],
            // fallback
            '/': [
                '',        /* / */
                'page-a', /* /page-a.html */
                'page-b'    /* /page-b.html */
            ]
        },
        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'jerimumhs/JeriPython',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'Github',

        // Optional options for generating "Edit this page" link
        // defaults to false, set to true to enable
        editLinks: true,
        // default value is true. Allows to hide next page links on all pages
        nextLinks: true,
        // default value is true. Allows to hide prev page links on all pages
        prevLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Nos ajude a melhorar essa página!'
    }
}