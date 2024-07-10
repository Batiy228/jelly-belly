import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { getRandom } from "../../helpers/getRandom";
import {
  fetchCombination,
  fetchBeanByTitle,
} from "../../redux/Combination/asyncActions";
import CardBean from "../../components/CardBean/CardBean";
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { Bean } from "../../@types/Bean";

const Combination: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const name = useAppSelector((state) => state.combination.combination?.name);
  const tag = useAppSelector((state) => state.combination.combination?.tag);
  const beans = useAppSelector((state) => state.combination.beans);
  const totalCountCombination = useAppSelector(
    (state) => state.combination.totalCount
  );
  const status = useAppSelector((state) => state.combination.status);

  if (status === "error") {
    navigate("/");
  }

  const getCombination = () => {
    const randCombination = getRandom(totalCountCombination);
    const url = `https://jellybellywikiapi.onrender.com/api/Combinations/${randCombination}`;
    dispatch(fetchCombination(url));
  };

  const getBeans = () => {
    tag
      ?.filter((item: string) => item !== "+")
      .forEach((title) => {
        dispatch(fetchBeanByTitle(title.replace(" ", "%20")));
      });
  };

  useEffect(() => {
    getCombination();
  }, []);

  useEffect(() => {
    getBeans();
  }, [tag]);

  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        sx={{ textAlign: "center", marginBottom: "30px" }}
      >
        {name}
      </Typography>
      <Grid container spacing={2}>
        {beans &&
          beans?.map((el: Bean) => {
            return el?.beanId && <CardBean {...el} />;
          })}
      </Grid>
      <Button
        sx={{ marginTop: "20px" }}
        variant="contained"
        onClick={getCombination}
      >
        new combination
      </Button>
    </div>
  );
};

export default Combination;
