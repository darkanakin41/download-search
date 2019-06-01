# DownloadSearch

DownloadSearch is a sandbox for me to play with [Symfony 4](https://symfony.com/), [Guzzle](http://docs.guzzlephp.org/en/stable/), [Vue JS](https://vuejs.org/), [Webpack Encore](https://symfony.com/doc/current/frontend.html) and many more other stuff that i want.

The main functionality is the aggregation of multiple download sites into one with a common search form.

## Functionality
* Search for *Item* on different Download sites (Extreme Download and Annuaire Telechargement) and provide the original link
* Access the detail of the specific *Item* retrieved from a Download Site
* Display the list of available *Media* stored (linked to [themoviedb](https://www.themoviedb.org/?language=fr))
* Access the detail of a *Media* and see all available *Item*

## TODO
* Create an advanced research form
* Create a user section
* Enhance site parsing to retrieve more data
* Connect to a Video Game DB and a Music DB

For connected users : 
* Subscribe to a serie and be notified when a new episode is out
* Display list of subscribed series
* Display a calendar of upcoming episodes from TV Shows
* Add a checkbox which save if the episode/movie have been downloaded
* Add a notification system when a new episode is out

For the system :
* Add a command to retrieve last uploaded items
