import { Route, Routes } from 'react-router-dom'
import AllMettups from './Pages/AllMettups'
import Favorite from './Pages/Favorite'
import NewMeetup from './Pages/NewMeetup'
import Layout from './Components/layout/Layout'


function App() {
  return (

    <Layout>
      <Routes>
        <Route path='/' element={<AllMettups />} exact></Route>
        <Route path='/favorite' element={<Favorite />}></Route>
        <Route path='/new-meetup' element={<NewMeetup />}></Route>
      </Routes>
    </Layout>

  );
}

export default App;
