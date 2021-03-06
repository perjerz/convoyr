import { ConvoyrResponse } from '@convoyr/core';
import { CacheMetadata } from './cache-metadata';

export interface WithCacheMetadata<TData = unknown> {
  cacheMetadata: CacheMetadata;
  data: TData;
}

export type ConvoyCacheResponse<TData = unknown> = ConvoyrResponse<
  WithCacheMetadata<TData>
>;
