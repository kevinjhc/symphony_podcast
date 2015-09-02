class PagesController < ApplicationController

  def index
    @audio_files = Recording.all
  end

end