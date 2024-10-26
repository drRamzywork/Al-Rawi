import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-spring-bottom-sheet/dist/style.css";
import "@sergeymyssak/swipeable-bottom-sheet/lib/min.css";
import localFont from "next/font/local";

const Effra = localFont({
  src: [
    {
      path: "../../public/assets/fonts/HelveticaNeueLT.otf",
      weight: "500",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }) {
  const combinedStyles = {
    ...Effra.style,
  };
  return (
    <main style={combinedStyles}>
      <Component {...pageProps} />
    </main>
  );
}
