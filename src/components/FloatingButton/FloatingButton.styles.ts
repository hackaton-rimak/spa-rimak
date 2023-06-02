import { createNamedStyles } from "../../shared/interfaces/create_named_styles";


export const floatingButtonStyles = createNamedStyles({
  floatingButton: {
      zIndex:100,
      backgroundColor:"#023365",
      borderRadius: "50%",
      position: "fixed",
      top: "90%",
      left: "90%",
      width: "60px",
      height: "60px",
      textAlign: "center"
  },
  iconFloatting: {
    fontSize: "2.5rem",
    color: "white"
  },
  container:{
    position: "fixed",
    top: "90%",
    left: "90%",
  },
  floatingSquare:{
    position: "fixed",
    top: "29%",
    left: "71%",
    width: "400px",
    height: "600px",
    backgroundImage: "url('./../../public/floating.png')",
    backgroundSize: "400px 600px",
    backgroundRepeat: "no-repeat",
    borderRadius: "3%",
    boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  }
});
