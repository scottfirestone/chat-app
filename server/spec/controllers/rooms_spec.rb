require 'rails_helper'

RSpec.describe "Rooms", type: :request do
  it "request list of all rooms" do
    room = Room.create(:name => "room 1")

    get "/rooms"
    expect(response).to be_successful
    expect(response.body).to include("room 1")
  end
end