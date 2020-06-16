import { parse as markdownYamlMetadataParser, MarkdownParserConfig, AnyMap, MarkdownData } from '@cmdlucas/markdown-metadata'
import { PostFile } from '../../posts/_reader';

export interface MetadataContent extends AnyMap {
    title?: string
    author?: string
    tags?: string
    headerImage?: string
    datePublished?: string
    lastModifiedOn?: string
}

export interface Markdown extends MarkdownData {
    path_to_file: string
    metadata: MetadataContent
}

export function getMarkdownData(markdowns: PostFile[], config?: MarkdownParserConfig): Markdown[] {
    return markdowns.map(markdown => {
        const data = markdownYamlMetadataParser(markdown.content, config);
        return { ...data, path_to_file: markdown.directory };
    })
}