interface Props {
    expanded: boolean
    theme: {
        sidebar: {
            width: {
                expanded: string
                hidden: string
            }
        }
    }
}

export function sidebarWidth({expanded, theme}: Props): string {
    return expanded ? theme.sidebar.width.expanded : theme.sidebar.width.hidden;
}
