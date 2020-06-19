export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eec432b38650a96ed406947',
                  title: 'Sanity Studio',
                  name: 'hannahs-healthy-habits-studio',
                  apiId: '762396f7-b066-4b37-baf2-e6e090c0fcdb'
                },
                {
                  buildHookId: '5eec432b3ee7b668b77c1f8d',
                  title: 'Blog Website',
                  name: 'hannahs-healthy-habits',
                  apiId: 'ca8d3ac7-ef5b-44fd-800b-f52e2cbb15d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hannahblou/hannahs-healthy-habits',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://hannahs-healthy-habits.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
