import React, { useEffect } from 'react'
import { useResource } from 'react-request-hook'

import Todo from '../Todo'

export default function TodoPage ({ id }) {
    const [ todo, getTodo ] = useResource(() => ({
        url: `/todos/${id}`,
        method: 'get'
    }))
    useEffect(getTodo, [id])

    return (
        <div>
            {(todo && todo.data)
                ? <Todo {...todo.data} />
                : 'Loading...'
            }
            <hr />
        </div>
    )
}