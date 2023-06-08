import Axios from "axios";
export const getPaymentTallies = (currentPage) => async (dispatch) => {
  dispatch({
    type: "GET_PAYMENT_TALLIES_INIT"
  });

  const url = `https://fakestoreapi.com/products?limit=${currentPage}`;

  try {
    let response = await Axios.get(url);
    let resp = response.data;
    if (resp) {
      dispatch({
        type: "GET_PAYMENT_TALLIES_SUCCESS",
        payload: resp
      });
    } else {
      dispatch({
        type: "GET_PAYMENT_TALLIES_FAIL",
        payload: "Error While Getting Payment Tallies."
      });
    }
  } catch (err) {
    const error = err.message || "Error While Getting Payment Tallies.";
    dispatch({
      type: "GET_PAYMENT_TALLIES_FAIL",
      payload: error
    });
  }
};
