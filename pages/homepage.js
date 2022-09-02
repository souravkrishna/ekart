import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import ProductCard from "../components/productcard";
import { onGetProducts } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ProductBottomBar from "../components/productbottombar";

function HomePage() {
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetProducts());
  }, [dispatch]);

  return loading ? (
    <div style={{ height: "100vh", width: "100%", backgroundColor: "#212121" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress disableShrink />
      </Backdrop>
    </div>
  ) : error ? (
    <div style={{ paddingTop: 13 }}>Error</div>
  ) : (
    <>
      <Box sx={{ backgroundColor: "#e90052", padding: 3 }}>
        <Grid container spacing={2}>
          {products.map((product, i) => (
            <Grid item xs={12} md={3} key={product.id}>
              <Box sx={{ height: "100%", width: "auto", display: "flex" }}>
                {/* E-Kart Productcard component */}
                <ProductCard product={product} key={i} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <ProductBottomBar />
    </>
  );
}

export default HomePage;
