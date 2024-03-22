// import { useDispatch, useSelector } from "react-redux";
// import styles from "./carrinho.module.css";
// import Modal from "@mui/material/Modal";
// import { carrinhoActions } from "../../store/carrinho/carrinhoSlice";
// import { Box } from "@mui/material";

// const Carrinho = () => {
//   const carrinhoState = useSelector((state) => state.carrinho.modalCarrinho);
//   const carrinhoItens = useSelector((state) => state.carrinho.itens);
//   const dispatch = useDispatch();
//   console.log(carrinhoItens);
//   console.log(carrinhoItens.length);
//   return (
//     <Modal
//       open={carrinhoState}
//       onClose={dispatch(carrinhoActions.handleChangeModal())}
//     >
//       <Box>
//         <h3>Seu carrinho</h3>

//         {carrinhoItens.length > 0 ? (
//           carrinhoItens.map((item) => <p key={item.id}>{item.title}</p>)
//         ) : (
//           <p>Carrinho vazio</p>
//         )}
//       </Box>
//     </Modal>
//   );
// };

// export default Carrinho;
