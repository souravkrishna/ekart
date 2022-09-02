
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Badge, CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import { Rating } from "@mui/material";
import { Button } from "@mui/material";
import { BiCartAlt } from "react-icons/bi";
import ProductModal from "./productmodal";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";
import { onAddToCart } from "../redux/actions";
import {useDispatch} from "react-redux"

function ProductCard({ product, i }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const cartList = useSelector((state) => state.cartList);
  const { cartItems } = cartList;
  const handleClick  = () => {
    if(cartItems.map((item) => item.id).includes(product.id)) {
      enqueueSnackbar(`${product.title} has already been added to cart`,{variant: "warning"})
    }else {
      enqueueSnackbar(`${product.title} is added to cart`, { variant: "success"});
      dispatch(onAddToCart({title:product.title, image:product.filename, qty:1, id: product.id, price: product.price}))
      console.log(JSON.parse(localStorage.getItem("cartItem")));
    }
  }
  return (
    <Card key={i} sx={{ width: 400, margin: "auto", height: 570 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={product.filename}
          alt={product.title}
        />
      </CardActionArea>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          height: 250,
        }}
      >
        <Box sx={{ height: "170px" }}>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="h6" sx={{ color: "black" }}>
            {product.type}
          </Typography>
        </Box>
        <Box
          sx={{
            height: "100px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box>Rs:{product.price}</Box>
            <Box>
              <Rating name="read-only" value={product.rating} readOnly />
            </Box>
          </Box>
          <Box>
            {/* E-kart Product Modal component */}
            <ProductModal product={product} />
          </Box>
        </Box>
        <Box>
          <Button
            sx={{ width: "100%", bgcolor: "black", paddingTop: "10px" }}
            variant="contained"
            endIcon={<BiCartAlt />}
            onClick={handleClick}
          >
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
