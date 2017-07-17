var Body = React.createClass({

  getInitialState() {
    return {
      products: [],
      prodAction: 'new',
      curProduct: null
    }
  },

  componentDidMount() {
    $.getJSON('/api/v1/products.json', (response) => {
      this.setState({ products: response })
      this.setState({ curProduct: this.state.products.first })
    });
  },

  handleSubmit(product) {
    var index = this.state.products.findIndex(function(p) {return p.id == product.id; });
    var newState = this.state.products;
    if(index !== -1)
      newState[index] = product;
		else
	    newState = this.state.products.concat(product);
    this.setState({ products: newState, prodAction: 'show', curProduct: product});
  },

  productDetails(event){
    var target = $(event.target).closest('.product-link')
    var id = $(target).attr('id');
    var product = this.state.products.find(function(p) {return p.id == id; });
    this.setState({ prodAction: 'show', curProduct: product});
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

  handleEdit(id) {
    var product = this.state.products.find(function(p) {return p.id == id; });
    this.setState({ prodAction: 'edit', curProduct: product});
  },

  resetToNew() {
    this.setState({ prodAction: 'new' });
  },

  removeProductClient(id) {
    var newProducts = this.state.products.filter((product) => {
      return product.id != id;
    });
    this.setState({ products: newProducts, prodAction: 'new' });
  },


  render() {
    return (
      <div className="row">
        <div className="col-lg-4 fix-height v-scroll">
          <div className="well">
            <Products products={this.state.products} productDetails={this.productDetails}/>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="col-md-12" id="right-side">
            <ProductCrud
              action={this.state.prodAction}
              handleSubmit={this.handleSubmit}
              product={this.state.curProduct}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              resetToNew={this.resetToNew}/>
          </div>
        </div>
      </div>
    );
  }
});
