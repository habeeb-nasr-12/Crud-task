// import { json } from "stream/consumers";

const base_Url = 'http://localhost:3001';

export const getAllClients = async () => {
    const res = await fetch(`${base_Url}/clients`, { cache: "no-store" });
    const toDos = await res.json();
    return toDos;
};

export const addClient = async (todo) => {
    const res = await fetch(`${base_Url}/clients`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    });
    const newTodo = await res.json();
    return newTodo;
};

export const editClient = async (todo) => {
    const res = await fetch(`${base_Url}/clients/${todo.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    });

    const updatedTodo = await res.json();
    return updatedTodo;
};

export const deleteClient = async (id) => {
    const res = await fetch(`${base_Url}/clients/${id}`, {
        method: 'DELETE'
    });
};