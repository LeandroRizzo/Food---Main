import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getDiets } from '../../Redux/Actions/dietsActions';
import { getRecipes} from '../../Redux/Actions/recipesActions'
// import './Landing.css'

function Landing() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRecipes())
    }, [])

    return (
        <div>
            <h1>Welcome!</h1>
            <button><Link to='/home'> HOME </Link></button>
        </div>
    )
}

export default Landing;