const Main = require('@architect/views/main.js')
const staticAssetsHelper = require('./static-assets-helper')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Stella Fang', // ←  Start by adding your name!
    title: 'Best Site Ever',
    occupation: 'Artist & Photographer',
    location: 'Vancouver, BC',
    bio: 'I work at Mobify and Lauren Mew is beside me',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'stelly@email.com',
    twitter: 'stellyTweets',
    linkedin: 'stellyLinkedIn',
    instagram: 'stellyIG',
    facebook: 'WhoUsesIG??',

    /**
     * Layout
     */
    photographer: 'Stella',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@von_co',
    image: staticAssetsHelper('background.jpg')
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
