const path = require('path');

module.exports = {
  siteName: 'Korean Series',
  siteDescription: 'The Most Popular Korean Series',
  siteUrl: 'https://ThitiratSaelim.github.io',
  pathPrefix: '/6110110113_gridsome',

  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: false,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
    },
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: 'content/site/*.json'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Author',
        path: './content/author/*.md'
      }
    }, 
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
        refs: {
          author: 'Author',
          tags: {
            typeName: 'Tag',
            create: true
          },
          category: {
            typeName: 'Category',
            create: true
          }
        }
      }
    }
  ],

  transformers : {
    remark : {
      plugins : [
        '@noxify/gridsome-remark-table-align',
        ['@noxify/gridsome-remark-classes', {
          'paragraph': 'text-normal font-serif py-2',
          'table': 'table table-striped',
          'tableCell[align=center]' : 'text-center',
          'tableCell[align=right]': 'text-right',
          'list[ordered=true]': 'list-decimal ml-5',
          'list:not([ordered=true])': 'list-disc ml-5'
        }]
      ]
    }
  },

  templates: {
    Blog: [
      {
        path: '/6110110113_gridsome/blog/:title'
      }
    ],
    Category: [{
      path: '/6110110113_gridsome/category/:title',
      component: '~/templates/Category.vue'
    }],
    Author: [{
      path: '/6110110113_gridsome/author/:name',
      component: '~/templates/Author.vue'
    }],
    Tag: [{
      path: '/6110110113_gridsome/tags/:title',
    }],
  }
}
