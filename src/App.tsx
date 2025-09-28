import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import "./main.scss";
import AppRouter from "@app/AppRouter";
import { store } from "@app/store";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#00AD5A",
            },
          }}
        >
          <AppRouter />
        </ConfigProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
