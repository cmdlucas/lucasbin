import markdownYamlMetadataParser from 'markdown-yaml-metadata-parser'
import { PostFile } from '../../posts/_reader';

export interface MetadataContent {
    title?: string
    author?: string
    tags?: string
    headerImage?: string
    datePublished?: string
    lastModifiedOn?: string
}

export interface Markdown {
    path_to_file: string
    metadata: MetadataContent
    content: string
}

export interface MetadataConfig {
    windows?: boolean
}

export function getMarkdownData(markdowns: PostFile[], config: MetadataConfig = { }): Markdown[] {
    return markdowns.map(markdown => {
        const data = markdownYamlMetadataParser(markdown.content, config);
        return { ...data, path_to_file: markdown.directory };
    })
}