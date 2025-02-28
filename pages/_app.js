import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-blue-100 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}
