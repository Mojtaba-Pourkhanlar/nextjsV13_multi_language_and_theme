// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            background: {
              default: "#212121",
            },
          }
        : {
            background: {
              default: "#ccc",
            },
          }),
    },
  };
};
