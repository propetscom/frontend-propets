export const CHANGE_PAGE = 'CHANGE_PAGE';

export const    pageAction = (page) => (
    {
        type: CHANGE_PAGE,
        payload: page
    }
);

