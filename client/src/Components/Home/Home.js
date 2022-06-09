// import React, {useState, useEffect} from 'react';
// import { useSelector} from 'react-redux';
// import Pagination  from '../Pagination/Pagination';
// import FilterOptions from '../FilterOptions/FilterOptions';
// import DisplayRecipes from '../DisplayRecipes/DisplayRecipes';
// import Nav from '../Nav/Nav';
// import './Home.css'

function Home() {
//   const {recipes} = useSelector((state) => state);
//   const {filteredRecipes} = useSelector((state) => state);
//   const {filterBy} = useSelector((state) => state);
//   const {orderBy} = useSelector((state) => state);

//    const [allRecipes, setAllRecipes] = useState([])
//     const [page, setPage] = useState(1);
//     const [recipesPerPage] = useState(9);

    
//     useEffect(() => {
//        if(filterBy === 'All' && orderBy === 'Select') {
//         setAllRecipes(recipes.slice())
//     } else {
//         setAllRecipes(filteredRecipes.slice())
//     }
//        // eslint-disable-next-line react-hooks/exhaustive-deps
//       }, [filterBy, orderBy, recipes]);  

//      /*  useEffect(() => {
//         dispatch(getRecipes())
//         dispatch(getDiets())
//       },[]) */
     
//       console.log(recipes)
//       // Pagination

//   let indexLastPage = page * recipesPerPage;
//   // indice del último elemento de cada pagina
//   let indexFirtsPage = indexLastPage - recipesPerPage;
//   // indice del primer elemento de cada pagina
//   let currentPage = allRecipes.slice(indexFirtsPage, indexLastPage);
//   // recipes de la pagina actual

    return (
        <div>
            <div>
            Bienvenidos
            </div>
        </div>
    )
}


export default Home;
