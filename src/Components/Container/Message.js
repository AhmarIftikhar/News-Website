// import React, { Component } from "react";
// import { connect } from "react-redux";
// import * as Actions from "../../Components/Actions/Actions";

// class Message extends Component {
//   constructor() {
//     super();
//     this.state = {
//       sendRemittance: []
//     };
//   }

//   async componentDidMount() {
//     this.getPaymentTallies();
//   }

//   getPaymentTallies = async () => {
//     await this.props.getPaymentTallies();

//     if (this.props.payment.paymentTalliesSuccess) {
//       let sendRemittance = this.props.payment.getPaymentTallies || "";

//       this.setState({ sendRemittance });
//     } else {
//      alert(this.props.payment.paymentTalliesError, this.props)
//     }
//   };

//   render() {
//     return (
//       <>
//         {this.state.sendRemittance.map((item, i) => {
//           return (
//             <div key={i} className="card" style={{ width: "18rem" }}>
//               <img src={item.image} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">Title: {item.title}</h5>
//                 <p className="card-title">Price: {item.price}</p>
//                 <p className="card-title">Category: {item.category}</p>
//                 <p className="card-text">Description: {item.description}</p>
//                 <a href="/" className="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//           );
//         })}
//       </>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     payment: state.payments
//   };
// };

// export default connect(mapStateToProps, {
//   getPaymentTallies: Actions.getPaymentTallies
// })(Message);

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getPaymentTallies } from "../../Components/Actions/Actions";

// function Message() {
//   const payment = useSelector((state) => state.payments);
//   console.log("ahmar",payment)
//   const dispatch = useDispatch();
//   const [readMore, setReadMore] = useState(false);

//   const removeTour = (id) => {
//     const newTours = state.sendRemittance.filter((tour) => tour.id !== id);
//     setState((prev) => ({ ...prev, sendRemittance: newTours }));
//   };

//   const [state, setState] = useState({
//     sendRemittance: [],
//     currentPage: 1
//   });

//   useEffect(() => {
//     _getPaymentTallies();
//   }, []);

//   const _getPaymentTallies = async () => {
//     let { currentPage } = state;
//     console.log(currentPage);
//     await dispatch(getPaymentTallies(currentPage));
//   };

//   useEffect(() => {
//     if (payment.paymentTalliesSuccess) {
//       let sendRemittance = payment.getPaymentTallies || "";

//       setState((prev) => ({
//         ...prev,
//         sendRemittance
//       }));
//     }
//     if (payment.paymentTalliesError) {
//       alert("Error While Getting Payment Tallies");
//     }
//   }, [payment]);

//   if (state.sendRemittance.length === 0) {
//     return (
//       <main>
//         <div className="display-4 text-center">
//           <h4>No Tour Left </h4>
//           <button
//             className="btn btn-success text-center"
//             onClick={_getPaymentTallies}
//           >
//             refresh
//           </button>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <>
//       {state.sendRemittance.map((item, i) => {
//         return (
//           <div key={i} className="card" style={{ width: "18rem" }}>
//             <img src={item.image} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Title: {item.title}</h5>
//               <p className="card-title">Price: {item.price}</p>
//               <p className="card-title">Category: {item.category}</p>
//               <p className="card-text">
//                 Description:
//                 {readMore
//                   ? item.description
//                   : `${item.description.substring(0, 60)}`}
//                 ...
//                 <button
//                   className="btn btn-outline-warning"
//                   onClick={() => setReadMore(!readMore)}
//                 >
//                   {readMore ? "show less" : "read more"}
//                 </button>
//               </p>
//               <button
//                 className="btn btn-primary"
//                 onClick={() => removeTour(item.id)}
//               >
//                 Not Intrested
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// }
// export default Message;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartItems,
  removeItem,
} from "../../Components/ProductSlice/productSlice";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.contrastText,
    borderRadius: "10px",
    boxShadow: "0px 0px 10px #888888",
    position: "relative",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  cardContent: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  cardActions: {
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    margin: theme.spacing(1),
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    textShadow: "1px 1px 2px #000000",
  },
  price: {
    fontWeight: "bold",
    fontSize: "1.3rem",
    margin: theme.spacing(1),
    color: theme.palette.primary.main,
    textShadow: "1px 1px 2px #000000",
  },
  category: {
    fontWeight: "bold",
    fontSize: "1.3rem",
    margin: theme.spacing(1),
    color: theme.palette.primary.main,
    textShadow: "1px 1px 2px #000000",
  },
  description: {
    fontSize: "1.2rem",
    margin: theme.spacing(1),
    color: theme.palette.primary.main,
    textShadow: "1px 1px 2px #000000",
  },
  button: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    fontWeight: "bold",
    background: theme.palette.secondary.main,
    "&:hover": {
      background: theme.palette.secondary.dark,
    },
  },
}));

function Message() {
  const { productItems, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [readMore, setReadMore] = useState(false);
  const [state, setState] = useState({
    currentPage: 5,
  });

  const classes = useStyles();

  useEffect(() => {
    _getPaymentTallies();
  }, []);

  const _getPaymentTallies = async () => {
    const { currentPage } = state;
    await dispatch(getCartItems(currentPage));
  };

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (productItems.length === 0) {
    return (
      <main>
        <div className="display-4 text-center">
          <h4>No Tour Left </h4>
          <Button
            className={classes.button}
            onClick={_getPaymentTallies}
            variant="contained"
            color="primary"
          >
            refresh
          </Button>
        </div>
      </main>
    );
  }

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Grid container spacing={3}>
          {productItems.map((item, i) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={item.image}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      Title: {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Price: {item.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Category: {item.category}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Description:
                      {readMore
                        ? item.description
                        : `${item.description.substring(0, 60)}`}
                      ...
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.action}>
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        dispatch(removeItem(item.id));
                      }}
                    >
                      Not Intrested
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => setReadMore(!readMore)}
                    >
                      {readMore ? "show less" : "read more"}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
export default Message;
