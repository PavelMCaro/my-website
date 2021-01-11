export const imports = {
    
    'docs/Button.mdx': () => {
        return import(/* webpackPrefetch: true, webpackChunkName: "button" */'../docs/Button.mdx');
    },
    
    'docs/Introduction.mdx': () => {
        return import(/* webpackPrefetch: true, webpackChunkName: "introduction" */'../docs/Introduction.mdx');
    },
    
    'docs/Input.mdx': () => {
        return import(/* webpackPrefetch: true, webpackChunkName: "input" */'../docs/Input.mdx');
    },
    
}