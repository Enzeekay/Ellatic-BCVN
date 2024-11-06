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
  { href: "/category/One/1/", title: "Tin tức" },
  { href: "/category/Two/1/", title: "Hướng dẫn" },
  { href: "/category/Three/1/", title: "Dụng cụ" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/posts/why-astro/", title: "Giới thiệu" },
  { href: "/posts/tailwind-typography/", title: "Liên hệ" },
  { href: "/tags/", title: "Danh mục" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://facebook.com/bongcaudotcom",
    icon: "tabler:brand-facebook",
    label: "Facebook",
  },
  {
    href: "https://twitter.com/bongcaudotcom",
    icon: "tabler:brand-twitter",
    label: "X (Twitter)",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Tìm kiếm`;
export const SEARCH_PAGE_DESCRIPTION = `Tìm các nội dung có trên ${SITE_TITLE}`;
