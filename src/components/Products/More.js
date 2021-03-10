import React from 'react';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  marginHeavy:{
    margin: 50,
  }
}));

export default function More(){
  const classes = useStyles();
  return (
    <Container className={classes.marginHeavy}>
      <Typography>
        This is a media card. You can use this section to describe the content.This is a media card. You can use this section to describe the content.This is a media card. You can use this section to describe the content.This is a media card. You can use this section to describe the content.This is a media card. You can use this section to describe the content.This is a media card. You can use this section to describe the content.This is a media card. You can use this section to describe the content.This is a media card. You can use this section to describe the content.
        <br/><br/>
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <br/><br/>
        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        <br/><br/>

        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

      </Typography>
      <Typography align="right">
        <Button href="/shop" color="primary" startIcon={<ArrowBackIosIcon />}>  Go back to Catalogue</Button>

      </Typography>
    </Container>
  )
}
