import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import { BiCartAlt } from "react-icons/bi";
import { Badge, Button } from "@mui/material";
import Link from "next/link";
import { useSelector } from "react-redux";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function ProductAppBar(props) {
  const cartList = useSelector((state) => state.cartList);
  const { cartItems } = cartList;

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar sx={{ backgroundColor: "black" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link href="/">
              <Typography
                sx={{ fontSize: "40px", cursor: "pointer" }}
                variant="h1"
                component="div"
              >
                E-k@rt
              </Typography>
            </Link>
            {/* Linking Cart page */}
            <Link href="/cartpage">
              <Box>
                <Badge badgeContent={cartItems.length} color="error">
                  <Button
                    sx={{
                      bgcolor: "white",
                      color: "black",
                      ":hover": { bgcolor: "white" },
                    }}
                    variant="contained"
                    endIcon={<BiCartAlt />}
                  >
                    Cart
                  </Button>
                </Badge>
              </Box>
            </Link>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Box>
        {/* E-Kart Home Page component */}
        {/* <HomePage /> */}

        {/* E-Kart Bottom AppBar component*/}
        {/* <ProductBottomBar /> */}
      </Box>
    </React.Fragment>
  );
}

export default ProductAppBar;
