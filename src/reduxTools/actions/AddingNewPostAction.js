export const ADD_IMAGES = 'ADD_IMAGES';
export const DELETE_IMAGE = 'DELETE_IMAGE';
export const CHANGE_TEXT = 'CHANGE_TEXT';

export const addImagesAction = (images,url) => (
    {
        type: ADD_IMAGES,
        images,
        url
    }
);

export const deleteImageAction = (index) => (
        {
            type: DELETE_IMAGE,
            index

        }
    );

export const textAction = (text) => (
    {
        type: CHANGE_TEXT,
        text

    }
);