$:.unshift "."
require 'sinatra'
require "sinatra/reloader" if development?
require 'sinatra/flash'
require 'pp'

set :reserved_words, %w{grammar test favicon.jpg}

helpers do
  def current?(path='/')
    (request.path==path || request.path==path+'/') ? 'active' : ''
  end
end

get '/grammar' do
  erb :grammar
end

get '/test' do
  erb :test
end

# Necesario, bug de Rubygems
class String
  def name
    to_str
  end
end

get '/' do
  source = "SOL 4# 2/4 G2 ||"
  erb :index, 
      :locals => { :source => source}
end
