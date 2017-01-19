# LORASWITCH-API

LORASWITCH is a simple connected object that monitors the power status in the home.
Just plug it to any (non switched) plug in your home and you will be ready to monitor.

## API
This is the api powering the monitoring portal.
It simplify the calls to Live Object backend and return meaningful content to the portal.

## How to run
### On target
LO stands for "Live Object"

```
docker build -t loraswitch-api .
docker run -it --rm \
-e DEVICEUID='$$$the device LO uid$$$' \
-e LOMAPIKEY='$$$the LO api key$$$' \
--name run-loraswitch-api loraswitch-api
```

### During development
loraswitch api implements some `gulp` tasks to ease the development and testing. 

To monitor any code change and reload the server immediately, just call :
```
DEVICEUID="your device uid" LOMAPIKEY="your LO api key" gulp
```

To monitor any code and test-code change, rerun the test and restart the server, just call :
```
DEVICEUID="your device uid" LOMAPIKEY="your LO api key" gulp test
```



