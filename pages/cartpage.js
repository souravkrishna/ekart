
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from "react-redux";
import { Box, Button, Typography } from '@mui/material';
import { onRemoveFromCart, onChangeQty} from '../redux/actions';
import {useDispatch} from "react-redux"




function CartPage()
{
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(onRemoveFromCart(id))
  }

  const cartList = useSelector((state) => state.cartList);
  const { cartItems } = cartList;

  const totalSumArray = cartItems.map((item) => item.price * item.qty);
  const totalSum = totalSumArray.reduce((prev, current) => prev + current,0);
  const totalQtyArray = cartItems.map((item) => item.qty);
  const totalQty = totalQtyArray.reduce((prev, current) => prev + current,0);

  const handleChange = (id,qty) => {
    dispatch(onChangeQty(id,qty));
  }
  

    return (
      <div>
      <TableContainer component={Paper}>
          <Table sx={{backgroundColor:"#c8e6c9"}} aria-label="simple table">
            <TableBody>
              {cartItems.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row"><img width={80} height={80} src={row.image} alt={row.title}></img></TableCell>
                  <TableCell component="th" scope="row">{row.title}</TableCell>
                  <TableCell>Rs:{row.price}</TableCell>
                  <TableCell align="center"><input onChange={(e) => handleChange(row.id,Number(e.target.value))} size="1" maxLength="2" value={row.qty}></input></TableCell>
                  <TableCell align='right'><Button sx={{backgroundColor:"black"}} variant="contained" onClick={() => handleRemove(row.id)}>Remove</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
        </TableContainer>
          <Box sx={{backgroundColor:"black", width:"100%",height:80, display:"flex"}}>
            <Box sx={{width:"20%",height:40, fontWeight:"bold", color:"white", fontFamily:"helvetica", width:500,  height:40, fontSize:25, margin:"auto"}}>Total Qty:{totalQty}</Box>
            <Box sx={{fontWeight:"bold", color:"white", fontFamily:"helvetica", width:"60%",  height:40, fontSize:25, margin:"auto"}}>Total Price:{(Math.round(totalSum * 100) / 100).toFixed(2)}</Box>
            <Button sx={{width:"20%",height:40, margin:"auto"}} variant="contained" color="success">Checkout</Button>
          </Box>
        </div>
      );
}

export default CartPage;