var ProductDetail = React.createClass({

  resetToNew() {
    this.props.resetToNew()
  },

  render() {
    return (
      <div className='well'>
        <h5> {this.props.product.name} </h5>
        <p> {this.props.product.description} </p>
        <p> {this.props.product.price} </p>

        <div className='form-group'>
          <button onClick={this.props.handleDelete} className='btn btn-danger'>Delete</button>
          <button onClick={this.props.handleEdit} className='btn btn-primary'> Edit </button>
          <button onClick={this.resetToNew} className='btn btn-default'> Cancel </button>
        </div>
      </div>
    );
  },

});