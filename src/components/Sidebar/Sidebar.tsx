import { FC } from "react";
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
import { useAppSelector } from "../../store/hooks/storeHook";
import { RootState } from "../../store/store";

const Sidebar: FC = () => {
  const { productParam } = useAppSelector((state: RootState) => state.app);

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
            to={`/${item.name.toLowerCase()}`}
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
