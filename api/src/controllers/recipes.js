const Sequelize = require('sequelize');
const { Op } = require("sequelize");
const db = require('../db');
const { Recipe, Diet } = require('../db');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios').default;
const { API_KEY } = process.env;



async function getRecipes(req,res, next) {
    let result = [];
    try {
        const getRecipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
        const dbRecipes = await Recipe.findAll({
          include: Diet
        }); 
        
        getRecipes.data.results.forEach((recipe)=> {
            result.push(new Recipe(recipe))
        });

        result = result.concat(dbRecipes)
      } catch(error) {
        next(error)
      }

      result.length ? res.send(result)
        : res.send('Esta vacio')
  }

async function getRecipeByName(req,res,next){
    
    const { title } = req.query
    try{
        const apiRecipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&query=${title}`)
        // console.log(apiRecipes.data.results)
        const dbRecipes = await Recipe.findAll({
            where: {title: 
                { [Op.iLike]: `%${title}%`}
              },include: Diet
            }
          )
        //   console.log(dbRecipes)
        if (dbRecipes.length === 0) {
            let result = apiRecipes.data.results.slice(0, 9)
            if (apiRecipes.data.results.length === 0) return res.status(404).send('Invalid search')
            return res.send(result) 
        } else {
            let arrayResponse = []
            for(let i = 0; i < dbRecipes.length; i++) {
                // let dietsMap = []
                // dbRecipes[i].diets.map((diet) => (
                //   dietsMap.push(diet.name)
                // )
                // )
                let objectResponseDB = {
                  id: dbRecipes[i].id,
                  title: dbRecipes[i].title,
                  summary: dbRecipes[i].summary,
                  spoonacularScore: dbRecipes[i].spoonacularScore,
                  healthScore: dbRecipes[i].healthScore,
                  analyzedInstructions: dbRecipes[i].analyzedInstructions,
                  image: dbRecipes[i].image, 
                  diets: []
                }
              arrayResponse.push(objectResponseDB)
            } 
            let totalRecipes = arrayResponse.concat(apiRecipes.data.results)
            let totalRecipesConcat = totalRecipes.slice(0,9)
            return res.send(totalRecipesConcat)
        }
    } catch (error) {
          next(error)
    } 
}

async function getRecipeById (req, res, next) {
    const {id} = req.params
    try {
        const apiRecipes = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=false`)
        console.log(apiRecipes.title)
        return res.send(apiRecipes.title)
    } catch(error){
        next(error)
    }
}

async function postRecipe(req, res) {
    const { title, summary, spoonacularScore, healthScore, analyzedInstructions, image, diets } = req.body; 
    const id = uuidv4();
    if (!title || !summary) return res.status(404).json({})
        const newRecipe = await Recipe.create({
            id: id, 
            title: req.body.title,
            summary: req.body.summary,
            spoonacularScore: req.body.spoonacularScore,
            healthScore: req.body.healthScore,
            image: req.body.image, 
            analyzedInstructions: [req.body.analyzedInstructions]
        }) 
        // for(let i = 0; i < diets.length; i++) {
        //   await newRecipe.addDiet(diets[i], {through: 'recipe_diet'})
        // }
        const recipes_diets = await Recipe.findOne({
          where: {
            title: req.body.title
          },
          include: Diet
        })
    
        return res.json(recipes_diets) 
} 

module.exports = {
    getRecipes,
    getRecipeByName,
    getRecipeById,
    postRecipe,
}