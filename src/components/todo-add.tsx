import { useState } from "react";

interface TodoAddProps {
    onAdd: (title: string) => void;
}

export function TodoAdd({ onAdd }: TodoAddProps) {
    const [title, setTitle] = useState('');

    return (
        <div className="w-full mt-6 mb-4 flex flex-row items-center justify-center gap-3">
            <input placeholder="Add new task" className="w-full border-b-2 border-gray-100 py-2 ring-0 ring-offset-0"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            <button className="bg-red-300 w-9 h-9 rounded-md flex items-center justify-center hover:bg-red-400 transition-colors duration-300 cursor-pointer"
                onClick={() => {
                    if (title.trim()) {
                        onAdd(title);
                        setTitle('');
                    }
                }}>
                {/* Plus icon svg */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            </button>
        </div>
    )
}