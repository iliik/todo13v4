import axios from "axios";


export const instans = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "45e010e4-6515-4f44-948c-de88f0fc6daf"
    }
})
export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}

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

export type UpdateTaskType={
    description: string
    title: string
    status: number
    priority: number
    startDate: string
    deadline: string
}
export const todolistAPI = {
    getTodolist() {
        return instans.get<TodolistType[]>("todo-lists")
    },
    createTodolist(title: string) {
        return instans.post<ResponseType<{ item: TodolistType }>>("todo-lists", {title: title})
    },
    deleteTodolist(todolistId: string) {
        return instans.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodolist(id: string, title: string) {
        return instans.put<ResponseType>(`todo-lists${id}`, {title: title})

    }
}