class MessagesController < ApplicationController
  def create
    message = Message.new(message_params)
    room = Room.find(message_params["room_id"])
    user = User.find(message_params["user_id"])
    if message.save
      RoomsChannel.broadcast_to(room, {
        id: message.id,
        user_id: user.id,
        content: message.content,
        created_at: message.created_at
      })
    end
  end

  private

  def message_params
    params.require(:message).permit(:content, :user_id, :room_id)
  end
end
