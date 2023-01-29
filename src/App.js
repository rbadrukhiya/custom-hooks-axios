import logo from './logo.svg';
import './App.css';
import useAxios from './useAxios';

function App() {
  // const [data, setData] = useState(null);
  const [data] = useAxios("https://jsonplaceholder.typicode.com/todos");


  return (
    <div className="App">
      {
        data &&
        data.map((item) =>{
            <p> {item.id}
            </p>
        })
      }
    </div>  
  );
}

export default App;
