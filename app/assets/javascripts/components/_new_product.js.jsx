var NewProduct = React.createClass({

  saveProduct() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    var price = this.refs.price.value;
    if( this.props.validateProduct(name, price) ) {
      $.ajax({
        url: '/api/v1/products',
        type: 'POST',
        data: { product: { name: name, description: description , price: price } },
        success: (product) => {
          this.props.handleSubmit(product);
        }
      });
    }
  },

  render() {
		var formError = this.props.formError ? <Error message={this.props.errorMessage}></Error> : '';

    return (
      <div className='clearfix row padding-15 '>
        <h3>Add a new product</h3>
				{formError}
        <div className='col-md-12'>
          <div className="form-horizontal">
            <div className='form-group'>
               <label>Name</label>
              <input ref='name' placeholder='Enter name of the product' type='text' className='form-control'/>
            </div>
            <div className='form-group'>
              <label>Description</label>
              <textarea ref='description' placeholder='Enter a description' className='form-control' rows='12'/>
            </div>
            <div className='form-group'>
              <label>Price</label>
              <input ref='price' placeholder='Enter a price' type='number' className='form-control'/>
            </div>
            <div className='form-group'>
              <button onClick={this.saveProduct} className='btn btn-success'>
                <span className='glyphicon glyphicon-check'> </span> Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
