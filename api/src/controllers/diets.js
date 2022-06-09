const { Diet } = require('../db')
const axios = require('axios').default
const { API_KEY } = process.env

async function getDiets (req, res, next) {
const result = [];
  try{
    const dietsData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    // console.log(dietsData.data.results[0].diets)
    for(let i=0; i<dietsData.data.results.length;i++){
        for(let j =0; j<dietsData.data.results[i].diets.length; j++){
            if(!result.includes(dietsData.data.results[i].diets[j])){
                result.push(dietsData.data.results[i].diets[j])
            }
        }
    } 
    for(let w= 0; w<result.length;w++){
        Diet.findOrCreate({where:
            {name:result[w]}
        })
    }
  }catch (error) {
    next(error)
  }
  console.log(result)
  res.send(result)
}
  
  module.exports = {
    getDiets}