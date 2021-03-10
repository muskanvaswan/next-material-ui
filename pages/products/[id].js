import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../../src/components/Layout.js'
import Item from '../../src/components/Products/Item'
import More from '../../src/components/Products/More'

import Typography from '@material-ui/core/Typography'

export default function Product() {
  const router = useRouter()
  const { id } = router.query
  return (
    <Layout >

        <Item/>
        <More />



    </Layout>

  )
}
