var Products = React.createClass({
    handleDelete(id) {
      console.log('delete item clicked');
      this.props.handleDelete(id);
    },

  render() {
    var products = this.props.products.map((product) => {
      return (
          <div key={product.id}>
            <Product product={product}
              handleDelete={this.handleDelete.bind(this, product.id)}
              handleEdit={this.handleEdit}/>
          </div>
        );
    });
    return (
      <div>
        {products}
      </div>
    );
  }
});