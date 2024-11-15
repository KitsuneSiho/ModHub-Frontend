import {useEffect, useState} from "react";
import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8080'  // Spring Boot 서버 주소
});

function App() {
    const [hello, setHello] = useState('');

    useEffect(() => {
        api.get('/api/test')
            .then((res) => {
                setHello(res.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className="App">
            백엔드 데이터 : {hello}
        </div>
    );
}

export default App;