import axios from "axios";



import React, {useEffect, useState} from 'react'

export default {
    title: 'API'

}

const setting ={
    withCredentials : true,
    'API-KEY':'45e010e4-6515-4f44-948c-de88f0fc6daf'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists',setting)
            .then((res)=>{
                setState(res.data)
            })// здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todo = 'redux'
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists',{title:todo},setting)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
          const todoId = ''
        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`,setting)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = 'b3243e6c-cb1d-48a4-9f48-013b96d17ae1'
        const todoName = ' eeeee'
        axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`,{title:todoName},setting)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

