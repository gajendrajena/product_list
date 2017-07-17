require 'spec_helper'

describe "Products API" do
  it 'sends a list of products' do
    FactoryGirl.create_list(:product, 10)
    get '/api/v1/products'
    json = JSON.parse(response.body)
    # test for the 200 status-code
	assert_response 200
    # check to make sure the right amount of products are returned
    expect(json.length).to eq(10)
  end

  it 'sends a list of products' do
    product = FactoryGirl.create(:product)
    get "/api/v1/products/#{product.id}"
    # test for the 200 status-code
	assert_response 200
  end

  it 'creates a product' do
    post "/api/v1/products/", params: {product: {name: 'Macbook Pro', description: 'The best programmers laptop', price: 799 } }
    json = JSON.parse(response.body)
    # test for the 201 status-code
	assert_response 201

    # check to make sure the created product is returned
    expect(json['name']).to eq('Macbook Pro')
    expect(json['description']).to eq('The best programmers laptop')
    expect(json['price']).to eq(799)
  end

  it 'updates a product' do
    product = FactoryGirl.create(:product)
    put "/api/v1/products/#{product.id}", params: {product: {name: 'Macbook Pro', description: 'The best programmers laptop', price: 799 } }
    json = JSON.parse(response.body)
    # test for the 200 status-code
	assert_response 200

    # check to make sure the created product is returned
    expect(json['name']).to eq('Macbook Pro')
    expect(json['description']).to eq('The best programmers laptop')
    expect(json['price']).to eq(799)
  end

  it 'validates while updating a product' do
    product = FactoryGirl.create(:product)
    put "/api/v1/products/#{product.id}", params: {product: {name: 'Macbook Pro', description: 'The best programmers laptop', price: nil } }
    json = JSON.parse(response.body)
    # test for the 422 status-code
	assert_response 422
  end

  it 'validates a product' do
    post "/api/v1/products/", params: {product: {name: 'Macbook Pro', description: 'The best programmers laptop' } }
    # test for the 422 status-code
	assert_response 422
  end

  it 'validates a product' do
    post "/api/v1/products/", params: {product: { description: 'The best programmers laptop' } }
    # test for the 422 status-code
	assert_response 422
  end
end
