import type { Todo } from '../types';

interface TodoProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoProps) {
    return (
        <div className="flex items-center rounded-xl justify-between p-2 px-4 border border-gray-500 hover:scale-105 transition-transform duration-300 mb-2 cursor-pointer"
            onClick={() => onToggle(todo.id)}>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => {
                        e.stopPropagation(); // Prevent the click from toggling the item
                        onToggle(todo.id);
                    }}
                    aria-label={`Toggle completion for ${todo.title}`}
                    className="mr-2 ring-0"
                />
                <span className={todo.completed ? 'line-through' : ''}>
                    {todo.title}
                </span>
            </div>
            <button onClick={() => onDelete(todo.id)} className="text-gray-400 cursor-pointer">
                {/* X icon svg */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}