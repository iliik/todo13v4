import {useState} from "react";
import {tasksApi} from "../api/tasks-api";

export default {
    title: 'TasksAPI'
}
export const GetTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskTitle, SetTaskTitle] = useState<string>('')
    const [todolistIdGet, setTodolistIdGet] = useState<string>('')
    const getTask = () => {
        tasksApi.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>
        {JSON.stringify(state)}
        <div>

            <input placeholder={'todolistId'} value={todolistIdGet} onChange={(e) => {
                setTodolistIdGet(e.currentTarget.value)
            }}/>
            <button onClick={getTask}> getTask</button>
        </div>
    </div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>('')
    const [todolistId, setTodolistId] = useState<string>('')
    const deleteTask = () => {
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
    const [taskTitle, setTaskTitle] = useState<string>('title 1')
    const [taskDescription, setTaskDescription] = useState<string>('description 1')
    const [status, setStatus] = useState<number>(0)
    const [priority, setPriority] = useState<number>(0)
    const [startDate, setStartDate] = useState<string>('')
    const [deadline, setDeadline] = useState<string>('')

    const [todolistIdPut, setTodolistIdPut] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>('')

    const putTask = () => {
        tasksApi.putTasks(todolistIdPut, taskTitle, {
            deadline: '',
            description: description ,
            priority: priority,
            startDate: '',
            status: status,
            title:title,
        })
            .then((res) => {
                setState(res.data)
            })
    }
    return <div>
        {JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'} value={todolistIdPut} onChange={(e) => {
                setTodolistIdPut(e.currentTarget.value)
            }}/>
            <input placeholder={'Title'} value={taskTitle} onChange={(e) => {
                setTaskTitle(e.currentTarget.value)
            }}/>
            <input placeholder={'Description'} value={taskDescription} onChange={(e) => {
                setTaskDescription(e.currentTarget.value)
            }}/>
            <input placeholder={'Status'} value={status} onChange={(e) => {
                setStatus(+e.currentTarget.value)
            }}/>
            <input placeholder={'Priority'} value={priority} onChange={(e) => {
                setPriority(+e.currentTarget.value)
            }}/>
            <input placeholder={'taskId'} value={taskId} onChange={(e) => {
                setTaskId(e.currentTarget.value)
            }}/>
            <input placeholder={'startDate'} value={startDate} onChange={(e) => {
                setStartDate(e.currentTarget.value)
            }}/>
            <input placeholder={'deadline'} value={deadline} onChange={(e) => {
                setDeadline(e.currentTarget.value)
            }}/>
            <button onClick={putTask}> Put</button>
        </div>
    </div>
}
export const PostTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistIdPost, setTodolistIdPost] = useState<string>('')
    const [taskIdPost, setTaskIdPost] = useState<string>('')
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
