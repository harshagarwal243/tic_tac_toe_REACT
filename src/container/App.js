import React  , { Component  } from 'react'
import {  Container , Row , Col , Card , CardBody ,Button } from 'reactstrap' ;
import { ToastContainer , toast } from 'react-toastify';
import Icon from '../component/Icon';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css" ;


class App extends Component {

    itemArray = new Array(9).fill("empty")
    
    state = { modal : false,isCross : true,message : ""};

    count = 0;

    toggle = () => {
        
        this.setState({modal : !this.state.modal})
    }

    reloadgame = () => {
        this.itemArray.fill("empty");
        console.log(this.itemArray)
        this.count =  0;
        this.setState({isCross : true , message : ""})
        
    }

    changeItem = index => {
       
        if(this.state.message)
         return toast(this.state.message , { type : "success"});
        
        if(this.itemArray[index] === "empty")
         {   this.count++ ;
             this.itemArray[index] = this.state.isCross ? "cross" : "circle" ;
             this.setState({isCross : !this.state.isCross })
           //  this.checkWin();
         }
         else {
             return  toast("already filled",{type : "error"})
         }
         this.checkWin();
    }

    checkWin = () => {
            if(this.count >= 5)
             {
                 if( this.itemArray[0] !== "empty")
                   {
                       if(this.itemArray[0] === this.itemArray[1] && this.itemArray[1] === this.itemArray[2])
                         {
                             this.setState({message : `${this.itemArray[0]} wins`});
                             return
                         }
                        else if(this.itemArray[0] === this.itemArray[4] && this.itemArray[4] === this.itemArray[8])
                         {
                            this.setState({message : `${this.itemArray[0]} wins`});
                            return
                         }
                         else if(this.itemArray[0] === this.itemArray[3] && this.itemArray[3] === this.itemArray[6])
                          {
                            this.setState({message : `${this.itemArray[0]} wins`});
                            return
                          }
                   }
                if(this.itemArray[4] !== "empty")
                 {
                     if(this.itemArray[4] === this.itemArray[1] && this.itemArray[4] === this.itemArray[7])
                       {
                        this.setState({message : `${this.itemArray[4]} wins`});
                        return
                       }
                    else if(this.itemArray[4] === this.itemArray[2] && this.itemArray[4] === this.itemArray[6])
                      {
                        this.setState({message : `${this.itemArray[4]} wins`});
                            return
                      }
                    else if(this.itemArray[4] === this.itemArray[3] && this.itemArray[4] === this.itemArray[5])
                     {
                        this.setState({message : `${this.itemArray[4]} wins`});
                        return
                     }
                 }
                 if(this.itemArray[8] !== "empty")
                   {
                       if(this.itemArray[8] === this.itemArray[5] && this.itemArray[5] === this.itemArray[2])
                        {
                            this.setState({message : `${this.itemArray[8]} wins`});
                            return
                        }
                        else if(this.itemArray[8] === this.itemArray[7] && this.itemArray[7] === this.itemArray[6])
                         {
                            this.setState({message : `${this.itemArray[8]} wins`});
                            return
                         }
                   }
                    if(this.count >= 9)
                   {
                       this.setState({message : "Try Again"});
                   }
             }
            
    }

    render() {
        let style = { backgroundColor : "grey"};
        if(this.state.message.indexOf("wins") !== -1)
         {
           style = { backgroundColor : this.state.message.indexOf("circle") !== -1 ? "blue" : "red"}
         }
        return ( 
           <Container className="container" style={style}  fluid={true} >
               <ToastContainer  position="bottom-center" autoClose={2000} />
              <Row>
                  <Col md="6" sm="8" className="offset-md-3  offset-sm-2">
                      { this.state.message ? (
                           <div className="mb-4 mt-2">
                               <h1 className="text-center text-success text-uppercase"> {this.state.message} </h1>
                               <Button color="success" block onClick={this.reloadgame}>Reload Game</Button>
                           </div>
                      ) : (
                        <div className="mb-4 mt-2">
                           <h1 className="text-center text-info text-uppercase">
                              {this.state.isCross ? "Cross" : "Circle" } turns
                            </h1>
                            { this.count > 0 && this.count < 9 ?
                              <Button color="danger" block onClick={this.reloadgame} >Quit Game</Button> :
                               null 
                            }
                         
                           
                         </div>
                          )

                      }
                      <div className="grid">
                         { this.itemArray.map((item,index) => (
                               <Card style={{borderRadius : "18px"}} onClick={() => this.changeItem(index)} key={index}>
                                 <CardBody className="box" >
                                     <Icon name={item} />
                                 </CardBody>
                            </Card> )
                         ) }
                      </div> 
                  </Col>
              </Row>
           </Container>
        )
    }
} 

export default App;