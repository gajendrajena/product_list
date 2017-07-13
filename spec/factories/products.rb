FactoryGirl.define do
  factory :product, class: Product do
    name "MyString"
    description "MyText"
    price 1.5
  end
end
