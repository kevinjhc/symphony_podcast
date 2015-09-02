class PagesController < ApplicationController

  def index
    url = "https://www.freeconferencecall.com/itunes/podcast.asp?id=6054754850:611287"
    @feed = Feedjira::Feed.fetch_and_parse(url).entries[0,5]
  end

end