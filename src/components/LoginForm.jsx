import { useState } from "react";
import axios from "axios";

const LoginForm = () =>{

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] =useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();

        const authObject = {'Project-ID': process.env.REACT_APP_PROJECT_ID_KEY, 'User-Name': username, 'User-Secret':password}

        try{
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password',password);

            window.location.reload();
            setError('');
        }
        catch(err){
            setError('opps incorrect credentials');
        }
    }
    
    const signUp = async(e) =>{
        e.preventDefault();

        const authObject =  {'Private-Key': process.env.REACT_APP_Private_KEY};

        try{
            await axios.post(
                "https://api.chatengine.io/users/",
                {'username': username, 'secret': password}, // Body object
                {'headers': authObject} // Headers object
              );

            localStorage.setItem('username', username);
            localStorage.setItem('password',password);

            window.location.reload();
            setError('');
        }
        catch(err){
            setError('opps error creating new user');
            console.log(err);
        }

    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=> setUserName(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button"><span>Log in</span></button>
                        <button onClick={signUp} className="button"><span>sign up</span></button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    )
}

export default LoginForm;