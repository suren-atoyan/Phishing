# Phishing

## Synopsys

Phishing example on some social networks on localhost and sms geteway inegration

## Dependencies

- NodeJs
- Npm
- ngrok (npm)
- Account on "nexmo.com" (or other "sms gateway" service) *optional

## Installation

#### Clone app and install dependencies

```
git clone https://github.com/SurenAt93/Phishing.git
cd Phishing
npm i
```

#### Sms-geteway integration

If you want get SMS messages when nobody was logged in your copy page,
then your application should be integrated on any "sms gateway" service.

I show example on "nexmo.com"

Create account on "nexmo.com" and get "api_key" and "api_secret"

Then open "server.js" file and put this values in 24 and 25 lines

```
23. var data = JSON.stringify({
24.    api_key: '********',
25.    api_secret: '*************',
       .... 
```

#### Cerate tunnel to localhost

We use ngrok for create secure tunnels to localhost

##### Install and use ngrok

```
sudo npm i -g ngrok
ngrok 8080
```
In output ngrok give to urls for http:// and https://. This urls you can use for Phishing.

* You can set any port, but remember  that your server should be run in this port.

#### And finally ::: Run your local server

```
node server.js
```
