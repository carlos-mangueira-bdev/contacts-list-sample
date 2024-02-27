require "net/http"

class Api::V1::ContactsController < ApplicationController
  before_action :authenticate

  SENDER_ID = 154848467
  CONTACTS_TOKEN = "randomstring"

  def index
    url = "#{Rails.application.credentials.api_url_contacts}?api_key=#{Rails.application.credentials.api_key}&sender_id=#{SENDER_ID}&token=#{CONTACTS_TOKEN}"
    uri = URI.parse(url)
    req = Net::HTTP::Get.new(uri)
    req["Authorization"] = "Bearer #{@auth_token}"

    res = Net::HTTP.start(uri.hostname, uri.port, :use_ssl => uri.scheme == 'https') {|http|
      http.request(req)
    }

    @contacts = JSON.parse(res.body)

    # filter blocked contacts
    @contacts.reject!{|el| el["block_status"] != 0}

    # order by first name ASC
    @contacts.sort_by!{|hash| hash["first_name"]}

    render json: {contacts: @contacts}, status: :ok
  end
end
