
const progress = {
        "defaults": {
          //color
          "color": "#003f72",
          //height
          "height": "3px",
          "top": 0,
          "bottom": 0,
          "left": 0,
          "right": 0,
          "zIndex": 9999,
          //bottom or top
          "ontop": true,
          //left to right
          "ltr": true,
          //element to use value
          "attach": false,
          //js style or css
          "css": false,
          //decimal numbers
          "round": false,
          //use only values
          "nobar": false
        },
        "start": function (configs = {}) {
          let progresselem;
          if(!configs.nobar) {
            //create element
            progresselem = document.createElement("div");
            //use css instead of js style
            progresselem.setAttribute('id', 'progressbarJS');
            //append to body
            document.body.appendChild(progresselem);
            //styles
            progresselem.style.position = 'fixed';
            progresselem.style.zIndex = '99999';
            progresselem.style.width = '0%';
            //configurable options
            //top or bottom
            configs.ontop ? progresselem.style.bottom = '0' : progresselem.style.top = progress.defaults.top;
            //ltr or rtl
            configs.ltr ? progresselem.style.right = '0' : progresselem.style.left = progress.defaults.left;
            //height
            configs.height ? progresselem.style.height = configs.height : progresselem.style.height = progress.defaults.height;
            //color
            configs.color ? progresselem.style.backgroundColor = configs.color : progresselem.style.backgroundColor = progress.defaults.color;
          }
          let attachElem =  progress.defaults.attach;
          let roundto = progress.defaults.round;
          //round to
          configs.round ? roundto = configs.round : roundto = 2;
          //attach
          configs.attach ? attachElem = document.querySelector(configs.attach) : false ;
          //scroll event
          document.addEventListener('scroll', function (e) {
            const maxHeight = document.body.scrollHeight;
            const sizeHeight = window.innerHeight;
            const scrolls = window.scrollY;
            const percentage = (scrolls / (maxHeight - sizeHeight)) * 100;
            if (!configs.nobar) {
              progresselem.style.width = percentage.toFixed(roundto) + "%";
            }
            if (attachElem) {
              attachElem.innerHTML = percentage.toFixed(roundto) + "%";
            }
          });

        }
      }
