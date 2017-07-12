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
    var newState = this.state.products.concat(product);
    this.setState({ products: newState })
  },

  productDetails(event){
    var id = $(event.target).attr('id');
    var product = this.state.products.find(function(p) {return p.id == id; });
    this.setState({ prodAction: 'show' });
    this.setState({ curProduct: product});
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
    console.log('handleEdit:Body : id-'+id);
    this.setState({ prodAction: 'edit', curProduct: product});
  },

  resetToNew() {
    this.setState({ prodAction: 'new' });
  },

  removeProductClient(id) {
    var newProducts = this.state.products.filter((product) => {
      return product.id != id;
    });
    this.setState({ products: newProducts});
    this.setState({ prodAction: 'new' });
  },

  validateProduct(name, price){
    var msg = 'Please enter ', flag = true;
    if( name.length <= 0 && price.length <= 0 ){
      msg += 'Name and Price', flag = false;
    } else if( name.length <= 0 ){
      msg += 'Name', flag = false;
    } else if( price.length <= 0 ){
      msg += 'Price', flag = false;
    }
    if(!flag)
    $('#error').html(`<div class="alert alert-danger alert-dismissible" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>${msg}</div>`);
    return flag;
  },

  render() {
    return (
      <div className="row">
        <div className="col-lg-4">
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
              validateProduct={this.validateProduct}
              resetToNew={this.resetToNew}/>
          </div>
        </div>
      </div>
    );
  }
});