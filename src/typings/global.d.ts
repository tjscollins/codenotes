declare const graphql: (query: TemplateStringsArray) => void;

declare interface ReduxState {
    sidebarExpanded: boolean
} 

declare interface ReduxAction {
    type: string
    payload?: any
}

type ReduxActionGenerator = (...args: any[]) => ReduxAction;
type DispatchFn = (action: ReduxAction) => void;

declare interface SiteTheme {
    sidebar: {
        colors: {
            [property: string]: string
        }
        hideTransition: string
    }
}