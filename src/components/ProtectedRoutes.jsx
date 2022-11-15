import { useState } from "react";
import { Outlet } from "react-router";
import { Login } from "../pages/Login";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { retrieveMovements } from "../redux/movementSlice";
// import { retrieveSummary } from "../redux/summarySlice";
// import { getLocalStorage } from "../utils/localStorage";

export const ProtectedRoutes = () => {
  // const dispatch = useDispatch();

  // const getSummaryStatus = useSelector((state) => state.summary.status);
  // const getMovementsStatus = useSelector((state) => state.movements.status);

  const [isAuth, setIsAuth] = useState(true); //useState(getLocalStorage("access") ? true : false);

  // useEffect(() => {
  //   if (
  //     isAuth &&
  //     getSummaryStatus === "idle" &&
  //     getMovementsStatus === "idle"
  //   ) {
  //     dispatch(retrieveSummary());
  //     dispatch(retrieveMovements());
  //   }
  // }, [getSummaryStatus, getMovementsStatus, isAuth, dispatch]);

  return isAuth ? <Outlet /> : <Login setIsAuth={setIsAuth} />;
};
