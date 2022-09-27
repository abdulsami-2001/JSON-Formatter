const siteUrl = "https://www.example.com"

module.exports = {
    siteUrl: siteUrl,
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions:{
      additionalSitemaps:[
        `${siteUrl}/sitemap.xml`,
        `${siteUrl}/sitemap-0.xml`,
        `${siteUrl}/server-sitemap.xml`,
      ]
    }
    
    // ...other options
  }