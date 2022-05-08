import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js'
import NotificationProvider from '../notifications/NotificationContext';




const stripePromise =loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
function MyApp({ Component, pageProps }) {

  return (
    <NotificationProvider>
        <Elements stripe={stripePromise}>
            <Component {...pageProps} />
          </Elements>
    </NotificationProvider>
  )

}

export default MyApp
