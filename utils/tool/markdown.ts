import unified from 'unified';
import markdownParser from 'remark-parse';
import frontmatterParser from 'remark-frontmatter';
import markdownStringify from 'remark-stringify';
import markdownToYaml from 'remark-parse-yaml';
import markdownYamlMetadataParser from 'markdown-yaml-metadata-parser'

const unifiedProcessor = unified().use(markdownParser).use(markdownStringify)
                            .use(frontmatterParser).use(markdownToYaml);


interface MetadataContent {
    title: string
    author: string
    tags: string
    datePublished: string
    lastModifiedOn: string
}

interface MarkdownContent {
    metadata: MetadataContent
    content: string
}

interface MetadataConfig {
    windows: boolean
}

export function getMetadata(mardowns: string[], config: MetadataConfig = { windows: false }): MarkdownContent[] {
    return mardowns.map(markdown => {
        return markdownYamlMetadataParser(markdown);
    })
}