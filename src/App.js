import React, { Component } from 'react';
// import Split from './composition/Split';
// import Tooltip from './composition/Tooltip';
// import Messages from './Messages';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <h2>Hello World</h2>
        <HelloWorld />
        <h2>Bomb</h2>
        <Bomb />
        <h2>Roulette Gun</h2>
        <RouletteGun />
      </div>
    )
  }
}


//make 2 tooltips here and another inside the App directly
// const firstTooltip = (
//   <Tooltip color='hotpink' message='tooltip message'>
//       ipsum
//   </Tooltip>
// )

// const secondTooltip = (
//   <Tooltip color='#126BCC' message='another tooltip message'>
//       officiis
//   </Tooltip>
// )

// function App() {
//   return (
//     <main className='App'>
//       <Split className='left' flexBasis='2'>
//         This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
//         {/* make another tooltip directly inside the App */}
//         <Tooltip message='one more tooltip message'>
//           Necessitatibus?
//         </Tooltip>
//       </Split>
//       <Split className='right'>
//         This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
//       </Split>
//     </main>
//   )
// }

// class App extends Component {
// render() {
//     return (
//         <div className="App">
//             <main className='App'>
//                 <Split className='left' flexBasis='2'>
//                 This is the content for the left `Split`. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
//                 {/* make another tooltip directly inside the App */}
//                 <Tooltip message='one more tooltiop message'>
//                     Necessitatibus?
//                 </Tooltip>
//                 </Split>

//                 <Split className='right'>
//                 This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
//                 </Split>
//             </main>
//         </div>
//         );
//     }
// }

// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <h1>YOUR APPLICATION NAME!</h1>
//                 <Messages name="Messages" unread={0}/>
//                 <Messages name="Notifications" unread={10}/>
//             </div>
//             );
//         }
//     }
// }

export default App;
