DISCLAIMER
==========

All the information on this example is published in good faith and for educational information purpose only.
Author does not make any warranties about the completeness, reliability and accuracy of this information.
Any action you take upon the information you find on this example (Phishing), is strictly at your own risk.
Author will not be liable for any losses and/or damages in connection with the use of this example.

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

If you want to get SMS messages when anyone has logged in your copied page,
then your application should be integrated with any "sms gateway" service.

I show example on "nexmo.com"

Create account on "nexmo.com" and get "api_key" and "api_secret"

Then open "config/config.json" file and put this values in 6 and 7 lines

```
5.  "data": {
6.    "api_key": "4491cea3",
7.    "api_secret": "3f894740395a6c5f",
8.    .... 
```

#### Cerate tunnel to localhost

We are using ngrok to create secure tunnels to localhost

##### Install and use ngrok

```
sudo npm i -g ngrok
ngrok http 8080
```
In output ngrok gives you two urls for http:// and https://. These urls you can use as Phishing urls.

* You can set any port, but remember  that your server should be run on the same port.

#### And finally ::: Run your local server

```
node server.js
```
