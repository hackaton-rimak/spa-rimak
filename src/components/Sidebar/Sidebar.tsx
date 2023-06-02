import { FC, useEffect } from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Logo from "../Logo/Logo";
import { IProduct, products } from "../../shared/constants/products";
import { sidebarStyles as styles } from "./Sidebar.styles";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks/storeHook";
import { RootState } from "../../store/store";
import {
  getData,
  getDataInsights,
  IRimakRequest,
} from "../../store/thunks/app.thunk";

const Sidebar: FC = () => {
  const { productParam, client } = useAppSelector(
    (state: RootState) => state.app
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productParam) return;
    const request: IRimakRequest = {
      product: productParam,
      type: productParam === "insights" ? "question_average" : "",
    };

    if (!request.type) {
      let req: IRimakRequest = {
        ...request,
        client,
      };
      dispatch(getData(req));
    } else {
      dispatch(getDataInsights(request));
    }
  }, [productParam, client]);

  return (
    <Drawer sx={styles.drawer} variant="permanent" anchor="left">
      <Toolbar>
        <Logo />
      </Toolbar>
      <Divider sx={styles.divider} />
      <List>
        {products.map((item: IProduct) => (
          <NavLink
            key={item.name}
            to={`/${item.route}`}
            style={({ isActive }) => ({
              color: isActive ? "transparent" : "transparent",
              textDecoration: "none",
            })}
          >
            <ListItem
              id={"listItem"}
              sx={
                item.name.toLowerCase() === productParam
                  ? styles.sectionSelected
                  : styles.section
              }
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} sx={styles.productName} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
