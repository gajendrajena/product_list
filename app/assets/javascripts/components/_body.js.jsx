var Body = React.createClass({

  getInitialState() {
    return { products: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/products.json', (response) => { this.setState({ products: response }) });
  },

  handleSubmit(product) {
    var newState = this.state.products.concat(product);
    this.setState({ products: newState })
  },

  handleEdit() {

  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/products/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeProductClient(id);
      }
    });
  },

  removeProductClient(id) {
    var newProducts = this.state.products.filter((product) => {
      return product.id != id;
    });
    this.setState({ products: newProducts});
  },


  render() {
    return (
      <div>
      <NewProduct handleSubmit={this.handleSubmit}/>
      <Products products={this.state.products} handleDelete={this.handleDelete}/>
      </div>
      );
  }
});