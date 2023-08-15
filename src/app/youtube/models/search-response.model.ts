export interface ISearch {
  kind: string,
  etag: string,
  nextPageToken: string,
  regionCode: string,
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
  id: ISearchItemID,
  snippet: ISearchItemSnippet
}

interface ISearchItemID {
  kind: string,
  videoId: string,
}

interface ISearchItemSnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: ISearchItemSnippetThumbnails,
  channelTitle: string,
  liveBroadcastContent: string,
  publishTime: string
}

interface ISearchItemSnippetThumbnails {
  default: ISearchItemSnippetThumbnailsOptions,
  medium: ISearchItemSnippetThumbnailsOptions,
  high: ISearchItemSnippetThumbnailsOptions
}

interface ISearchItemSnippetThumbnailsOptions {
  url: string,
  width: number,
  height: number
}
