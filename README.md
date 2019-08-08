# Personal-Portfolio

My portfolio has gone through several major redesigns over the last couple of releases. The most major update I added was that I prepared the app to become the base for a scalable web app.

# Current Architecture

Currently the front-end is built using React JS. The static files are then served up by Nginx. I'm currently trying to et Nginx to cache the static images. This is all then wrapped up in a docker container which installs all the neccesary softwares and it is then deployed to a server on Digital Ocean.

# Future Goals

Create a blog where I can go more in depth on specfic tools.
Deploy to a kubernetes cluster to manage containers.
Setup a Jenkins Pipeline to have a blue/green deployment system.
