export function sidebarWidth({expanded, theme}) {
    return expanded ? theme.sidebar.width.expanded : theme.sidebar.width.hidden;
}