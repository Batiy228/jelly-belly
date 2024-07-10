import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useEffect } from "react";
import { fetchHistory } from "../../redux/HistorySlider/asyncActions";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { nextPage, prevPage } from "../../redux/HistorySlider/slice";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const HistorySlider: React.FC = () => {
  const dispatch = useAppDispatch();
  const { mileStone, page } = useAppSelector((state) => state.history);

  const getMileStones = () => {
    const url = `https://jellybellywikiapi.onrender.com/api/MileStones/?pageIndex=${page}&pageSize=10`;
    dispatch(fetchHistory(url));
  };

  const handlePrevPage = () => {
    dispatch(prevPage());
  };

  const handleNextPage = () => {
    dispatch(nextPage());
  };

  useEffect(() => {
    getMileStones();
  }, [page]);

  return (
    <div>
      <List
        sx={{
          width: "100%",
          maxWidth: "auto",
          bgcolor: "primary",
          height: "800px",
        }}
      >
        {mileStone.map((el) => {
          return (
            <ListItem
              sx={{ width: "100%", maxWidth: "auto", bgcolor: "primary" }}
            >
              <ArrowRightIcon />
              <ListItemText primary={el.description} secondary={el.year} />
            </ListItem>
          );
        })}
      </List>

      <IconButton
        size="small"
        aria-label="row"
        color="primary"
        disabled={page === 1}
        onClick={handlePrevPage}
      >
        <ArrowCircleLeftIcon />
      </IconButton>
      <IconButton
        size="large"
        aria-label="row"
        color="primary"
        onClick={handleNextPage}
        disabled={page === 3}
      >
        <ArrowCircleRightIcon />
      </IconButton>
    </div>
  );
};

export default HistorySlider;
