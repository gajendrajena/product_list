var Product = React.createClass({

  getInitialState() {
    return {editable: false};
  },

  handleEdit() {
    this.setState({editable: !this.state.editable})
  },

  cancelEdit() {
    this.setState({editable: !this.state.editable})
  },

  updateProduct() {
    var id = this.props.product.id;
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    var price = this.refs.price.value;
    console.log('The name value is ' + name + 'the description value is ' + description+ 'price: ' + price);
    $.ajax({
      url: `/api/v1/products/${id}`,
      type: 'PUT',
      data: { product: { name: name, description: description , price: price } },
      success: (product) => {
        console.log(product)
        this.props.product = product;
      },
      complete: () => {
        this.cancelEdit();
      }
    });
  },


  render() {
    return this.state.editable ? this.renderForm() : this.renderView();
  },

  renderView() {
    return(
      <li className="list-group-item" onClick={this.props.productDetails}>
        <div className='row'>
          <div className='col-md-8'>
            {this.props.product.name}
          </div>
          <div className='col-md-4'>
            <span className="label label-default">Rs {this.props.product.price}</span>
          </div>
        </div>
      </li>
    );
  },

  renderForm() {
    return(

      <div className='form-horizontal'>
        <div className='form-group'>
          <input ref='name' placeholder='Enter name of the product' type='text' defaultValue={this.props.product.name}/>
        </div>
        <div className='form-group'>
          <textarea ref='description' placeholder='Enter a description'defaultValue={this.props.product.description}/>
        </div>
        <div className='form-group'>
          <input ref='price' placeholder='Enter a price' type='number' defaultValue={this.props.product.price}/>
        </div>
        <div className='form-group'>
          <button onClick={this.updateProduct} type='submit'> Submit </button>
          <a onClick={this.cancelEdit}> Cancel </a>
        </div>
      </div>
    );
  }

});