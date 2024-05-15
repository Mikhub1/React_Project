import React from react
import apiClient from "./apiClient"

export interface User {
    id: number
    name: string
}

class UserService
{

    getAllUsers(){
        const controller = new AbortController();
        const request = apiClient.get<User[]>("/user", {
            signal : controller.signal
        })
        return {request, cancel: () => controller.abort()}

    }

    deleteCity (id: number){
        apiClient.delete("/users/" + id)
    }

    createCity (user: User) 
    {
        return apiClient.post("/users", user)
    }

    updateCity (user: User)
    {
        apiClient.patch("/users" +user.id + user)
    }
}

export default new UserService();