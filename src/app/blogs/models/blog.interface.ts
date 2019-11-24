export interface Blog {
  id: string
  title: string
  images?: string[]
  content: string
  createdAt: Date | string
  updatedAt: Date | string
}
