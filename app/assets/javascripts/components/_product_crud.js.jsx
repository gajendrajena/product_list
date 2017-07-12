var ProductCrud = React.createClass({

  getInitialState() {
    return {editable: this.props.action};
  },

  resetToNew() {
    console.log('in ProductCrud')
    this.props.resetToNew()

  },

  handleDelete(id) {
    this.props.handleDelete(id);
  },

  handleEdit(id) {
    console.log('in ProductCrud handleEdit')
    this.props.handleEdit(id);
  },

  render() {

    var prTemplate = <NewProduct handleSubmit={this.props.handleSubmit} validateProduct={this.props.validateProduct} resetToNew={this.props.resetToNew} />;

    if(this.props.action == 'show') {
      prTemplate = <ProductDetail product={this.props.product} resetToNew={this.props.resetToNew} handleDelete={this.handleDelete.bind(this, this.props.product.id)} handleEdit={this.handleEdit.bind(this, this.props.product.id)}/>;
    } else if(this.props.action == 'edit') {
      prTemplate = <EditProduct handleSubmit={this.props.handleSubmit} product={this.props.product} validateProduct={this.props.validateProduct} resetToNew={this.props.resetToNew} />;
    } else if(this.props.action == 'new') {
      <NewProduct handleSubmit={this.props.handleSubmit} validateProduct={this.props.validateProduct} resetToNew={this.props.resetToNew} />;
    }

    return (
      <div>
        {prTemplate}
      </div>
    );
  }

});