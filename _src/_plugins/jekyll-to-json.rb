# encoding: utf-8
#
# Title:
# ======
# Jekyll to JSON Generator
#
# Description:
# ============
# A plugin for generating JSON representations of your
# site content for easy use with JS MVC frameworks like Backbone.
#
# Author:
# ======
# Jezen Thomas
# jezenthomas@gmail.com
# http://jezenthomas.com

module Jekyll
  require 'json'

  class JSONGenerator < Generator
    safe true
    priority :low

    def generate(site)
      # Converter for .md > .html
      converter = site.find_converter_instance(Jekyll::Converters::Markdown)

      # We want to go through all posts and pages
      content = site.posts.docs + site.pages

      # Iterate over all posts
      content.each do |post|

        # Grab the post data in a hash
        hash = post.data
        hash["content"] = converter.convert(post.content)
        hash["url"] = post.url

        # Start building the path
        url = post.url
        path = "_public#{url}"

        # Create the directories from the path
        FileUtils.mkpath(path) unless File.exists?(path)

        # Create the JSON file and inject the data
        f = File.new("#{path}/raw.json", "w+")
        f.puts JSON.generate(hash)
      end

    end

  end

end