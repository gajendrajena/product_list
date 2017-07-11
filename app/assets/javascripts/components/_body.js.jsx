var Body = React.createClass({

  getInitialState() {
    return {
      products: []
      currentProduct: null;
    }
  },

  componentDidMount() {
    $.getJSON('/api/v1/products.json', (response) => {
      this.setState({ products: response })
      this.setState({ currentProduct: this.state.products.first })
    });

  },

  handleSubmit(product) {
    var newState = this.state.products.concat(product);
    this.setState({ products: newState })
  },

  productDetails(){
    $('#right-side').html("<NewProduct handleSubmit={this.handleSubmit}/>")
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
      <div className="row">
        <div className="col-lg-4">
          <div className="well">
            <Products products={this.state.products} handleDelete={this.handleDelete} productDetails={this.productDetails}/>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="well" id="right-side">
            <NewProduct handleSubmit={this.handleSubmit} product={this.state.currentProduct}/>
          </div>
        </div>
      </div>
    );
  }
});