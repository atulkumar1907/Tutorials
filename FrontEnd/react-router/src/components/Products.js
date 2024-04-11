import {Link, Outlet} from 'react-router-dom'
import { Featured } from './Featured'
import { New } from './New'

export function Products(){

        return (

            <>
                <div>
                <input type='search' placeholder='Searh products...'/>
                </div>
                {/* <button>search</button> */}
                <nav>
                    <Link to='featured'>Featured</Link>
                    <Link to='new'>New</Link>
                </nav>
                <Outlet></Outlet>

            </>
        )
}