import type { Todo } from "../types";

export async function getTodos(): Promise<Todo[]> {
    try {
        const response = await fetch("http://localhost:5173/todos.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.todos || [];
    } catch (error) {
        console.error("Error fetching todos:", error);
        return [];
    }
}
