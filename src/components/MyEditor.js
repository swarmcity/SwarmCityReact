import React from "react";
import AvatarEditor from "react-avatar-editor";
import defaultAvatar from "images/defaultAvatar.png";

class MyEditor extends React.Component {
  state = {
    image: defaultAvatar,
    allowZoomOut: false,
    position: { x: 0.5, y: 0.5 },
    scale: 1,
    rotate: 0,
    borderRadius: 0,
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

  rotateRight = e => {
    e.preventDefault();
    this.setState({
      rotate: this.state.rotate + 90
    });
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
      <AvatarEditor
        ref={this.setEditorRef}
        scale={parseFloat(this.state.scale)}
        width={this.state.width}
        height={this.state.height}
        position={this.state.position}
        onPositionChange={this.handlePositionChange}
        rotate={parseFloat(this.state.rotate)}
        image={this.state.image}
      />
    );
  }
}

export default MyEditor;
