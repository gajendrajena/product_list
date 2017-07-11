var NewProduct = React.createClass({

  saveProduct() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    var price = this.refs.price.value;
    if(name.length > 0 && price.length > 0) {
      $.ajax({
        url: '/api/v1/products',
        type: 'POST',
        data: { product: { name: name, description: description , price: price } },
        success: (product) => {
          this.props.handleSubmit(product);
        },
        complete: () => {
          this.refs.name.value = '';
          this.refs.description.value = '';
          this.refs.price.value = '';
        }
      });
    } else {
      alert('Please Enter values');
    }
  },

  render() {
    return (
        <div className='form-horizontal'>
          <div className='form-group'>
             <label>Name</label>
            <input ref='name' placeholder='Enter name of the product' type='text' className='form-control'/>
          </div>
          <div className='form-group'>
            <label>Description</label>
            <textarea ref='description' placeholder='Enter a description' className='form-control'/>
          </div>
          <div className='form-group'>
            <label>Price</label>
            <input ref='price' placeholder='Enter a price' type='number' className='form-control'/>
          </div>
          <div className='form-group'>
            <button onClick={this.saveProduct} className='btn btn-success'> Submit </button>
          </div>
        </div>
      );
  }

});