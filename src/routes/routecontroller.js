import Home from "../pages/home"
import {Routes,Route} from 'react-router-dom'
import Projects from "../pages/projects"
import About from "../pages/about"
import Skills from "../pages/skillspage"

const Routecontroller = ()=>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            
        </Routes>
    )
}

export default Routecontroller