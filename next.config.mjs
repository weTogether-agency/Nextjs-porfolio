import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: ["lh3.googleusercontent.com",'img.freepik.com',"d1eipm3vz40hy0.cloudfront.net","resend.com/domains","lottie.host"],
  },
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)