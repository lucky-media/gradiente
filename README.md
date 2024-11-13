# Gradiente - Statamic Starter Kit

Elevate your business with seamless SaaS solutions. Gradiente offers intuitive and powerful tools to streamline your workflow and boost productivity.

## Features of Gradiente

- A rich selection of sets for building your site:
  - Hero Section (2 variants)
  - CTA Section (3 variants)
  - Features Section (3 variants)
  - Logo Cloud Section
  - Blog Section (2 variants)
  - Related Blogs Section
  - FAQ Section
  - Quote Section
  - Team Section
  - Pricing Section
  - Image with Text & Checklist Section
  - Form Section

## Installation

Follow the [Starter Kit installation instructions](https://statamic.dev/starter-kits/installing-a-starter-kit) to get started with Gradiente.
Make sure you're running **Statamic 5.x** for compatibility.

### Installing into an existing site

```bash
php please starter-kit:install lucky-media/gradiente
```

### Installing via the Statamic CLI Tool

If you have the [Statamic CLI Tool](https://github.com/statamic/cli) installed, create a new Statamic installation with Gradiente in one command:

```bash
statamic new my-site lucky-media/gradiente
```

### SEO

When you edit a page on the control panel, you can see that each page has the SEO section in the entry editor. For SEO we use our own SEO called LuckySEO which you can read about it below this section.

- Meta
  - Title - It can be used to determine the title used on search engine results pages.
  - Title prepend - Prepends to title the text set in General SEO settings.
  - Title append - Appends to title the text set in General SEO settings.
  - Meta Description - It can be used to determine the text used under the title on search engine results pages. If empty, search engines will automatically generate this text.
  - Canonical - By default it will be set to the page url.
- Social
  - Open Graph Title
  - Open Graph Description
  - Twitter Title
  - Twitter Description
  - OG Image - If not set, the general image will be used.

### LuckySEO

By default, we use our own LuckySEO which comes together with the kit. You can control your SEO general settings here. Make sure to read the instructions on each input. These settings can be overridden on specific entries/pages as shown on the SEO section above.

- Meta
  - Title - While the title tag doesn’t start with "meta," it is in the header and contains information that's very important to SEO. You should always have a unique title tag on every page that describes the page.
  - Prepend on Title - This will be PREPENDED to all of the titles.
  - Append on Title - This will be APPENDED to all of the titles.
  - Meta Description - It is used for one major purpose: to describe the page to searchers as they read through the SERPs. Can be overridden on pages, if left blank, search engines will generate their own content for this field.
- Social
  - Image - Use your logo or any other branded image for the rest of your pages.
  - Display Open Graph tags - Open Graph meta tags are snippets of code that control how URLs are displayed when shared on social media.
  - Site name
  - Title - Keep it short to prevent overflow. 40 characters for mobile and 60 for desktop is roughly the sweet spot. Use the raw title.
  - Description - General Description, can be overridden on specific pages. Complement the title to make the snippet as appealing and click-worthy as possible. Copy your meta description here if it makes sense. Keep it short and sweet. Facebook recommends 2–4 sentences, but that often truncates.
  - Display Twitter Tags - Title, Handle and Description

### Styling

Gradiente's design is powered by TailwindCSS, giving you the freedom to tailor the look and feel of your site with ease. Modify the Tailwind config file to adjust colors, fonts, and more.

- Configuration of TailwindCSS
  - Edit the config **tailwind.config.js**
  - Font Family - default is sans: Syne.
  - Colors - primary, secondary, gray, info color names because it makes it easier to apply different colors..

## Fonts

We use [Font Source](https://fontsource.org/) for offline fonts to score better points on Google Lighthouse.
Working with them its easy, just go to their website and search for your desired font, use npm to install it and then include it to the `site.js` file.

## Compiling Assets

Use Vite with [Laravel](https://laravel.com/docs/11.x/vite) for asset compilation in Gradiente.

- Run `npm install` to install dependencies.
- Use `npm run dev` for development.
- Execute `npm run build` for production-ready assets.

## Commercial Starter Kit

Gradiente is a commercial starter kit - a license must be purchased via the [Statamic Marketplace](https://statamic.com/starter-kits/luckymedia/gradiente) to use it in your project.

## 🐞 Bugs and 💡 Feature Requests

For any issues or suggestions, please use the issues tab.

## Credits

Gradiente is created by the talented team at [Lucky Media](https://www.luckymedia.dev/). We specialize in crafting exceptional digital experiences. Contact us for any web design or development projects.

Last but not least thanks to the creators/contributors of the following packages which made Gradiente possible:

- Statamic CMS
- Tailwind CSS
- Alpine.js
