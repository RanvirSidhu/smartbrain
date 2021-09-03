import React from 'react';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import Inputs from './Components/Inputs/Inputs'
import Ranks from './Components/Ranks/Ranks'
import Facerec from './Components/Facerec/Facerec'
import Signin from './Components/Signin/Signin'
import Register from './Components/Register/Register'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'
import './App.css';

const app = new Clarifai.App({
  apiKey: '5124c0b6202d4e66a50e7132f596bc3b'
 });

const particleoptions= {
  particles: {
    number: {
      value:150,
      density: {
        enable:true,
        value_area:1200
      }
    }
    }
  }

class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      input:'',
      imgUrl:'',
      box:{},
      route:'signin'
    }
  }

  onchangeinput = (event) => {
    this.setState({input:event.target.value})
  }

  calculate = (data) => {
    const tmp=data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(tmp);
    let image=document.getElementById('disp');
    let h=image.height;
    let w=image.width;
    return {
      top:tmp.top_row*h,
      left:tmp.left_col*w,
      right:w-tmp.right_col*w,
      bottom:h-tmp.bottom_row*h
    }
  }

  setbox = (data) => {
    this.setState({box:data});
  }

  onsubmit = () => {
    this.setState({imgUrl:this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input).then(response => this.setbox(this.calculate(response))).catch(err => console.log(err))
  }

  routechange = (data) => {
    this.setState({route:data});
    console.log(this.state.route)
  }

  render() {
    return (
      <div>
        <Particles className='particles' params={particleoptions}/>
        <Navigation route={this.state.route} change={this.routechange}/>
        {this.state.route==='home' ? <div>
          <Logo />
          <Ranks />
          <Inputs change={this.onchangeinput} click={this.onsubmit}/>
          <Facerec box={this.state.box} url={this.state.imgUrl}/>
        </div>
        : (this.state.route === 'signin' ?<Signin change={this.routechange} />
        :<Register change={this.routechange}/>
        )
        }
      </div>
    );
  }
}
export default App;
