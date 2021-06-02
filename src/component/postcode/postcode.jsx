import { Typography } from '@material-ui/core'
import { Link, useParams } from '@reach/router';
import Table from '../table/table';
import React, {useEffect, useState} from 'react'
import { Wrapper } from '../postcode/postcode.styled'
import { getApiNearestPostcode, getApiPostcode } from "../util/postcode";

const Postcode = () => {
  const [data, setData] = useState({
    postcode: {},
    nearest: [],
  });

  const {postcode} = useParams()

  useEffect(() => {
    const getResult = async () => {
      try {
        const postcodeResponse = await fetch(getApiPostcode(postcode)); 
        const {result: postcodeResult} = await postcodeResponse.json();

        const nearestPostcodeResponse = await fetch(getApiNearestPostcode(postcode));
        const {result: nearestPostcodeResult} = await nearestPostcodeResponse.json();

        setData({
          postcode: postcodeResult,
          nearest: nearestPostcodeResult,
        });
      }
      catch (error) {
        console.log(error)
      }
    };
  getResult();
  }, [postcode]);

  const nearestPostcode = data.nearest
  const currPostcode = data.postcode

  // console.log(nearestPostcode)
  // console.log(currPostcode)


  return(
    <Wrapper>
      <Link to='/'>Home page</Link>
       <br/>
       <br/>
      <Typography component='h1' variant='h3'>
        Searched postcode
      </Typography>
      <br/>
      <Table list={currPostcode}/>
      <br/>
      <Typography component="h2" variant="h4">
        Nearest
      </Typography>
      <br/>
      {nearestPostcode.map((listData) =>(
      <Table key={listData.postcode} list={listData}/>))}
    </Wrapper>
  )
}

export default Postcode
