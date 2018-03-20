const initialState = {
    word: 'Click Me',
};

const defaultReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CLICK_BUTTON':
            return {
                word: 'Hello, React!',
            };

        default:
            return state;
    }
};

export default defaultReducer;
