import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import store from "./store/index.js";
import { Provider } from "react-redux";

import Membership from "./views/membership";
import PaymentSuccessful from "./views/paymentSuccessful";
import Checkout from "./views/checkout";
import TransactionDetails from "./views/transactionDetails";
import Transactions from "./views/transactions";
import WalletNotValid from "./views/walletNotValid.jsx";

const router = createBrowserRouter([
  {
    path: "/:key",
    element: <App />,
    index: true
  },
  {
    path: "/transactions",
    element: <Transactions />
  },
  {
    path: "/transactionDetails",
    element: <TransactionDetails />
  },
  {
    path: "/checkout",
    element: <Checkout />
  },
  {
    path: "/membership",
    element: <Membership />
  },
  {
    path: "/successful",
    element: <PaymentSuccessful />
  },
  {
    path: "/walleterror",
    element: <WalletNotValid />
  },  
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
