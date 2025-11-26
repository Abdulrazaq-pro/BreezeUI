import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images:{
    domains:["images.unsplash.com","www.twblocks.com","assets.dub.co","5xfmztgsig.ufs.sh","www.ikiform.com","www.linkedin.com","www.x.com","placehold.co","localhost"]
  }
};

export default withMDX(config);
