// import { useGetUser } from "@features/Auth";
// import { NotFoundPage } from "@pages/NotFoundPage";
// import FullPageLoader from "@shared/ui/loaders/FullPageLoader";
// import { Route, Routes } from "react-router-dom";
// import Layout from "./layout/Layout";

const AuthorizedRouter = () => {
  return <></>;
//   const { user, isPending } = useGetUser();
  // добавить проверку на error

//   if (isPending) return <FullPageLoader showText />;

//   if (user) {
//     return (
//       <Layout>
//         <Routes></Routes>
//       </Layout>
//     );
//   }

//   return (
//     //ошибка
//     <Routes>
//       <Route path="*" element={<NotFoundPage />} />
//     </Routes>
//   );
};

export default AuthorizedRouter;
