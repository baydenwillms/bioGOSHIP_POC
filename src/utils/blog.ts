import type { CollectionEntry } from 'astro:content';

export function sortArticleList<T extends CollectionEntry<'articles'>>(items: T[]): T[] {
  // sort by item.data.featured first and then by item.data.publishDate second descending
  const sortedItems = items.sort((a, b) => {
    if (a.data.featured && b.data.featured) return 0;
    if (a.data.featured && !b.data.featured) return -1;
    if (!a.data.featured && b.data.featured) return 1;
    if (a.data.publishDate > b.data.publishDate) return -1;
    if (a.data.publishDate < b.data.publishDate) return 1;
    return 0;
  });
  return sortedItems;
}

export function getAdjacentArticles<T extends CollectionEntry<'articles'>>(index: number, articles: T[]): { prev: T | undefined; next: T | undefined } | null {
  if (articles.length <= 1) {
    return null;
  }
  return {
    prev: index > 0 ? articles[index - 1] : undefined,
    next: index < articles.length - 1 ? articles[index + 1] : undefined,
  };
}
