class PagesController < ApplicationController

  def index
    @recordings = Recording.all
  end

end