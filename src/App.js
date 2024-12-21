import React from "react";
import './App.scss';
import './css/Theme.scss';
import Badge from './components/Badge/Badge';
import Banner from './components/Banner/index';
import Card from './components/Card/index';
import Testinomial from './components/Testimonial/index';
import TestimonialPic from "./image/testimonial.png"

import { HiOutlineCloudUpload } from "react-icons/hi";

function App() {
  /**
   * requirements:
   * - each component should be exported from its own containing folder, following the same pattern we've been using in the component library
   * - using index.jsx as a testing ground to display your components
   * - check the https://projects.scrimba.com/react-component-library for more info and hints
   */


  return (
    <div className="App">
      <label>Testing the components here:</label>

      <div className="testing-container">
        <div>
          <Badge color="pink" shape="pill">Badge</Badge>
          <Badge color="blue" shape="square">Badge</Badge>
          <Badge color="yellow" shape="square">Badge</Badge>
        </div>
        <div>
          <Banner status="success">
            <Banner.Title>Congratulations!</Banner.Title>
            <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Content>
          </Banner>
          <Banner status="warning">
            <Banner.Title>Attention</Banner.Title>
          </Banner>
          <Banner status="neutral">
            <Banner.Title>Update available</Banner.Title>
            <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Content>
          </Banner>
          <Banner status="error">
            <Banner.Title>There is a problem with your application</Banner.Title>
          </Banner>
        </div>
        <div>
          <Card icon={<HiOutlineCloudUpload />} iconPosition = "center">
            <Card.Title>Easy Deployment</Card.Title>
            <Card.Content>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Content>
          </Card>
          <Card iconPosition="left" iconBackground="pink" iconColor="#121212">
            <Card.Title>Easy Deployment</Card.Title>
            <Card.Content>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Content>
          </Card>
        </div>
        <div>
          <Testinomial 
            profilePic={TestimonialPic} 
            name="May Andersons"
            title="Workcation, CTO"
          >
            <Testinomial.Quote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </Testinomial.Quote>
          </Testinomial>

          <Testinomial
            name="May Andersons"
            title="Workcation, CTO"
          >
            <Testinomial.Quote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </Testinomial.Quote>
          </Testinomial>

        </div>
      </div>
    </div>
  );
}

export default App;
