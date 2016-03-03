desc "run all asset processings"
task :assets => %w(assets:images assets:package)

namespace :assets do
  desc "crushes all PNGs in public/images"
  task :images do
    require 'find'

    sum = []

    images_dir = File.expand_path('public/images')
    Find.find(images_dir) do |file|
      next unless file.match('\.png$')

      # crush
      crushed_file = "#{file}.crushed"
      command = <<-CMD
        pngcrush -reduce -brute -no_cc -q "#{file}" "#{crushed_file}"
      CMD
      system command.strip

      # check
      next unless File.exists?(crushed_file)
      crushed_size = File.size(file) - File.size(crushed_file)
      unless crushed_size > 0
        system "rm \"#{crushed_file}\""
        next
      end

      system "mv \"#{crushed_file}\" \"#{file}\""
      sum << crushed_size
      puts "CRUSHED #{crushed_size}: #{file}"
    end

    puts "TOTAL: #{sum.inject(0){|s,i|s+i}} bytes of #{sum.size} files"
  end

  desc "generates sass files"
  task :sass do
    system <<-SCRIPT
      rm tmp/*.css
      cp public/stylesheets/*.css tmp/
      sass views/stylesheets/layout.sass tmp/layout.css
      sass views/stylesheets/style.sass tmp/style.css
    SCRIPT
  end

  desc "packages asset files with jammit"
  task :package => :sass do
    system "rm -r public/assets/"
    require 'jammit'
    Jammit.package!(:force => true)
  end
end

desc "install the needed tools"
task :install do
  system "brew install pngcrush"
end

desc "setup the heroku instance"
task :setup do
  system "heroku create --stack cedar-14"
  system "heroku addons:add custom_domains"
  #system "heroku domains:remove bjuenger.de --app old-bjuenger-homepage"
  system "heroku domains:add bjuenger.de"

  Rake::Task["deploy"].invoke
end

desc "deploys to heroku, after generating production assets"
task :deploy do
  system "git push heroku master"
end
