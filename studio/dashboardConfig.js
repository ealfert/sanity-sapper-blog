export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5f31959b4b1ae52c40db3e19',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-t75ko71p',
                  apiId: '00e5b0f2-a4ea-493c-9b63-3ff61d6912ac'
                },
                {
                  buildHookId: '5f31959bea11bf1a4ead00c9',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-jsqhrfff',
                  apiId: '3bcd3ab7-e38a-4a47-ac8f-520afd0bcf69'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ealfert/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-jsqhrfff.netlify.app', category: 'apps'}
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
