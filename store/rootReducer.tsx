import userReducer from "../store/user/usersSlice"
import memberReducer from "../store/user/membersSlice"

export const reducer = {
    users : userReducer,
    member : memberReducer
}