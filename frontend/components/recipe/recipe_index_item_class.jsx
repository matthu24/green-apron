// import React from 'react';
// import { Link, Route } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
//
// class RecipeIndexItemClass extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {favorite:true,
//       createFavorite: props.createFavorite,
//       deleteFavorite:props.deleteFavorite,
//       recipes: props.recipes,
//       recipe: props.recipe,
//       currentUser:props.currentUser
//     };
//     this.deleteFavorite = this.deleteFavorite.bind(this);
//     this.createFavorite = this.createFavorite.bind(this);
//   }
//
//   deleteFavorite(favorited_id){
//     this.state.deleteFavorite(favorited_id);
//     // let newState = this.state.favorite === true ? (false) : (true);
//     // this.setState({favorite:newState});
//   }
//
//   createFavorite(){
//     this.state.createFavorite({user_id: this.state.currentUser.id, recipe_id: this.state.recipe.id})
//     // let newState = this.state.favorite === true ? (false) : (true);
//     // this.setState({favorite:newState});
//   }
//
//   render(){
//     const recipeImage = this.state.recipe.image_file_name;
//     let favorited = false;
//     let favorited_id;
//     //recipes is an array of recipe objects
//     // if (!this.state.recipes) return null;
//     if (this.state.recipes) {
//       this.state.recipes.forEach(recipe => {
//         //recipe is an object,
//         //recipe.favorites is an object of favorite objects
//         if (recipe.favorites) {
//           for (var favorite_id in recipe.favorites) {
//             // recipe.favorites[favorite_id] is the favorite object
//             let favorite = recipe.favorites[favorite_id];
//             if (favorite.user_id === this.state.currentUser.id && favorite.recipe_id === this.state.recipe.id){
//                 favorited = true;
//                 favorited_id = favorite_id;
//             }
//           }
//         }
//       })
//     }
//
//     const favoriteButton = favorited ? (
//       <button className='un-favorite'
//          onClick={this.deleteFavorite(favorited_id)}>Unfavorite
//        </button>
//     ):(
//       <button className= 'favorite'
//         onClick={this.createFavorite}>Favorite
//       </button>
//     )
//
//     return(
//       <li className="recipe-item">
//         <Link className='recipe-show' to ={`/recipes/${this.state.recipe.id}`}>
//           <img className='recipe-image' src={recipeImage}/>
//         </Link>
//         <div className='recipe-title'>
//           {this.state.recipe.title}
//         </div>
//         <div className='recipe-description'>
//           {this.state.recipe.description}
//         </div>
//         <br></br>
//           {favoriteButton}
//       </li>
//     )
//   }
// }
//
// export default RecipeIndexItemClass
