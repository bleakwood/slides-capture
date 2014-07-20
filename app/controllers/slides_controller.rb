class SlidesController <  ApplicationController
	def index
	end

	def create
		require 'nokogiri'
		require 'open-uri'

		url = params[:url]
		doc = Nokogiri::HTML(open(url))

		@slides_count = doc.css('.slides section').size

		0.upto(@slides_count) do |i|
			new_url = url + i.to_s
			puts new_url
			output = `phantomjs capture.js #{new_url} app/assets/images/capture_#{i}.png`
		end
		render :index
	end
end