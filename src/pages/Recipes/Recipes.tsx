import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import InfiniteScroll from "react-infinite-scroll-component";
import { Grid } from "@mui/material";
import { outOfRecipes } from "../../redux/Recipes/slice";
import CardRecipe from "../../components/Recipe/CardRecipe";
import { fetchRecipes } from "../../redux/Recipes/asyncActions";
import loadingSvg from "../../img/Loading.svg";
import { Recipe } from "../../@types/Recipe";

const Recipes: React.FC = () => {
  const { recipes, page, totalPages, hasMore } = useAppSelector(
    (state) => state.recipes
  );
  const dispatch = useAppDispatch();

  const recipesCards = recipes.map((recipe: Recipe) => {
    return <CardRecipe {...recipe} />;
  });

  const getRecipes = () => {
    const url = `https://jellybellywikiapi.onrender.com/api/Recipes?pageIndex=${page}&pageSize=10`;
    if (page <= totalPages || page === 1) {
      dispatch(fetchRecipes(url));
    } else dispatch(outOfRecipes());
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      <InfiniteScroll
        dataLength={recipes.length}
        next={getRecipes}
        hasMore={hasMore}
        loader={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img width="50px" src={loadingSvg} alt="loading" />
          </div>
        }
        endMessage={<p>Больше данных нет</p>}
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2}>
          {recipesCards}
        </Grid>
      </InfiniteScroll>
    </>
  );
};

export default Recipes;
