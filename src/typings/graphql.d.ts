declare interface markdownRemarkObject {
    id: string
    fields: {
        slug: string
    }
    frontmatter: markdownFrontmatter
    excerpt: string
    html: string
}

declare interface markdownFrontmatter {
    title: string
    path: string
    date?: string
    chapter?: string
    order?: number
}
