export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6106dce916b098c4b56f761a',
                  title: 'Sanity Studio',
                  name: 'max-portfolio-studio-6tkhnjgh',
                  apiId: 'b1af8bf7-289d-47e4-a2f7-ada76c2e980e'
                },
                {
                  buildHookId: '6106dce9fa1df8ec828a7c4e',
                  title: 'Blog Website',
                  name: 'max-portfolio-web-9bg1zjn3',
                  apiId: '87cc4783-fcb8-47bc-94ff-2defba403ae2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mplumer/max-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://max-portfolio-web-9bg1zjn3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
