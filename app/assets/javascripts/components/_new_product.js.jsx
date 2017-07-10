var NewProduct = React.createClass({

  saveProduct() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    var price = this.refs.price.value;
    console.log('The name value is ' + name + 'the description value is ' + description+ 'price: ' + price);
    $.ajax({
      url: '/api/v1/products',
      type: 'POST',
      data: { product: { name: name, description: description , price: price } },
      success: (product) => {
        this.props.handleSubmit(product);
      }
    });
  },

  render() {
    return (
      <div>
      <input ref='name' placeholder='Enter name of the product' type='text'/>
      <input ref='description' placeholder='Enter a description' type='text'/>
      <input ref='price' placeholder='Enter a price' type='number'/>
      <button onClick={this.saveProduct}> Submit </button>
      </div>
      );
  }

});