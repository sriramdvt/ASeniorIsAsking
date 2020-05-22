# ASeniorIsAsking

## Setting up the development environment
### Backend
The backend server is shipped in Docker containers. This helps create
your development environment and later deploy the application. Therefore, to
work on the project, you need to install Docker and use containers for building
the project. Containers save you from installing all of this on your own
workstation.

See the different installation instructions for your distribution below.

Debian / Debian-based systems -

```bash
sudo apt-get update && sudo apt-get install docker docker-compose
```

Arch / Arch-based systems -
```bash
sudo pacman -S docker docker-compose
```

The next step is to build the docker containers, to do that run the following
steps

```bash
cd ./backend
docker-compose build
```

Now that the containers are built, it time to start the server

```bash
docker-compose up
```

If all goes well, you should have a server running at `localhost:5000`,
Happy Coding :rocket:
