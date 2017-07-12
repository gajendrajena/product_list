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
    return(
      <li className="list-group-item">
        <div className='row'>
          <div className='col-md-8'>
            <a href='javascript:void(0);' className='pull-left' onClick={this.props.productDetails} id={this.props.product.id}> {this.props.product.name} </a>
          </div>
          <div className='col-md-4'>
            <span className="label label-default pull-right">Rs {this.props.product.price}</span>
          </div>
        </div>
      </li>
    );
  },

});