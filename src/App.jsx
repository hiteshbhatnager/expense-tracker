import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Home, About, Contact, SignUp, Login } from "./pages";
import { Add, History, Spend } from "./components";
import Layout from "./layout";
import authservice from "./appwrite/auth";
import database from "./appwrite/database/db";
import { login, logout } from "./context/authslice";

function App() {
  const [amount, setAmount] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await authservice.getuser();

        if (currentUser) {
          dispatch(login(currentUser));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [dispatch]);


  useEffect(() => {
    const fetchTransactions = async () => {

      if (!user?.$id) {
        setData([]);
        setAmount(0);
        return;
      }

      try {

        const result = await database.getTransactions(user.$id);

        const transactions = result.documents || [];

        setData(transactions);

        // Calculate total balance
        const total = transactions.reduce(
          (balance, transaction) => {

            const transactionAmount =
              Number(transaction.amount);

            if (transaction.add) {
              return balance + transactionAmount;
            }

            return balance - transactionAmount;
          },
          0
        );

        setAmount(total);

      } catch (error) {

        console.error(
          "Failed to fetch transactions:",
          error
        );

      }
    };

    fetchTransactions();

  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">
        <p className="text-gray-400">Loading session...</p>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Home
              amount={amount}
              setAmount={setAmount}
              data={data}
              setData={setData}
            />
          }
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route
          path="add"
          element={
            <Add
              amount={amount}
              setAmount={setAmount}
              data={data}
              setData={setData}
            />
          }
        />
        <Route
          path="history"
          element={
            <History
              data={data}
              setData={setData}
            />
          }
        />
        <Route
          path="spend"
          element={
            <Spend
              amount={amount}
              setAmount={setAmount}
              data={data}
              setData={setData}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;