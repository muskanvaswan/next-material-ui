import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';


import Layout from '../src/components/Layout'
import Items from '../src/components/Shop/Items'
import Hero from '../src/components/Shop/Hero'




export default function Album() {

  return (
    <Layout bright>
      <React.Fragment>
        <CssBaseline />

        <main>
          <Hero />
          <Items />
        </main>

      </React.Fragment>
    </Layout>
  );
}
