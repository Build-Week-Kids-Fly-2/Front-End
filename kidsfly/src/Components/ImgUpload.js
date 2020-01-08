import React from 'react';
const ImgUpload=(props) => {
    return (
  <label htmlFor="photo-upload" className="custom-file-upload fas">
  <div className="pics" >
    <img for="photo-upload" src={props.image}/>
  </div>
  <input id="photo-upload" type="file" onChange={props.onChange}/> 
</label>)
}
export default ImgUpload;