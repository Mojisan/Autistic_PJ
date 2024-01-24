import { createSlice, nanoid } from "@reduxjs/toolkit"

export type Member = {
    id: string,
    username: string,
    email: string,
    password: string
}

const initialState:Member[] = []

export const membersSlice = createSlice({
    name: "members",
    initialState,
    reducers: {
        addMember: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(username: string, email: string, password: string):any {
                return {
                    payload: {
                        id: nanoid(),
                        username,
                        email,
                        password
                    }
                }
            }
        }
    }
})

export const { addMember } = membersSlice.actions
export default membersSlice.reducer