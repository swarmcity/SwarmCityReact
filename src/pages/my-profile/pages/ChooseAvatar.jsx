import React from "react";
import AvatarEditor from "react-avatar-editor";
import defaultAvatar from "images/defaultAvatar.png";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";

export default class ChooseAvatar extends React.Component {
  state = {
    image: defaultAvatar,
    allowZoomOut: false,
    position: { x: 0.5, y: 0.5 },
    scale: 1.2,
    rotate: 0,
    borderRadius: 200,
    preview: null,
    width: 200,
    height: 200
  };

  handleSave = data => {
    const img = this.editor.getImageScaledToCanvas().toDataURL();
    const rect = this.editor.getCroppingRect();

    this.setState({
      preview: {
        img,
        rect,
        scale: this.state.scale,
        width: this.state.width,
        height: this.state.height,
        borderRadius: this.state.borderRadius
      }
    });
  };

  handleScale = e => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  };

  handleNewImage = e => {
    this.setState({ image: e.target.files[0] });
  };

  rotateRight = e => {
    e.preventDefault();
    this.setState({
      rotate: this.state.rotate + 90
    });
  };

  handlePositionChange = position => {
    this.setState({ position });
  };

  onClickSave = () => {
    if (this.editor) {
      // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
      // drawn on another canvas, or added to the DOM.
      const canvas = this.editor.getImage();

      // If you want the image resized to the canvas size (also a HTMLCanvasElement)
      const canvasScaled = this.editor.getImageScaledToCanvas();
    }
  };

  setEditorRef = editor => (this.editor = editor);

  render() {
    return (
      <div className={createAccount.formcontainer}>
        <div>Choose an image and crop it</div>
        <AvatarEditor
          ref={this.setEditorRef}
          scale={parseFloat(this.state.scale)}
          width={this.state.width}
          height={this.state.height}
          position={this.state.position}
          onPositionChange={this.handlePositionChange}
          rotate={parseFloat(this.state.rotate)}
          borderRadius={this.state.borderRadius}
          image={this.state.image}
        />
        Zoom:
        <input
          name="scale"
          type="range"
          onChange={this.handleScale}
          min={"1"}
          max="3"
          step="0.01"
          defaultValue="1.2"
        />
        New File:
        <input name="newImage" type="file" onChange={this.handleNewImage} />
        <button onClick={this.rotateRight}>Rotate Right</button>
        <div className={createAccount.flexer} />
        <div
          tabIndex="2"
          className={styles.iconbuttonbigcenter}
          onClick={this.props.nextStage}
        >
          <div className={styles.nextblueicon} />
        </div>
      </div>
    );
  }
}