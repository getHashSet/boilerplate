export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    };
};

export const decrement = (num) => {
    return {
        type: 'DECREMENT',
        payload: num
    };
};

export const header = (str) => {
    return {
        type: 'HEADER',
        payload: str
    }
};
