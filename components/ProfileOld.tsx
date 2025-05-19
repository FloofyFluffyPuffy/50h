import React from 'react'
import { useState } from 'react'
const Profile = () => {
        const [Profile, setProfile] = useState({
        name: '' , age: ''
    })
    const onChangeName = (e) => {
        setProfile({...Profile, name:e.target.value})
    }
        const onChangeAge = (e) => {
        setProfile({...Profile, age:e.target.value})
    }
  return (
    <div>
        <h1>Info</h1>
        <p>Name: {Profile.name}</p>
        <p>Age: {Profile.age}</p>
        <form action="submit" onSubmit={(e) => {e.preventDefault()}}>
            <input type="text" value={Profile.name}
            onChange={onChangeName}  />
            <button type='submit'>SUBMIT</button>
        </form>
                <form action="submit" onSubmit={(e) => {e.preventDefault()}}>
            <input type="number" value={Profile.age}
            onChange={onChangeAge} />
            <button type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Profile