import { wrapper } from "../store";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
