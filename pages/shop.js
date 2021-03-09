import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';


import Layout from '../src/components/Layout'
import Items from '../src/components/Shop/Items'
import Hero from '../src/components/Shop/Hero'


import Fade from '@material-ui/core/Fade';


export default function Album() {

  const trans = {
    enter: 3000,
    exit: 2000
  }
  return (
    <Layout bright>
      <React.Fragment>
        <CssBaseline />
        <Fade in timeout={trans}>
        <main>

          <Hero />

          <Items />
        </main>
        </Fade>

      </React.Fragment>
    </Layout>
  );
}
