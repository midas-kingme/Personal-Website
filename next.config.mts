import createMDX from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.mdx?$/,
})

const withNextIntl = createNextIntlPlugin();
 
// Merge MDX config and i18n routing with Next.js config
export default withNextIntl(withMDX(nextConfig));