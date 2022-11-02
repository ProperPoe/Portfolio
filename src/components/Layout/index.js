import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'


function Layout(){
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <Outlet />
            </div>
            {/*<img src={Keyboard} alt='developer' />*/}
        </div>
    )
}

export default Layout
