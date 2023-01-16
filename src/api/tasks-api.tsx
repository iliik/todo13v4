import {instans} from "./todolist-api";

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export type TasksType = {
    description: string
    title: string
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todolistId: string
    order: number
    addedDate: string
}
export type GetTasksResponse = {
    totalCount: number
    error: string | null
    items: TasksType[]
}

export type UpdateTaskModelType ={
    description: string
    title: string
    status: number
    priority: number
    startDate: string
    deadline: string
}

export const tasksApi = {
    getTasks(todolistId: string) {
        return instans.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
    },
    deleteTask(todolistId: string, taskId: string) {
        return instans.delete<ResponseType>(`todo-lists/${todolistId}/tasks${taskId}`)
    },
    putTasks(todolistId: string, taskTitle:string, model: UpdateTaskModelType) {
        return instans.put<ResponseType>(`todo-lists/${todolistId}/tasks`,model)
    },
    postTask(todolistId: string, taskId: string, ) {
        return instans.post<ResponseType<TasksType>>(`todo-lists/${todolistId}/tasks${taskId}`,{title:'ooollllololol'})
    },
}


