import React from "react";
import { connectHits } from "react-instantsearch-core";
import styled from "styled-components";
import { Card, CardContent } from "@mui/material";
import { MovieHit } from "../movieHit";

const HitsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const CustomMovieCard = styled(Card)`
  transition: transform .2s;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin: 0.85rem;
  cursor:pointer;
  width: 375px;
  z-index:0;
  border: 1px solid rgb(99, 99, 99);
  align-item: center; /* Customize the card width as needed */
`;

function MoviesHits({ hits }) {
  return (
    <HitsContainer>
      {hits.map((hit) => (
         <CustomMovieCard key={hit.ObjectID}>
          <CardContent>
            <MovieHit hit={hit} />
          </CardContent>
       </CustomMovieCard>
      ))}
    </HitsContainer>
  );
}

export default connectHits(MoviesHits);