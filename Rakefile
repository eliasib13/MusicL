desc "Run server"
task :default => [ :clean, :css, :jison ] do
  sh "rackup"
end

task :jison => %w{public/musicL.js} 

desc "Compile the grammar public/musicL.jison"
file "public/musicL.js" => %w{public/musicL.jison} do
  sh "jison public/musicL.jison public/musicL.l -o public/musicL.js"
end

desc "Compile the sass public/styles.scss"
task :css do
  sh "sass public/styles.scss public/styles.css"
end

task :testf do
  sh " open -a firefox test/test.html"
end

task :tests do
  sh " open -a safari test/test.html"
end

desc "Remove musicL.js"
task :clean do
  sh "rm -f public/musicL.js"
  sh "rm -f musicL*.tab.jison"
  sh "rm -f musicL*.output"
  sh "rm -f musicL*.vcg"
  sh "rm -f musicL*.c"
end

desc "Open browser in GitHub repo"
task :github do
  sh "open https://github.com/alu0100698121/MusicL"
end
