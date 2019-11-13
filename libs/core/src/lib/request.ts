import { Headers } from './headers';

export type HttpMethod =
  | 'HEAD'
  | 'OPTIONS'
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE';

export interface HttpExtRequest<TBody = unknown> {
  readonly url: string;
  readonly method: HttpMethod;
  readonly body: TBody | null;
  readonly headers: Headers;
  readonly params: { [key: string]: string | string[] };
}

export type RequestArgs<TBody> = { url: string } & Partial<
  HttpExtRequest<TBody>
>;

export function createRequest<TBody>(
  request: RequestArgs<TBody>
): HttpExtRequest {
  return {
    url: request.url,
    method: request.method || 'GET',
    body: request.body || null,
    headers: request.headers || {},
    params: request.params || {}
  };
}