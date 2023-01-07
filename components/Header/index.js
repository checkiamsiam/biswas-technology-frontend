import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import HeaderMain from "./HeaderMain";
import HeaderTop from "./HeaderTop";

const Header = () => {
  const [hideness, setHideness] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 50) {
        setHideness(true);
      } else {
        setHideness(false);
      }
    };
    window.addEventListener("scroll", controlNavbar);
  }, []);
  return (
    <Stack
      width="100%"
      zIndex={9999}
      sx={{ backgroundColor: "transparent", position: "fixed", top: hideness ? { sm: "-60px", xs: "-100px" } : "0px", transition: "0.3s linear" }}
    >
      <HeaderTop />
      <HeaderMain hideness={hideness} />
    </Stack>
  );
};

export default Header;
