    import React from 'react'
    const UserList = () => {
        const users = [
            {
            id: 1, name: "A", age: 27  
            },
                    {
            id: 2, name: "B", age: 26  
            },
                    {
            id: 3, name: "C", age: 25  
            }
        ]
    return (
        <div>
            {users.map(({name, age, id}) => (
                <div key={id}>
                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                </div>
    ))}
        </div>
    )
    }

    export default UserList