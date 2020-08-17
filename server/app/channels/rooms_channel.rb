class RoomsChannel < ApplicationCable::Channel
  def subscribed
    room = Room.find(params[:room])
    stream_for room
  end

  def unsubscribed
    raise NotImplementedError
  end
end
