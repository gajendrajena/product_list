var ProductForm = React.createClass({

  saveProduct(id) {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    var price = this.refs.price.value;
    console.log('The name value is ' + name + 'the description value is ' + description+ 'price: ' + price);
    $.ajax({
      url: `/api/v1/products/${id}`,
      type: 'PUT',
      data: { product: { name: name, description: description , price: price } },
      success: (product) => {
        this.props.handleSubmit(product);
      }
    });
  },

  render() {
    return (
      <div>
      <input ref='name' placeholder='Enter name of the product' type='text' value={this.props.product.name}/>
      <input ref='description' placeholder='Enter a description' type='text' value={this.props.product.description}/>
      <input ref='price' placeholder='Enter a price' type='number' value={this.props.product.price}/>
      <button onClick={this.saveProduct(this.props.product.id)}> Submit </button>
      </div>
      );
  }

});