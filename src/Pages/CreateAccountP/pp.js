import React, { Component } from 'react';
import './pp.css';
import newUser from "../../Images/newUser.png";
export class pp extends Component {

    state = { profileImg: {newUser}}

    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({profileImg: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };

    render () {
        const {profileImg} = this.state;
        return (
            <div className ="page">
                <div className = "container">
                    <h1 className="heading">Sube una foto de perfil</h1>
                    <div className = "img-holder">
                      <img src={profileImg} alt = "" id="img" className="img"></img>
                    </div>
                    <input type = "file" name="image-upload" id="input" accept="image/*"></input>
                    <div className = "label">
                        <label htmlFor="input" className="image-upload">
                            <i className="material-icons">add_photo_alternate</i>
                            Elige tu foto
                        </label>
                    </div>

                </div>
            </div>
        )
}}


export default pp;