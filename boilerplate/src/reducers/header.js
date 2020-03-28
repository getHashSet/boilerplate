const headerReducer = (state = "My H1 tag", action) => {
    switch(action.type) {
        case 'HEADER':
            return action.payload;
        default:
            return 'My H1 tag.'
    };
};
export default headerReducer;