# README

* Project setup
- Use ruby-2.6.3
`bundle install --path vendor/bundle`

* Database creation/initialization
`rake db:drop`
`rake db:create`
`rake db:migrate`
`rake db:seed`

* How to run the test suite
`rake db:test:prepare`
`rspec`

* Start local server (runs on port 3001)
`rails s`
