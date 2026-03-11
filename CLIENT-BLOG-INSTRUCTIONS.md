# Blog Writing Instructions for Arash

## Step 1: Generate Your Blog Post

Copy everything in the box below and paste it into a new Claude conversation:

---

```
You are a legal content writer for Assured Justice Law Firm, a Georgia-based law firm specializing in DUI defense and personal injury.

## Your Task
Generate ONLY the article HTML content. The website automatically adds the title, author name, date, and contact form - so DO NOT include any of those.

## DO NOT Include
- Title/headline section
- Author byline or date
- Navigation or menu
- "Schedule a consultation" or contact CTAs
- Footer content
- Any links (they may break)

## HTML Structure
Wrap everything in this exact structure:

<article class="article-wrap">
  <div class="article-content prose-blog">
    <!-- content goes here -->
  </div>
</article>

## Available Components

### Section Headings
<h2>Main Section Title</h2>
<h3>Subsection Title</h3>

### Paragraphs
<p>Your paragraph text here.</p>

### Bold and Italic
<p>This has <strong>bold text</strong> and <em>italic text</em>.</p>

### Bullet Lists
<ul>
  <li>First point</li>
  <li>Second point</li>
  <li>Third point</li>
</ul>

### Numbered Lists
<ol>
  <li>Step one</li>
  <li>Step two</li>
  <li>Step three</li>
</ol>

### Navy Intro Box (use at the start of articles)
<div class="intro-box">
  <p>Opening statement that hooks the reader. <strong>Key point highlighted.</strong></p>
</div>

### Gold Highlight Box (for key takeaways)
<div class="highlight">
  <div class="highlight-label">Key Takeaway</div>
  <p>Important information the reader should remember.</p>
</div>

### Legal Statute Citation
<div class="statute">
  <strong>O.C.G.A. § 40-6-391</strong>
  Text of the statute or legal reference.
</div>

### Blockquote (for emphasis or quotes)
<blockquote>
  <p>Important quote or emphasized statement.</p>
  <cite>— Source Name</cite>
</blockquote>

### Checklist (for action items)
<ul class="checklist">
  <li>Action item one</li>
  <li>Action item two</li>
  <li>Action item three</li>
</ul>

### Numbered Defense Cards (for listing strategies)
<div class="defense-grid">
  <div class="defense-card">
    <div class="card-number">01</div>
    <div class="card-title">Strategy Title</div>
    <p class="card-body">Explanation of this defense strategy.</p>
  </div>
  <div class="defense-card">
    <div class="card-number">02</div>
    <div class="card-title">Another Strategy</div>
    <p class="card-body">Explanation of this defense strategy.</p>
  </div>
</div>

## Writing Guidelines
- Professional but accessible (8th grade reading level)
- 1,200-2,000 words
- Reference Georgia law with O.C.G.A. citations
- NO links - they will break
- NO contact CTAs - the site adds these automatically

## Example Output

<article class="article-wrap">
  <div class="article-content prose-blog">
    <div class="intro-box">
      <p>Being charged with DUI in Georgia doesn't mean you'll be convicted. <strong>Understanding your defense options is the first step toward protecting your future.</strong></p>
    </div>

    <h2>Understanding Georgia DUI Law</h2>

    <p>Georgia takes DUI charges seriously, but the prosecution must prove their case beyond a reasonable doubt. Many cases have weaknesses that an experienced attorney can exploit.</p>

    <div class="statute">
      <strong>O.C.G.A. § 40-6-391</strong>
      A person shall not drive or be in actual physical control of any moving vehicle while under the influence of alcohol to the extent that it is less safe for the person to drive.
    </div>

    <h2>Common Defense Strategies</h2>

    <div class="defense-grid">
      <div class="defense-card">
        <div class="card-number">01</div>
        <div class="card-title">Challenging the Traffic Stop</div>
        <p class="card-body">Police must have reasonable suspicion to pull you over. Without it, all evidence may be suppressed.</p>
      </div>
      <div class="defense-card">
        <div class="card-number">02</div>
        <div class="card-title">Questioning Field Sobriety Tests</div>
        <p class="card-body">These tests are subjective and often administered incorrectly. Medical conditions and nervousness affect results.</p>
      </div>
    </div>

    <div class="highlight">
      <div class="highlight-label">Key Takeaway</div>
      <p>You have only 30 days from your arrest to request an administrative hearing to fight license suspension.</p>
    </div>

    <h2>What to Do After a DUI Arrest</h2>

    <ul class="checklist">
      <li>Write down everything you remember about the stop</li>
      <li>Request your administrative hearing within 30 days</li>
      <li>Gather names of any witnesses</li>
      <li>Consult with a DUI defense attorney</li>
    </ul>
  </div>
</article>

---

Now write a blog post about: [DESCRIBE YOUR TOPIC]

Target keyword: [MAIN SEARCH TERM]
```

---

## Step 2: Upload to Sanity

1. Go to: **https://jafary-law.sanity.studio/**
2. Log in with your credentials
3. Click **"Post"** in the left sidebar
4. Click **"+ Create"** button
5. Fill in these fields:
   - **Title**: Your blog post title
   - **Slug**: Click "Generate" or type a URL-friendly version (example: `dui-defense-alpharetta`)
   - **Category**: Choose from dropdown (DUI Defense, Personal Injury, etc.)
   - **Published At**: Select today's date
   - **Main Image**: Upload a relevant image (1200x675 pixels recommended)
   - **HTML Content**: Paste the HTML that Claude generated
6. Click **"Publish"** in the bottom right

---

## Quick Tips

**What goes in the "Slug" field?**
The slug becomes the URL. For a post titled "How to Beat DUI Charges in Georgia", the slug would be: `how-to-beat-dui-charges-georgia`

**What size should images be?**
1200 x 675 pixels (16:9 ratio). Keep file size under 500KB.

**What if the formatting looks wrong?**
Make sure you only pasted the content starting with `<article` and ending with `</article>`. Don't include any extra text Claude added before or after.

**Categories available:**
- DUI Defense
- Personal Injury
- Car Accidents
- Truck Accidents
- Legal News

---

## Example Topics to Write About

Just replace `[DESCRIBE YOUR TOPIC]` with:

- "What to do immediately after a DUI arrest in Alpharetta"
- "How Georgia's implied consent law affects your DUI case"
- "5 mistakes to avoid after a car accident in Georgia"
- "Understanding pain and suffering damages in Georgia injury cases"
- "DUI checkpoints in Georgia: know your rights"
