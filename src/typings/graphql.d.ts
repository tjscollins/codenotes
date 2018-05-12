declare interface MarkdownRemarkEdge {
    node: MarkdownRemarkObject
}

declare interface MarkdownRemarkObject {
    id: string
    fields: {
        slug: string
    }
    frontmatter: MarkdownFrontmatter
    excerpt: string
    html: string
}

declare interface MarkdownFrontmatter {
    title: string
    path: string
    date?: string
    chapter?: string
    order?: number
}

declare interface SiteMetadata {
    title: string
    description: string
    keywords: string[]
    links: {
        [property: string]: string
    }
}