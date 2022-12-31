import React, { Component } from 'react';

class Facebook extends Component {
    constructor (props){
        super(props)
        this.state ={
            count :0
        }
      
    }  
       
    render() {
        return (
                <div className='px-5 my-5'>
                    
                    <div className="card mb-3" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                    <div className="col-md-4">
                        <img src={this.props.image} className="img-fluid rounded-start h-100" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body text-center">
                    <svg onClick={()=>this.props.handleClik(this.props.index)} xmlns="http://www.w3.org/2000/svg" width="30" height="30"   cursor= 'pointer'
                    fill="currentColor" className="bi bi-caret-up-fill text-center" viewBox="0 0 16 16">
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                        </svg> {this.props.count}
                        <i className="bi bi-caret-up-fill"></i>
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">
                            {this.props.description}
                        </p>
                         <p className="card-text"><small className="text-muted">{this.props.footer}</small></p>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
        );
    }
}

export default Facebook;