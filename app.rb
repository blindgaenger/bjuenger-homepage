# encoding: UTF-8

require 'sinatra'
require 'sinatra/content_for'
require 'sinatra/reloader' if development?
require 'haml'
require 'sass'
require 'maruku'

configure do
  set :haml, :format => :html5 # default Haml format is :xhtml
  set :sass, :style => :compact # default Sass style is :nested, :expanded
end

get '/' do
  haml :index
end

get '/stylesheets/:file.css' do
  scss "stylesheets/#{params[:file]}".to_sym
end
