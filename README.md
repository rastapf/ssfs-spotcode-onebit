# SpotCode

Practice version of a PWA similar to Spotify
Created during the event "Semana Super Full Stack" (Super Full Stack Week) from OneBit Code

## Back end

Developed using Ruby on Rails with SQLite as the database management system

### Versions

* Ruby 2.7.1
* Rails 6.0.2.2

## Front end

Created with React using Bulma as the framework for CSS

## Running

If you don't have Ruby on Rails set up, follow the steps here:
https://gorails.com/setup/

To run the code, with Ruby and Rails already set up in your machine just follow the following steps

### Installing the dependencies
```
bundle install
yarn install
```

### Set up the database
```
rails db:migration
```


Modify the file `db/seeds.rb` to fetch the info/files that you want in your initial population of the database

```
rails db:seed
```

### Run it

Just start your server with `rails s` and enjoy it opening http://localhost:3000 (if you're running it locally).

You'll need to sign up (unless you included a user in your seed) and login to access the system.

## Adjustments

There are still some adjustments to be made specially on the Front End.

- [ ] Improve (a lot) the sign up / sign in screens
- [ ] Create individual screens for the albums
- [ ] Create individual screens for the artists
- [ ] Allow albums to be favorited
- [ ] Allow artists to be favorited
- [ ] Improve the functionalities of the player