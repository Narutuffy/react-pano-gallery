import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'aframe';
import { fetchGalleryImages } from '../actions';
import './GalleryIndex.css';

class GalleryIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedImage: null
    };
    this.renderImages=this.renderImages.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchGalleryImages()
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.images.length!==nextProps.images.length){
      this.setState({
        selectedImage : nextProps.images[0].name
      });
    }
  }

  renderImages(){
    return( this.props.images.map((img)=>{
        return(
          <div key={img.name}>
            <img src={img.pano} alt="image" onClick={()=>{this.setState({selectedImage: img.name})}}/>
          </div>
        )
      })
    );
  }

  render() {
    if(this.props.images.length===0){
      return<div>Loading...</div>
    }
    const {images} = this.props;
    return(
      <div>
        <div className="vr-container" > 
          <a-scene embedded>
            <a-assets>
              <img id={images[0].name} alt="" crossOrigin="anonymous" src={images[0].pano}/>
              <img id={images[1].name} alt="" crossOrigin="anonymous" src={images[1].pano}/>
              <img id={images[2].name} alt="" crossOrigin="anonymous" src={images[2].pano}/>
              <img id={images[3].name} alt="" crossOrigin="anonymous" src={images[3].pano}/>
              
            </a-assets>
            <a-sky src={`#${this.state.selectedImage}`} />
          </a-scene> 
        </div>
        <div  className="image-container">
          {this.renderImages()}        
        </div> 
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    images: state.images
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGalleryImages }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryIndex);