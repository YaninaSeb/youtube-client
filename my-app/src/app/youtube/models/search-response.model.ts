export interface ISearch {
  kind: string,
  etag: string,
  pageInfo: ISearchPageInfo,
  items: ISearchItem[]
}

interface ISearchPageInfo {
  totalResults: number,
  resultsPerPage: number
}
  
export interface ISearchItem {
  kind: string,
  etag: string,
  id: string,
  snippet: ISearchItemSnippet,
  statistics: ISearchItemStatistics
}

interface ISearchItemSnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: ISearchItemSnippetThumbnails,
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  defaultLanguage?: string,
  localized: ISearchItemSnippetLocalized,
  defaultAudioLanguage: string
}

interface ISearchItemSnippetThumbnails {
  default: ISearchItemSnippetThumbnailsOptions,
  medium: ISearchItemSnippetThumbnailsOptions,
  high: ISearchItemSnippetThumbnailsOptions,
  standard: ISearchItemSnippetThumbnailsOptions,
  maxres: ISearchItemSnippetThumbnailsOptions
}

interface ISearchItemSnippetThumbnailsOptions {
  url: string,
  width: number,
  height: number
}

interface ISearchItemSnippetLocalized {
  title: string,
  description: string
}

interface ISearchItemStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string
}
