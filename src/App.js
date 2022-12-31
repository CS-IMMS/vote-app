import Facebook from "./component/Facebook";
import React, { Component } from "react";
import facebook from '../src/image/facebook1.jpg'
import insta from '../src/image/insta.jpg'
import tic from '../src/image/tictoc.png'
import snap from '../src/image/snap.webp'
class App extends Component {
   data =[
    {
    name : 'facebook',
    image: facebook,
    description: 'Rejoignez des groupes, exprimez-vous, retrouvez vos amis partout dans le monde sur FB.',
    footer:'Last updated 10 mins ago 😃',
    count :10
  },
    {
    name : 'instagram',
    image: insta,
    description: 'Rejoignez des groupes, exprimez-vous, retrouvez vos amis partout dans le monde sur instagram.',
    footer:'Last updated 23 mins ago 😃',
    count :15
  },
    {
    name : 'tic toc',
    image: tic,
    description: 'Rejoignez des groupes, exprimez-vous, retrouvez vos amis partout dans le monde sur tic toc.',
    footer:'Last updated 43 mins ago 😃',
    count :25
  },
    {
    name : 'snapchat',
    image: snap,
    description: 'Rejoignez des groupes, exprimez-vous, retrouvez vos amis partout dans le monde sur snapchat.',
    footer:'Last updated 55 mins ago😃',
    count :20
  },
]
  constructor (props){
    super(props)
    this.state ={
      data : this.data
  }
  }
  render(){
  
const handleClik = (i)=>{
  let copyData = [...this.state.data]
  copyData[i].count = copyData[i].count + 1

 this.setState({
  data : copyData
 })
 
  }
  return (
    <div className="App">
     <h1 className="text-center">Popular Socials Medias</h1>
      {
        this.state.data.sort((a,b)=> b.count - a.count).map((element,index)=>
           <Facebook
            name={element.name} 
            image={element.image}
            count={element.count}
            handleClik={handleClik} 
            index={index}
            footer={element.footer}
            description={element.description}
              />
        )
      }
    </div>
  );
}

  }

export default App;
