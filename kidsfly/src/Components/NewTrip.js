import React, {Component} from 'react';
import styled from 'styled-components';
import ImgUpload from './ImgUpload'
//images



const TripStyle = styled.div `
.pics {
    padding: 20px  10px;
    width: 260px;
    height: 230px;
  }
  .upcoming {
      display: flex;
      flex-flow: column;
  }
  .fas {
      cursor: pointer;
  }
  .images {
    width: 223px;
    height: 192.48px;
  }
  input[type="file"] {
    display: none;
  }
`
class NewTrip extends Component {
constructor(props){
    super(props);
    this.state = {
        file: [],
        imagePreviewUrl: 'http://www.simpleimageresizer.com/_uploads/photos/aa7a408c/trip_1_223x192.jpg'

};
    this.handleUpload = this.handleUpload.bind(this);
}

handleUpload(e) {
    e.preventDefault();
    const reader = new FileReader();
    const files = e.target.files;
    for (var file = 0; files.length <= 0; file++) {
        console.log(files);
      }
    reader.onloadend = () => {
      this.setState({
        file: files,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(files);
  }
render() {
return (
    <TripStyle>
   <div className="upcoming">
   <i onClick= {this.props.deleteTrip} className="fas fa-times fa-2x"/>
      <ImgUpload onChange={this.handleUpload} image={this.state.imagePreviewUrl}/>
       <h4>{this.props.upcoming.name}</h4>
   </div>
        </TripStyle>
)
}
}

export default NewTrip;