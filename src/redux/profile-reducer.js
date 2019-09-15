import {profileAPI, usersAPI} from '../api/api'

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'

let initialState = {
  posts: [
    {
      id: 1,
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, non!',
      likes: 10,
    },
    {
      id: 2,
      message: 'Illo modi, culpa cupiditate repellat eos rerum saepe hic distinctio odio dolor!',
      likes: 23,
    }
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likes: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost]
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.postId)
      }
    }
    default:
      return state
  }
}

/* Action Creators */
export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

/* Thunks */
export const getProfile = (userId) => async (dispatch) => {
  let data = await usersAPI.getProfile(userId)
  dispatch(setUserProfile(data))
}

export const getStatus = (id) => async (dispatch) => {
  let data = await profileAPI.getStatus(id)
  dispatch(setStatus(data))
}

export const updateStatus = (status) => async (dispatch) => {
  let res = await profileAPI.updateStatus(status)
  if(res.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export default profileReducer