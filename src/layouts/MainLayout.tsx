import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import { Container } from "@mui/material";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Container
        sx={{
          marginTop: "64px",
          textAlign: "center",
          backgroundColor: "white",
          padding: 2,
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
