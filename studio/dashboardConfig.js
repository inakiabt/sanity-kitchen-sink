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
                  buildHookId: '61143b5ffaac191b3e354e87',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-57neu3ot',
                  apiId: 'b6d4acac-2ee3-430f-a9cc-61c435be746f'
                },
                {
                  buildHookId: '61143b5f70877d1def90b1ea',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-odf2y6t7',
                  apiId: '2b62e156-0964-48ad-aa0d-afa066cef5f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/inakiabt/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-odf2y6t7.netlify.app', category: 'apps'}
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
