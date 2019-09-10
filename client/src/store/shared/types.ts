export interface DefaultListMetadata<T> {
  items: T,
  offset: number,
  limit: number,
  totalCount: number,
}