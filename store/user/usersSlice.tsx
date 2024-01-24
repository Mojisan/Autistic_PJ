import { createSlice, nanoid } from "@reduxjs/toolkit"

export type User = {
    id: string
    firstName: string
    lastName: string
    number: string
}

const initialState:User[] = [

]

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(firstName: string, lastName: string, number: string ):any {
                return{
                    payload: {
                        id: nanoid(),
                        firstName,
                        lastName,
                        number
                    }
                }
            }
        }
    }
})

export const { addUser } = usersSlice.actions
export default usersSlice.reducer