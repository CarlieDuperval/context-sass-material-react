import { Input } from '@mui/material';
import { useContext } from 'react'
import { TodoListContext } from '../context/TodoLisContext'

export const inputBox = () => {
    const { input, setInput } = useContext(TodoListContext);

    return (
        <Input
        placeholder='Add your Next Task!'
        value={input}
        onChange={(e) => setInput(e.target.value)}
    />
    )
}