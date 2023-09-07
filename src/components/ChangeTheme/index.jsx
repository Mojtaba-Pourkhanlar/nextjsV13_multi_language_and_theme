import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { changeTheme } from "@/store/Actions/Root";
import Image from "next/image";
import light from "@/assets/light.png";
import dark from "@/assets/dark.png";

export const ChangeTheme = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isDarkMode = useSelector((state) => state.root.darkMode);

  const toggleTheme = () => {
    localStorage.setItem("dark", !isDarkMode);
    dispatch(changeTheme());
  };

  console.log("theme.palette.mode", theme.palette.mode);

  return (
    <>
      <Box sx={{ cursor: "pointer", width: "fit-content" }}>
        <Box sx={{ ml: 1 }} onClick={() => toggleTheme()}>
          {theme.palette.mode === "dark" ? (
            <Box>
              <Image src={light} alt="light" />
            </Box>
          ) : (
            <Image src={dark} alt="dark" />
          )}
        </Box>
      </Box>
    </>
  );
};
