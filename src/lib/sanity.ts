import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { PortableTextBlock } from '@portabletext/types';

type SanityImageSource = Parameters<ReturnType<typeof createImageUrlBuilder>['image']>[0];

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false, // Disable CDN for fresh data
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Types
export interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  mainImage?: SanityImageSource;
  htmlContent?: string;
  body?: PortableTextBlock[];
  publishedAt: string;
}

// Queries
export async function getPosts(): Promise<Post[]> {
  return client.fetch(`
    *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      category,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      publishedAt
    }
  `);
}

export async function getLatestPosts(limit: number = 3): Promise<Post[]> {
  return client.fetch(`
    *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc)[0...${limit}] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      publishedAt
    }
  `);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      category,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      htmlContent,
      body,
      publishedAt
    }
  `, { slug });
}

export async function getAllSlugs(): Promise<string[]> {
  const posts = await client.fetch(`
    *[_type == "post" && !(_id in path("drafts.**"))] {
      "slug": slug.current
    }
  `);
  return posts.map((post: { slug: string }) => post.slug);
}
