import { combineReducers } from 'redux';
import { toggleSidebar } from './actions';

function sidebarExpanded(state=true, action) {
    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            return !state;
        default:
            return state;
    }
}

const reducer = combineReducers({
    sidebarExpanded,
});

export default reducer;