import { PostPreviewModel } from '../models/postPreview.model';

export const LOAD =         '[postPreview] Load';

export function loadPostsPreviews(posts: PostPreviewModel[]) {
    return {
        type: LOAD,
        payload: posts
    };
}
