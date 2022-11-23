/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/.well-known/webfinger',
        destination:
          'http://mastodon.social/.well-known/webfinger?resource=acct:vincentspitale@mastodon.social',
      },
    ]
  },
}