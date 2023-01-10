import {useEffect, useState} from "react";
import {tasksApi} from "../api/tasks-api";

export default {
    title: 'TasksAPI'
}
export const GetTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistIdGet, setTodolistIdGet] = useState<any>(null)
    const getTask = () => {
        const todolistId = '62a788fb-84e8-43be-af57-16334fb7e8d7'
        tasksApi.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>
        {JSON.stringify(state)}
        <div>

            <input placeholder={'todolistId'} value={todolistIdGet} onChange={(e)=>{setTodolistIdGet(e.currentTarget.value)}} />
        <button onClick={getTask}> getTask</button>
        </div>
    </div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<any>(null)
    const deleteTask = () => {
        const todolistId = '62a788fb-84e8-43be-af57-16334fb7e8d7'
        const taskId = ''
        tasksApi.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>
        {JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'}
                   value={todolistId}
                   onChange={(e) => {
                       setTodolistId(e.currentTarget.value)
                   }}/>
            <input placeholder={'taskId'}
                   value={taskId}
                   onChange={(e) => {
                       setTaskId(e.currentTarget.value)
                   }}/>
            <button onChange={deleteTask}>deleteTask</button>
        </div>
    </div>
}
export const PutTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistIdPut, setTodolistIdPut] = useState<any>(null)
    const putTask = () => {
        const todolistId = 'e495ee6b-eea3-4d20-8f95-a45d6d718996'
        tasksApi.putTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>
        {JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'} value={todolistIdPut} onChange={(e)=>{setTodolistIdPut(e.currentTarget.value)}}/>
            <button onClick={putTask}> Put</button>
        </div>
    </div>
}
export const PostTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistIdPost, setTodolistIdPost] = useState<any>(null)
    const [taskIdPost, setTaskIdPost] = useState<any>(null)
    const postTask = () => {
        const todolistId = '62a788fb-84e8-43be-af57-16334fb7e8d7'
        const taskId = ''
        tasksApi.postTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'} value={todolistIdPost} onChange={(e) => {
                setTodolistIdPost(e.currentTarget.value)
            }}/>
            <input placeholder={'taskId'} value={taskIdPost} onChange={(e) => {
                setTaskIdPost(e.currentTarget.value)
            }}/>
            <button onClick={postTask}>Add Post</button>

        </div>
    </div>
}
