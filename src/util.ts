interface Props {
    expanded: boolean
    theme: {
        sidebar: {
            width: {
                expanded: string
                hidden: string
                arrowExpanded: string
                arrowHidden: string
            }
        }
    }
}

export function sidebarWidth({expanded, theme}: Props): string {
    return expanded ? theme.sidebar.width.expanded : theme.sidebar.width.hidden;
}

export function arrowPos({ expanded, theme}: Props): string {
    return expanded ? theme.sidebar.width.arrowExpanded : theme.sidebar.width.arrowHidden;
}
