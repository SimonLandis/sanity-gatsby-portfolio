export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '63287cf5c5e70f433b474d05',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-p2e24pg3',
                  apiId: '74b590a4-b069-4fba-aa22-a059b8b76961'
                },
                {
                  buildHookId: '63287cf5d6c7a640fb90b975',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-rf7ijczs',
                  apiId: 'f800b44d-ea86-4bba-88c8-77155a1b2261'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SimonLandis/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-rf7ijczs.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
