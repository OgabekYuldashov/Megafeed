export const FOLLOW =      '[following] Follow';
export const UNFOLLOW =   '[following] Unfollow';

export function followUser(uid: string) {
    return {
        type: FOLLOW,
        payload: uid
    };
}

export function unfollowUser(uid: string) {
    return {
        type: UNFOLLOW,
        payload: uid
    };
}
