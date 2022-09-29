Run
```
docker compose -f docker-compose-dev.yml up
```

Enter Container
```
docker compose -f docker-compose-dev.yml exec app bash
docker compose -f docker-compose-dev.yml exec {name} bash
```

Setup Laravel
```
bundle install
```

Compile JS
```
npm run watch
```

Rails server
```
rails s -p 3000 -b '0.0.0.0'
```

Reset
```
docker container prune
docker compose -f docker-compose-dev.yml build --no-cache
```

URL
http://localhost:3000
