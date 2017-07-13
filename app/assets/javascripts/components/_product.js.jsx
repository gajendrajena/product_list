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
      <li className="list-group-item margin-bottom-15">
			  <a href='javascript:void(0)' onClick={this.props.productDetails} id={this.props.product.id} className='product-link'>
          <div className="product-item">
            <div className="col-md-5 no-padding">
    				  <div className="product-image"> </div>
            </div>

            <div className="product-attributes col-md-7">
              <div className="product-name"> {this.props.product.name} </div>
              <div className="price"> ${this.props.product.price} </div>
            </div>
					</div>
				</a>
      </li>
    );
  },

});
