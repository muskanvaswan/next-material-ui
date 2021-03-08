import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from '@material-ui/core/Container'
import Layout from '../src/components/Layout.js'
import Banner from '../src/components/Index/Banner'

export default function Home() {
  return (
    <Container>
      <Layout>
        <Banner />
      </Layout>
    </Container>

  )
}
