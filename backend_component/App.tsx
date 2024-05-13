import axios, {  CanceledError } from 'axios'
import {useEffect, useState} from 'react';


interface User {
    id: number
    name: string
}

// get method returns a PROMISE: is an object that holds the eventual result or
// failure of an asynchronous(long-running) operations

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const[isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true)
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users/', {
        signal: controller.signal
      })
      .then(res => {
        setUsers(res.data)
        setLoading(false)
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)
      });
      

    return () => controller.abort();
  }, []);
        
    
        //setUsers(res.data)
        //const fetchUser = async () =>{
        //const res = await axios
        // try-catch method
       // try{
       // }
       // catch(err){
       //     setError((err as AxiosError).message)
       // }



   // fetchUser();

    const deleteUser = (user: User) => {
     // const originalUsers = [...users]
      setUsers(users.filter(u => u.id !== user.id))

      axios.delete('https://jsonplaceholder.typicode.com/users/' + user.id)
        .catch(err =>
          setError(err.message)
         // setUsers(originalUsers)
        )
    }

    const addUser = () =>{
      const originalUsers = [...users]
      const newUser = { id: 0, name: 'Mosh'}
      setUsers([...users, newUser])

      axios.post('https://jsonplaceholder.typicode.com/users/' , newUser)
        .then(({data: savedUser}) => setUsers([savedUser, ...users]))
        .catch(err => {
          setError(err.message)
          setUsers(originalUsers)

        })
    }

      const updateUser = (user: User) => {
        const originalUsers = [...users]
        const updatedUser = {...user, name: user.name + "!"}
        setUsers(users.map(u => u.id === user.id ? updatedUser:u ))

        axios.patch('https://jsonplaceholder.typicode.com/users/' + user.id, updatedUser)
          .catch(err => {
            setError(err.message)
            setUsers(originalUsers)
          }
          )
      }

    return (
        <>  
            {error && <p className="text-danger">{error}</p>}
            {isLoading && <div className="spinner-border"></div>}
            <button className='btn btn-primary mb-3' onClick={addUser}>Add</button>

            <ul className='list-group'>
                {users.map(user => <li key = {user.id} className='list-group-item d-flex justify-content-between'> 
                {user.name} {" "}
                <div>
                  <button className='btn btn-outline-secondary'onClick={() => updateUser(user)}>Update</button>
                  <button onClick={() => deleteUser(user)}className="btn btn-outline-danger">Delete</button>
                </div>

                </li>)}
            </ul>
        </>
    );

}

export default App