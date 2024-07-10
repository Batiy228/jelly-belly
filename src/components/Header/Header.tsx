import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PopupFact from "../Popup/PopupFact";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { fetchCountOfFacts, fetchFact } from "../../redux/Fact/asyncActions";
import { getRandom } from "../../helpers/getRandom";
import { fetchCountOfCombinations } from "../../redux/Combination/asyncActions";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const totalCountFacts = useAppSelector((state) => state.fact.totalCount);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [activePopup, setActivePopup] = useState(false);

  const openPopup = () => {
    setActivePopup(true);
  };

  const closePopup = () => {
    setActivePopup(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFact = () => {
    handleClose();
    openPopup();
    getFact();
  };

  const getCountOfFacts = () => {
    const url = "https://jellybellywikiapi.onrender.com/api/Facts/";
    dispatch(fetchCountOfFacts(url));
  };

  const getCountOfCombinations = () => {
    const url = "https://jellybellywikiapi.onrender.com/api/Combinations/";
    dispatch(fetchCountOfCombinations(url));
  };

  const getFact = () => {
    const randFact = getRandom(totalCountFacts);
    const url = `https://jellybellywikiapi.onrender.com/api/Facts/${randFact}`;
    dispatch(fetchFact(url));
  };

  useEffect(() => {
    getCountOfFacts();
    getCountOfCombinations();
  }, []);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/" style={{ flexGrow: 1, textDecoration: "none" }}>
            <Typography variant="h6" component="h1" sx={{ color: "#fff" }}>
              Jelly Belly Wiki
            </Typography>
          </Link>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              color="secondary"
            >
              Dashboard
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="recipes"
                sx={{ textDecoration: "none" }}
              >
                Recipes
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="history"
                sx={{ textDecoration: "none" }}
              >
                History
              </MenuItem>
              <MenuItem onClick={handleFact}>Fun Fact</MenuItem>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="combination"
                sx={{ textDecoration: "none" }}
              >
                Random Combination
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <PopupFact active={activePopup} closePopup={closePopup} />
    </>
  );
};

export default Header;
