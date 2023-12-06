class Api::GreetingsController < ApplicationController
  def random_greeting
    render json: { message: Greeting.order('RANDOM()').first.message }
  end
end
