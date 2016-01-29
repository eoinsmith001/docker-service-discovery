# Docker Service Discovery

From [here](http://jasonwilder.com/blog/2014/07/15/docker-service-discovery/)

## Current state

Some terms refer to the blog post linked above.

- One service running in a container in a vagrant box with a docker-register container registering to
- another vagrant box running etcd in a container

## To do

- Add a vagrant box with a client app and docker-discover container, so that client app can speak to hello-svc via discover/etcd/proxy
