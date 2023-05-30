require('dotenv').config()

module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: process.env.DISQUS_SHORTNAME
      }
    },
    { 
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "GA-TRACKING_ID", // Google Analytics / GA
        ], 
      },
    },
    
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        chunkSize: 10000,
        queries: require('@elegantstack/gatsby-blog-algolia/src/queries')
      }
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-science',
      options: {
        services: {
          disqus: true,
          algolia: true
        },
        sources: {
          contentful: true,
          local: false
        },
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL
      }
    }
  ],
  siteMetadata: {
    //General Site Metadata
    title: 'MohamedShams',
    name: 'FlexiBlog',
    description: 'Official website for mohamed shams',
    address: 'alexandria, semouha',
    email: 'shamsmohamed155@gmail.com',
    phone: '+201206867667',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/gatsbyjs'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/gatsbyjs'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/gatsbyjs'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'الرئيسية',
        slug: '/'
      },
      {
        name: 'فريق العمل',
        slug: '/authors'
      },
      {
        name: 'تواصل معنا',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'روابط سريعة',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'ملفات قانونية',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}
