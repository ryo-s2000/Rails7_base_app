FROM ruby:3.1.2
RUN apt-get update -qq && \
  curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
  apt-get install -y nodejs
WORKDIR /myapp
