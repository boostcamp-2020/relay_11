import axios from 'axios';

export const GET_RECOMMEND_FRIEND = "GET_RECOMMEND_FRIEND";

const initialState = {
    friends: []
}

const getFriendRecommend_ = (data) => {
    return {
        type: GET_RECOMMEND_FRIEND,
        friends: data.friends
    }
}

export const getFriendRecommend = () => {
    return dispatch => {
        return axios.get("주소를 넣어주세요")
            .then(res =>  dispatch(getFriendRecommend_(res.data)));
    }
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_RECOMMEND_FRIEND:
            return {...state, friends: action.friends};
        default:
            return state;
    }
}

export default reducer;