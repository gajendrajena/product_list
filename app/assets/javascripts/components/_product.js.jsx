var Product = React.createClass({

  getInitialState() {
    return {editable: false};
  },

  handleEdit() {
    this.setState({editable: !this.state.editable})
  },


  render() {
    return (
      <div>
        <h3> {this.props.product.name} </h3>
        <p> {this.props.product.description} </p>
        <p> {this.props.product.price} </p>
        <button onClick={this.props.handleDelete}>Delete</button>
        <button onClick={this.handleEdit}> Edit </button>
      </div>
    );
  }
});