import type { Todo } from "../types";
import { TodoItem } from "./todo";

interface TodoListProps {
    todos?: Todo[];
    handleToggle: (id: number) => void;
    handleDelete: (id: number) => void;
}

export default function TodoList({ todos, handleDelete, handleToggle }: TodoListProps) {

    return (
        <div className="w-full">
            {
                todos?.map(todo => (
                    <TodoItem todo={todo}
                        key={todo.id}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />))
            }
        </div>
    )
}