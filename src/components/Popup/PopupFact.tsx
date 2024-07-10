import { Box, Button, Typography } from "@mui/material";
import { useAppSelector } from "../../redux/redux-hooks";
import styles from "./Popup.module.scss";
import React from "react";

type PopupProps = {
  active: boolean;
  closePopup: () => void;
};

const PopupFact: React.FC<PopupProps> = ({ active, closePopup }) => {
  const { fact } = useAppSelector((state) => state.fact);
  const { factId, title, description } = fact || {};
  return (
    <div className={`${styles.modal} ${active ? styles.active : ""}`}>
      <div className={`${styles.modalContent} ${active ? styles.active : ""}`}>
        <div className={styles.info}>
          {/* <h1>{title}</h1> */}
          {/* <p>{description}</p> */}
          {/* <p>Fan Fact #{factId}</p> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "CenterFocusStrong",
              textAlign: "center",
              gap: "40px",
            }}
          >
            <Typography variant="h4" component="h2">
              {title}
            </Typography>
            <Typography variant="body1" component="p">
              {description}
            </Typography>
            <Typography variant="h6" component="span">
              Fan Fact #{factId}
            </Typography>
          </Box>
          <Button variant="contained" onClick={closePopup}>
            Хорошо
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopupFact;
