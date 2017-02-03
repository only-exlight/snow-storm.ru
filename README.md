# snow-storm.ru

This project is my personal web-site and blog. Here I use PHP + MySQL for develop my backend, and JavaScript/CSS3/HTML5 for frontend.
Navagation and AJAX query implemented with help JQuery library.

#For setting connect to MySQL use file "include/conect.php";

#With your phpMyAdmin create table "art" (article):
id: INT;

name: VARCHAR; //Name of article

description: VARCHAR; //Description article

content: VARCHAR; //Content fot article

views: INT; //Views number (add one with view)

date: DATE; // Date crete article

category: ENUM; //texts,blog,music...

#And table video_link:

id: INT;

link: VARCHAR; //YouTube share links

description: VARCHAR
