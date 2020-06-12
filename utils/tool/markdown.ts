import markdownYamlMetadataParser from 'markdown-yaml-metadata-parser'

interface MetadataContent {
    title?: string
    author?: string
    tags?: string
    datePublished?: string
    lastModifiedOn?: string
}

interface Markdown {
    metadata: MetadataContent
    content: string
}

interface MetadataConfig {
    windows?: boolean
}

export function getMarkdownData(mardowns: string[], config: MetadataConfig = { }): Markdown[] {
    return mardowns.map(markdown => {
        return markdownYamlMetadataParser(markdown);
    })
}