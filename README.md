# Setting up the server for hosting
Prerequisites:
- A server running linux that you can access with SSH (the commands here assume that SSH keys are used automatically on the local machine and their public keys are in `.ssh/authorized_keys` on the server)
- Sudo permissions for the user on the server
- The server is reachable by the public internet (servers on networks behind NAT (e.g. home networks) might require port forwarding of ports `80` and `443` (only TCP))
- A staticly built website (index.html file and associated css, js files)
 
Steps:
- [install and configure lighttpd for static website hosting](#install-and-configure-lighttpd-for-static-hosting)
- [move website to server + setup zero-downtime website updating and versioning](#host-website-with-versioning)
- [setup deployment in CD](#setting-up-cd)

### Install and configure lighttpd for static hosting
```bash
# Run this in the remote server
sudo apt update && sudo apt upgrade
sudo apt install lighttpd
```
then configure it:

Write this to `/etc/lighttpd/lighttpd.conf` (for example by copying the contents, issuing the command `sudo vi /etc/lighttpd/lighttpd.conf` then press `i`, then `ctrl+shift+v`, then `esc`, `:wq`):
```conf
server.modules = (
        "mod_indexfile",
        "mod_access",
        "mod_alias",
        "mod_redirect",
)

server.document-root        = "/var/www/html"
server.upload-dirs          = ( "/var/cache/lighttpd/uploads" )
server.errorlog             = "/var/log/lighttpd/error.log"
server.pid-file             = "/run/lighttpd.pid"
server.username             = "www-data"
server.groupname            = "www-data"
server.port                 = 80

# features
#https://redmine.lighttpd.net/projects/lighttpd/wiki/Server_feature-flagsDetails
server.feature-flags       += ("server.h2proto" => "enable")
server.feature-flags       += ("server.h2c"     => "enable")
server.feature-flags       += ("server.graceful-shutdown-timeout" => 5)
#server.feature-flags       += ("server.graceful-restart-bg" => "enable")

# strict parsing and normalization of URL for consistency and security
# https://redmine.lighttpd.net/projects/lighttpd/wiki/Server_http-parseoptsDetails
# (might need to explicitly set "url-path-2f-decode" = "disable"
#  if a specific application is encoding URLs inside url-path)
server.http-parseopts = (
  "header-strict"           => "enable",# default
  "host-strict"             => "enable",# default
  "host-normalize"          => "enable",# default
  "url-normalize-unreserved"=> "enable",# recommended highly
  "url-normalize-required"  => "enable",# recommended
  "url-ctrls-reject"        => "enable",# recommended
  "url-path-2f-decode"      => "enable",# recommended highly (unless breaks app)
 #"url-path-2f-reject"      => "enable",
  "url-path-dotseg-remove"  => "enable",# recommended highly (unless breaks app)
 #"url-path-dotseg-reject"  => "enable",
 #"url-query-20-plus"       => "enable",# consistency in query string
)

index-file.names            = ( "index.html" )
url.access-deny             = ( "~", ".inc" )
static-file.exclude-extensions = ( ".php", ".pl", ".fcgi" )

# default listening port for IPv6 falls back to the IPv4 port
include_shell "/usr/share/lighttpd/use-ipv6.pl " + server.port
include_shell "/usr/share/lighttpd/create-mime.conf.pl"
include "/etc/lighttpd/conf-enabled/*.conf"

#server.compat-module-load   = "disable"
server.modules += (
        "mod_dirlisting",
        "mod_staticfile",
)
```

### Host website with versioning
```bash
# run this on the remote server
cd ~  # You can also omit the ~ and just write cd
git clone https://github.com/BeatsuDev/deployment-scripts
rm -fr deployment-scripts/.git README.md
sudo chmod +755 deploymenqt-scripts/*
sudo mv deployment-scripts/* /var/www/
rm -fr deployment-scripts
```
If you're on linux, wsl, or you've installed cygwin `tar` package:
```bash
# run this on the #### local computer #### where you have your folder with static website that you want to host
cd /path/to/static/folder
ls -la  # You should see index.html + other files that will all be publicly available for anyone in the world to see, including webscrapers that will guaranteed grab any leaked data. So be careful!
tar -cz * | ssh user@host "cat > /var/www/website.tar.gz"
```
then on the server again:
```bash
# Run this on the remote server
cd /var/www/
./update website.tar.gz
```

### Setting up HTTPS with Letsencrypt
/* TODO */

### Setting up CD
Here I'll assume GitHub Actions as CD runner, but this can easily be translated to other platforms. 

/* TODO */
