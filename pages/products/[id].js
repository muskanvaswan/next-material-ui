import { useRouter } from 'next/router'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import Layout from '../../src/components/Layout.js'


export default function Product() {
  const router = useRouter()
  const { id } = router.query
  return (
    <Container>
      <Layout short>
        <p>Post: {id}</p>
      </Layout>
    </Container>

  )
}
