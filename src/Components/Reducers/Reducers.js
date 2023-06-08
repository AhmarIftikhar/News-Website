const INIT_STATE = {
  getPaymentTallies: [],
  paymentTalliesSuccess: "",
  paymentTalliesError: "",
};

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PAYMENT_TALLIES_INIT":
      return {
        ...state,
        getPaymentTallies: [],
        paymentTalliesSuccess: "",
        paymentTalliesError: "",
      };
    case "GET_PAYMENT_TALLIES_SUCCESS":
      return {
        ...state,
        getPaymentTallies: action.payload || [],
        paymentTalliesSuccess: action.payload,
      };

    case "GET_PAYMENT_TALLIES_FAIL":
      return {
        ...state,
        paymentTalliesError: action.payload,
      };
    default:
      return state;
  }
}
