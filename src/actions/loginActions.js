export const loginAction=({admin,token})=>({
    type:'LOGIN',
    admin,
    token
})

export const logoutAction=()=>({
    type:'LOGOUT'
})