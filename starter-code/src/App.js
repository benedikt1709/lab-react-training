import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import Button from "./components/LikeButton";
import Dice from "./components/Dice";
import { listItems, MoviesList } from './components/ListDemo';
import DynamicMoviesList from './components/dynamicListsDemo/DynamicMoviesList';


class App extends Component {
  render() {
    return (
      <div className="App" width="800px">
        <h1>IdCard</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1>Random Number</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <h1>Box Color</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        <h1>Like Button</h1>
        <Button></Button>

        <h1>Dice</h1>
        <Dice></Dice>

        <h1>List Demo</h1>
          {/* <Header></Header> */}
          <ul>{listItems}</ul>

        <h1>MoviesList Demo</h1>
        <div className="App">
        {/* <Header /> */}
        <ul className="list-style">{ listItems }</ul>
        <div>
          <MoviesList />
        </div>
      </div>

        <h1>Improved MoviesList</h1>
        <div className="App">
        {/* <Header /> */}
        <ul className="list-style">{ listItems }</ul>
        <div>
          <MoviesList />
        </div>
        <hr />
        <DynamicMoviesList />
      </div>
      </div>
    );
  }
}

export default App;
