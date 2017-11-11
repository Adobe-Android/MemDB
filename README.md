# MemDB
A web application to help you choose the right kit of RAM for your system.

## Future Plans
This project will stick around, but future innovation will likely take place in another form. I plan to build a hardware API (to enable the kind of things I want moving forward) and the front-end for that will likely be a minimal example of its capabilities.

## Use
Build the beginnings of a system in the application to make sure you don't waste money on a RAM kit your CPU or Motherboard don't even support.

## Installation

Clone this repository to your local machine

Install necessary dependencies:

```
npm install
npm install -g http-server

```

Start the server:

```
http-server
```

## API
I'm now using a modified version of a Node.js API to retrieve parts from PCPartPicker
by Rishi Masand located at https://github.com/darthbatman

My modified version lives at https://github.com/Adobe-Android/MemDB-server
(Only added necessary node bits and one extra socket type. This was very easy thanks to the code structure I inherited. Future socket additions would also be extremely easy to implement.) Please see this project page as well as both components are necessary for this application to work.


## Technologies

* [AngularJS](https://angularjs.org/)
* [Firebase](https://firebase.google.com/) 
* [Cheerio](https://github.com/cheeriojs/cheerio)
* [Request.js](https://github.com/request/request) 

## License

MIT © [David Brown](https://github.com/Adobe-Android)
