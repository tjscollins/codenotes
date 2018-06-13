/// <reference path="../typings/global.d.ts" />

import { combineReducers } from 'redux';

function sidebarExpanded(expanded = true, action: ReduxAction) {
    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            return !expanded;
        default:
            return expanded;
    }
}

const reducer = combineReducers<ReduxState>({
    sidebarExpanded
});

export default reducer;
