export const mailgun = require('mailgun-js')({
  apiKey: process.env.REACT_APP_MAILGUN_API_KEY,
  domain: process.env.REACT_APP_MAILGUN_DOMAIN
})