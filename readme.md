## **USAGE** ##

### **Build & run** ##

1.  `npm install`
2.  `gulp dev`
3.  `npm start`

---
### **Run with docker & nginx** ###
1.  install docker
2.  pull image nginx: `sudo docker pull nginx`
3.  run container:

    ```docker run --name nginx-angular2blog -p 80:80 -v /home/tinlvv/Project/Dev/angular2blog/docker/config/nginx.conf:/etc/nginx/nginx.conf -v /home/tinlvv/Project/Dev/angular2blog/docker/config/default.conf:/etc/nginx/conf.d/default.conf -v /home/tinlvv/Project/Dev/anuglar2blog/src:/var/www/angular2blog -d  nginx```
