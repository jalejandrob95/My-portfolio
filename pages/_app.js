import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../componets/layouts/main'
import Fonts from '../componets/font'
import theme from '../lib/theme'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}
export default Website
