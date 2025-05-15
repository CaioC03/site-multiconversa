import Login from './pages/Login';
import Recuperar from './pages/Recuperar'
import Cadastro from './pages/Cadastro';
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/recuperar' element={<Recuperar />}></Route>
      <Route path='/cadastro' element={<Cadastro />}></Route>
      
      </Routes>
  );
}
export default App;