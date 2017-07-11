var Products = React.createClass({

    handleDelete(id) {
      this.props.handleDelete(id);
    },

    onUpdate(product) {
      this.props.onUpdate(product);
    },

  render() {
    var products = this.props.products.map((product) => {
      return (
        <Product product={product}
          key={product.id}
          productDetails={this.props.productDetails}
          handleDelete={this.handleDelete.bind(this, product.id)}
          handleUpdate={this.onUpdate}
          handleEdit={this.handleEdit}/>
      );
    });
    return (
      <ul className="list-group">
        {products}
      </ul>
    );
  }
});