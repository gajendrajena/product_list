var ProductDetail = React.createClass({

  resetToNew() {
    this.props.resetToNew()
  },

  render() {
    return (
      <div className=''>
        <div className='form-group'>

          <h5><label> Name: </label> {this.props.product.name} </h5>
        </div>
        <div className='form-group'>
          <label> Description: </label>
          <p>{this.props.product.description} </p>
        </div>
        <div className='form-group'>

          <p><label> Price: </label> ${this.props.product.price} </p>
        </div>

        <div className='form-actions'>
          <button onClick={this.props.handleDelete} className='btn btn-danger'>
            <span className='glyphicon glyphicon-remove-sign'> </span>Delete
          </button>
          <button onClick={this.props.handleEdit} className='btn btn-primary'>
            <span className='glyphicon glyphicon-edit'> </span>  Edit
          </button>
          <button onClick={this.resetToNew} className='btn btn-default'>
            <span className='glyphicon glyphicon-chevron-left'> </span> Back
           </button>
        </div>
      </div>
    );
  },

});
