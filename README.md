# OnePlus Unlock your Speed: Hack Script
> A hack script for game at https://unlock.oneplus.com/en-gb. Play it from terminal!

## WARNING
This is just for educational purposes. I aim to show the basics of web development. Whatever you do with this script is not my responsibilty.
Please respect the game and other people. Also, I take no warranty of any kind. You will get blocked by server if you don't respect the limits. 

## Getting Started
These instructions play the game at https://unlock.oneplus.com/en-gb/ from your terminal/cmd.

### Requirements
Make sure you have the latest version of `node.js` installed. Get it from [here](https://nodejs.org/en/download/current/) for your operating system. 
Thats all.

### Setting up
* Open a cmd/terminal.
* Clone this repository in your local machine using
```
  git clone https://github.com/anamritraj/oneplus-unlock-your-speed-hack.git
```
* Now do 
```
  cd oneplus-unlock-your-speed-hack
```
* Now in that directory
```
  npm install
```
* It may take a couple of seconds to finish this step.
* Now time to get your `token` and `csrf-token`.

You need to get a few details from the browser to run this script. So put on your hacking hat (if you have one, if you don't then get one!) and follow along. 

### Getting the game to run on a PC browser.
* First of all open the game in a browser https://unlock.oneplus.com/en-gb/
* Now it will show up something like this.

  ![Blocked on Browsers!](https://user-images.githubusercontent.com/11889942/47242269-dea6c400-d40b-11e8-97b7-24b6ab999d61.PNG)

* Now press `F12` or `Ctrl + Shift + I` and open debugging tools in your browser. I will be using Google Chrome.
* Now Click the Button shown in the diagram.

  ![Click here](https://user-images.githubusercontent.com/11889942/47242504-8b814100-d40c-11e8-83d9-a1e230a6862e.PNG)

* Clicking it will make the browser look like this. Now Click the 3 Dots on the top right corner of the Developer Tools. And click on the last icon after `Dock Side` as shown in the image below.
  
  ![Change the view](https://user-images.githubusercontent.com/11889942/47242670-0e0a0080-d40d-11e8-89aa-6c0180ad5b5b.PNG)

* Now reload the page and you'll have something similar to this.
  
  ![Hurray!](https://user-images.githubusercontent.com/11889942/47242869-d2bc0180-d40d-11e8-93fb-31f82d7d5de3.PNG)

* Now Tap multiple times and you will get to Enter your Email page. Enter your details and you will recieve a link to play the game in your email.

* Open your email and *Right Click* on the  big red `Play Now` button and select `Copy Link Address`.
  
  ![Copy Link address](https://user-images.githubusercontent.com/11889942/47242997-380ff280-d40e-11e8-92e1-e34267f17252.PNG)

* Now paste the link in browser tab with debugger open. You will be logged in to your account.

  ![Logged In!](https://user-images.githubusercontent.com/11889942/47243101-a8b70f00-d40e-11e8-989e-b8ec99f865d4.PNG)

### Getting the Authentication Object

* Go to `Network` Tab in the debugger and check for a row with `status` value as `101`. Click the Row. If you don't see it reload the page and check again. 

  ![Networks Tab](https://user-images.githubusercontent.com/11889942/47243182-e5830600-d40e-11e8-8739-51f7b0f8ed7b.PNG)

* Now, when you click that row, you will see a lot of data going through. Chill. Take a deep breath. **Just scroll to the top of the small box that appears**. As shown below. This is the websockets connection which the game establishes to the server.

  ![Open Websockets](https://user-images.githubusercontent.com/11889942/47243414-840f6700-d40f-11e8-9938-6b529c147b1a.PNG)  

* Now, do you see that row in `Green` color. Click it. And you will get the data you need.

  ![Yeah Sweet data!](https://user-images.githubusercontent.com/11889942/47243882-1bc18500-d411-11e8-8bde-85c6a743f965.PNG)

### Update your Files

* Copy these values on to the file `oneplus.js`. On line no `11` to `18` and also on line `67`.

### Running the Script

* Now save that file. And in the terminal/cmd run
```
  npm start
```
* This will start your script and you should see the output as below:
```
> node oneplus.js          
                           
Connecting                 
Authenticated!             
emited: 100                
emited: 200
```

* The script is designed to put logs after every 100 taps.
* You can run multiple instances of this script but be aware the server will limit you.
* I think upto 100 Taps per second is fine but after that it will limit you. BE SAFE.

## Issues?

Report [Here](https://github.com/anamritraj/oneplus-unlock-your-speed-hack/issues/new). Or hit me up on Twitter [@anamritraj](https://twitter.com/anamritraj).

## Meta

Anand – [@anamritraj](https://twitter.com/anamritraj) | [anandamritraj.in](anandamritraj.in) 

Distributed under the MIT license. See ``LICENSE`` for more information.

