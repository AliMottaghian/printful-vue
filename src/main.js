import { createApp } from "vue";
import {
  Button,
  Input,
  Select,
  Spin,
  Row,
  Col,
  Progress,
} from "ant-design-vue";
import App from "./App";
import router from "./router";
import store from "./store/index";
import "ant-design-vue/dist/antd.css";

import PageTitle from "./components/ui/PageTitle";
import CardContainer from "./components/ui/CardContainer";
import SpinnerLoader from "./components/ui/SpinnerLoader";

const app = createApp(App);
app.config.productionTip = false;

app.use(Button);
app.use(Input);
app.use(Select);
app.use(Spin);
app.use(Row);
app.use(Col);
app.use(Progress);

app.use(router);
app.use(store);

app.component("page-title", PageTitle);
app.component("card-container", CardContainer);
app.component("spinner-loader", SpinnerLoader);
app.mount("#app");
