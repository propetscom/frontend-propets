import React from "react";

class ImagesPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: ''
        }
        const num = 0;
    }

    componentDidMount() {
        this.num = +(this.props.images.length);
      //  console.log(this.num);
        let image = this.props.images[0];
        this.setState({
            image: image
        });
    }

    changeImagePrev = () => {
        let index = this.num;
        index--;
        if (index < 0 ) {
            index = this.props.images.length-1;
        }
        let image = this.props.images[index];
        this.setState({
            image: image
        });
        this.num = index;

    };

    changeImageNext = () =>{
        let index = this.num;
        index++;
        if (index >= this.props.images.length) {
            index = 0;
        }
        let image = this.props.images[index];
        this.setState({
            image: image
        });
        this.num = index;
    };

    renderImages = () => {
        if (this.props.images.length === 1) {
            return (
                <div className="page_img">
                    <div className={'div-img'}>
                        <img className="img" src={this.state.image} alt="Dog"/>
                    </div>
                </div>
            )
        }
        if (this.props.images.length > 1) {
            return (
                <div className="page_img">
                    <div onClick={this.changeImagePrev}  className={'sliderLeft'}></div>
                    <div className={'div-img'}>
                        <img id={'imagePost'} className="img" src={this.state.image} alt="Dog"/>
                    </div>
                    <div onClick={this.changeImageNext} className={'sliderRight'}></div>
                </div>
            )
        }
        if (!this.props.images.length) {
            return (
                <div></div>
            )

        }


    };

    render() {
        return (
            this.renderImages()
        )
    }

}

export default ImagesPost;