require 'spec_helper'

describe "Products API" do
  it 'sends a list of products' do
    FactoryGirl.create_list(:product, 10)

    get '/api/v1/products'

    json = JSON.parse(response.body)

    # test for the 200 status-code
    expect(response).to be_success

    # check to make sure the right amount of products are returned
    expect(json['products'].length).to eq(10)
  end
end