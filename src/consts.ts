// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "Bóng Cầu VN";
export const SITE_TITLE = "Bóng Cầu VN";
export const SITE_DESCRIPTION = "Hội Bóng Cầu - Pickleball Việt Nam";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "Bóng Cầu VN";
export const Tags_DESCRIPTION =
  "Cộng đòng người Việt chơi môn Bóng Cầu- Pickleball";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `Tất cả nội dung liên quan đến '${tag}' trên Bóng Cầu VN`,
    description: `Tìm hiểu tất cả những nội dung liên quan đến ${tag} trên Bóng Cầu VN.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `Tất cả bài về '${category}' trên Bóng Cầu VN`,
    description: `Xem tất cả các bài về ${category} trên Bóng Cầu VN`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/One/1/", title: "Tin Tức" },
  { href: "/category/Two/1/", title: "Hướng Dẫn" },
  { href: "/category/Three/1/", title: "Trang Bị" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/posts/why-astro/", title: "Astro" },
  { href: "/posts/tailwind-typography/", title: "Tailwind" },
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://facebook.com/bongcaudotcom",
    icon: "tabler:brand-facebook",
    label: "Twitter",
  },
  {
    href: "https://twitter.com/bongcaudotcom",
    icon: "tabler:brand-twitter",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
