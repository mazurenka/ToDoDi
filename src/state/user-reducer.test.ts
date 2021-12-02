import {userReducer} from "./user-reduser";

test('ueser reduser should increment only age', () => {
    const startState = {age: 20, childrenCount: 2, name: "Dimych"}

    const endState = userReducer(startState, {type: 'INCREMENT-AGE'})

    expect(endState.age).toBe(21)
    expect(endState.childrenCount).toBe(2)
})

test('user reducer should be increment only childrenCount', () => {
    const starttState = {age: 20, childrenCount: 2, name: "Dimych"}

    const endState = userReducer(starttState, {type: 'INCREMENT-CHILDREN-COUNT'})

    expect(endState.age).toBe(20)
    expect(endState.childrenCount).toBe(3)
})













