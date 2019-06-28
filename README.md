# DownloadSearch

DownloadSearch is a sandbox for me to play with [Symfony 4](https://symfony.com/), [Guzzle](http://docs.guzzlephp.org/en/stable/), [Vue JS](https://vuejs.org/), [Vuetify](https://vuetifyjs.com/), [Webpack Encore](https://symfony.com/doc/current/frontend.html) and many more other stuff that I want to learn.

The main functionality is the aggregation of multiple download sites into one with a common search form.

## Functionality
For everyone : 
* Search for *Item* on different Download sites (Extreme Download and Annuaire Telechargement) and provide the original link
* Access the detail of the specific *Item* retrieved from a Download Site
* Display the list of available *Media* stored, in relation with following Databases : 
    * [themoviedb](https://www.themoviedb.org/?language=fr)
    * [thetvdb](https://www.thetvdb.com/)
* Access the detail of a *Media* and see all available *Item*
* Display a calendar of upcoming episodes from TV Shows
* User can log in
* Can create an account

For connected users : 
* Subscribe to a TV Show
* Display list of subscribed TV Shows
* Display a calendar of upcoming episodes from TV Shows subscribed
* Access his profile page
* Edit password

System commands : 
```bash
# command to update items no processed yet
php bin/console app:item:update

# command to update all medias
php bin/console app:media:update

# command to update series
php bin/console app:media:tv:update
```

## TODO
For everyone : 
* Create an advanced research form
* Enhance site parsing to retrieve more data
* Connect to a Video Game DB and a Music DB
* Add validation mail

For connected users : 
* Add a notification system when a new episode is out on a TV Show or Animes subscribed
* Add a checkbox which save if the episode/movie have been downloaded

For the system :
* Add a command to retrieve last uploaded items
