import {
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from "../utils/constants"

function reducer(state, action) {
    switch (action.type) {
        case OPEN_SIDEBAR:
            return { ...state, isSidebarOpen: true }

        case CLOSE_SIDEBAR:
            return { ...state, isSidebarOpen: false }

        default:
            return false
    }
}

export default reducer;