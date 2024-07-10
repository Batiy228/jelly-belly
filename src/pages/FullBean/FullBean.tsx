import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchFullBean } from "../../redux/FullBean/asyncActions";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { Box, Chip, Typography } from "@mui/material";

const FullBean: React.FC = () => {
  const { bean, status } = useAppSelector((state) => state.fullBean);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  if (status === "error") {
    navigate("/");
  }

  const getFullBean = () => {
    if (id) {
      dispatch(fetchFullBean(id));
    }
  };

  useEffect(() => {
    getFullBean();
  }, []);

  return (
    <Box>
      <Box
        component="img"
        sx={{
          width: "100%",
          height: "500px",
          objectFit: "contain",
          border: `2px solid ${bean?.backgroundColor || "#ddd"}`,
          borderRadius: "4px",
        }}
        src={bean?.imageUrl}
        alt="bean"
      />
      <Typography variant="h2" component="h2">
        {bean?.flavorName}
      </Typography>
      <Typography
        color="grey"
        variant="body1"
        component="p"
        sx={{ flexGrow: 1 }}
      >
        {bean?.description}
      </Typography>
      <Typography
        variant="h6"
        component="p"
        sx={{ flexGrow: 1, marginBottom: "20px" }}
      >
        Color group: {bean?.colorGroup}
      </Typography>
      <Typography variant="h5" component="span">
        Ingridients
      </Typography>
      <ul>
        {bean?.ingredients.map((ingridient) => {
          return (
            <Chip sx={{ margin: "5px" }} color="primary" label={ingridient} />
          );
        })}
      </ul>
    </Box>
  );
};

export default FullBean;
