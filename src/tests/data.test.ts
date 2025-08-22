import { expect, test } from 'vitest'
import { getTodos } from '../services/data'

test('getTodos returns an array of todos', async () => {
    const todos = await getTodos();
    expect(Array.isArray(todos)).toBe(true);
    expect(todos.length).toBeGreaterThan(0);
    todos.forEach(todo => {
        expect(todo).toHaveProperty('id');
        expect(todo).toHaveProperty('title');
        expect(todo).toHaveProperty('completed');
    });
});