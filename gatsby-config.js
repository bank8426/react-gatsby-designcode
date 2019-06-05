module.exports = {
  siteMetadata: {
    title: 'Gatsby Design Code',
    description:'Complete courses',
    keywords:'react',
    footer:{
      edges : [
        {
          node:{
            title:"Privacy",
            url:"/privacy"
          }
        },
        {
          node:{
            title:"Contact",
            url:"/contact"
          }
        },
        {
          node:{
            title:"About",
            url:"/about"
          }
        },
        {
          node:{
            title:"Courses",
            url:"/courses"
          }
        },
        {
          node:{
            title:"Home",
            url:"/"
          }
        }
      ]
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    /*{
      resolve: `gatsby-source-contentful`,
      options:{
        spaceId:`xgghraa72dwu`,
        accessToken:`vGJkqn0DLpUN0us3D53S6BozOBy4TGONy_LCgrhU9mg`
      }
    }*/
  ],
}
