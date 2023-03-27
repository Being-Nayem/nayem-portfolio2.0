import React from "react";
import { FaCode } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">responsibility</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={FaCode}
            title={"Problem Solver"}
            disc={"Passionate problem solver with a track record of 200+ solutions on Codeforces and LeetCode."}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={DiDjango}
            title={"Backed Developer"}
            disc={"Experienced backend developer with expertise in Django and MySQL. Completed multiple projects with a focus on efficiency and scalability."}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
