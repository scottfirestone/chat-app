require 'rails_helper'

RSpec.describe Message, :type => :model do
  let(:user) {
    User.new(:name => "user 1", :color => "bbb")
  }
  let(:room) {
    Room.new(name: "room name")
  }

  subject { 
    described_class.new(
      :content => "this is a message",
      :user    => user,
      :room    => room
    )  
  }

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is not valid without a content" do
    subject.content = nil

    expect(subject).to_not be_valid
  end

  it "is not valid without a user" do
    subject.user = nil

    expect(subject).to_not be_valid
  end

  it "is not valid without a room" do
    subject.room = nil

    expect(subject).to_not be_valid
  end
end