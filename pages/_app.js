import '../styles/global.css'
export default function App({ Component, pageProps }) {
  console.log('top-level component');
  return <Component {...pageProps} />
}
