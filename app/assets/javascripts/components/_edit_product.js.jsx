var EditProduct = React.createClass({

  saveProduct() {
    var id = this.props.product.id;
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    var price = this.refs.price.value;
    console.log('The name value is ' + name + 'the description value is ' + description+ 'price: ' + price);
    if( this.props.validateProduct(name, price) ) {
      $.ajax({
        url: `/api/v1/products/${id}`,
        type: 'PUT',
        data: { product: { name: name, description: description , price: price } },
        success: (product) => {
          this.props.handleSubmit(product);
        }
      });
    }
  },

  render() {
    return (
      <div className='clearfix row'>
        <h3>Edit</h3>
        <div id="error"></div>
        <div className='col-md-12'>
          <div className="form-horizontal">
            <div className='form-group'>
               <label>Name</label>
              <input ref='name' placeholder='Enter name of the product' type='text' className='form-control' defaultValue={this.props.product.name}/>
            </div>
            <div className='form-group'>
              <label>Description</label>
              <textarea ref='description' placeholder='Enter a description' className='form-control' defaultValue={this.props.product.description}/>
            </div>
            <div className='form-group'>
              <label>Price</label>
              <input ref='price' placeholder='Enter a price' type='number' className='form-control' defaultValue={this.props.product.price}/>
            </div>
            <div className='form-group'>
              <button onClick={this.saveProduct} className='btn btn-success'> Submit </button>
              <button onClick={this.props.resetToNew} className='btn btn-default'> Cancel </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

});