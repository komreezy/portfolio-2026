import { createClient } from '@sanity/client';

const GHOST_URL = 'https://assured-justice.ghost.io';
const GHOST_API_KEY = 'a3f238e94d470a1815bf1c19c2';

const sanityClient = createClient({
  projectId: 'hks5h5nr',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skN1c2k44ss58Hha4mJUnCV2csBhHUcnKO6rPdYXCHxxPhrZIhHJT6nXfPjcrocoW6GArGJcIDT97V6XbjB4MT2zXV08uMVDhcXrAydox6IvMpoR5llubN4YXlrcLlwggw57vph1Dflz1j0SX43hdp0I5Z3ECsWuG357yRLKiSYp9m2QtbxO',
  useCdn: false,
});

async function fetchGhostPosts() {
  const response = await fetch(
    `${GHOST_URL}/ghost/api/content/posts/?key=${GHOST_API_KEY}&include=tags&limit=all`
  );
  const data = await response.json();
  return data.posts;
}

// Extract hero + article content, remove only nav and footer
function extractContent(html) {
  if (!html) return '';

  // Remove Ghost card comments
  let content = html.replace(/<!--kg-card-begin: html-->|<!--kg-card-end: html-->/g, '');

  // Remove doctype, html, head tags
  content = content.replace(/<!DOCTYPE[\s\S]*?<body[^>]*>/i, '');
  content = content.replace(/<\/body>[\s\S]*$/i, '');

  // Remove the header/nav bar (but keep the hero)
  content = content.replace(/<header[\s\S]*?<\/header>/gi, '');

  // Remove footer
  content = content.replace(/<footer[\s\S]*?<\/footer>/gi, '');

  // Remove CTA block
  content = content.replace(/<div[^>]*class="[^"]*cta-block[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '');

  // Clean up
  content = content
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return content;
}

async function updatePost(ghostPost) {
  const slug = ghostPost.slug;

  const existingPost = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );

  if (!existingPost) {
    console.log(`Post not found: ${ghostPost.title}`);
    return;
  }

  const htmlContent = extractContent(ghostPost.html);

  console.log(`\n--- ${ghostPost.title} ---`);
  console.log(`Extracted ${htmlContent.length} chars`);

  // Check if hero is included
  if (htmlContent.includes('class="hero"')) {
    console.log('✓ Hero section included');
  } else {
    console.log('⚠ No hero section found');
  }

  await sanityClient.patch(existingPost._id).set({ htmlContent }).commit();
  console.log(`✓ Updated`);
}

async function main() {
  console.log('Fetching posts from Ghost...\n');
  const posts = await fetchGhostPosts();

  for (const post of posts) {
    if (post.title.toLowerCase().includes('coming soon')) {
      console.log(`Skipping: ${post.title}`);
      continue;
    }

    try {
      await updatePost(post);
    } catch (error) {
      console.error(`✗ Failed: ${post.title}`, error.message);
    }
  }

  console.log('\n\nDone!');
}

main().catch(console.error);
