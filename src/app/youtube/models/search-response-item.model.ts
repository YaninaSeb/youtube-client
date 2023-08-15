export interface IVideo {
  kind: string,
  etag: string,
  items: IVideoItem[],
  pageInfo: IVideoPageInfo
}
export interface IVideoItem {
  kind: string,
  etag: string,
  id: string,
  snippet: IVideoItemSnippet,
  statistics: IVideoItemStatistics
}

interface IVideoItemSnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: IVideoItemSnippetThumbnails,
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  localized: IVideoItemSnippetLocalized
}

interface IVideoItemSnippetThumbnails {
  default: IVideoItemSnippetThumbnailsOptions,
  medium: IVideoItemSnippetThumbnailsOptions,
  high: IVideoItemSnippetThumbnailsOptions
}

interface IVideoItemSnippetThumbnailsOptions {
  url: string,
  width: number,
  height: number
}

interface IVideoItemSnippetLocalized {
  title: string,
  description: string
}

interface IVideoItemStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount?: string,
  favoriteCount: string,
  commentCount: string
}

interface IVideoPageInfo {
  totalResults: number,
  resultsPerPage: number
}
