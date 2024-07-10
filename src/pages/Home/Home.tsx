import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { fetchBeans } from "../../redux/Beans/asyncActions";
import { outOfBeans } from "../../redux/Beans/slice";
import CardBean from "../../components/CardBean/CardBean";
import InfiniteScroll from "react-infinite-scroll-component";
import { Grid } from "@mui/material";
import loadingSvg from "../../img/Loading.svg";
import { Bean } from "../../@types/Bean";

const Home: React.FC = () => {
  const { beans, page, hasMore, totalPages } = useAppSelector(
    (state) => state.beans
  );
  const dispatch = useAppDispatch();

  const beansCards = beans.map((bean: Bean) => {
    return <CardBean {...bean} />;
  });

  const getBeans = () => {
    const url = `https://jellybellywikiapi.onrender.com/api/Beans?pageIndex=${page}&pageSize=10`;
    if (page <= totalPages || page === 1) {
      dispatch(fetchBeans(url));
    } else dispatch(outOfBeans());
  };

  useEffect(() => {
    getBeans();
  }, []);

  return (
    <>
      <InfiniteScroll
        dataLength={beans.length}
        next={getBeans}
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
          {beansCards}
        </Grid>
      </InfiniteScroll>
    </>
  );
};

export default Home;
