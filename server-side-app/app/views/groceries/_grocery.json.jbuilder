json.extract! grocery, :id, :item, :qty, :purchased, :created_at, :updated_at
json.url grocery_url(grocery, format: :json)
