import {useEffect, useState} from "react";
import {tasksApi} from "../api/tasks-api";

export default {
    title: 'TasksAPI'
}
export const GetTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '62a788fb-84e8-43be-af57-16334fb7e8d7'
        tasksApi.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = ''
        const taskId = ''
        tasksApi.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const PutTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '62a788fb-84e8-43be-af57-16334fb7e8d7'
        tasksApi.putTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const PostTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '62a788fb-84e8-43be-af57-16334fb7e8d7'
        const taskId = ''
        tasksApi.postTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
