export interface Sort {
  readonly field: string,
  readonly direction: string,
}

export interface DefaultListMetadata<T> {
  readonly items: T,
  readonly offset: number,
  readonly limit: number,
  readonly totalCount: number,
  readonly sort: Sort
}