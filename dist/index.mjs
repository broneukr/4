import "./mid.js"
// src/iinl/html.js
var require_html = __commonJS({
  "src/iinl/html.js"(exports) {
    exports.html = (x) => `<!DOCTYPE html>
<html lang="en">
<head>
    <title>$title</title>
    <meta property="og:site_name" content="$site_name">
    <meta property="og:description" content="$description">
    <meta property="article:author" content="$author">
    <!-- $image_url / link preview image is set using og:image property -->
    <meta property="og:image" content="https://i.ibb.co/Cz30DGk/49-41186-32-10427.jpg">
    <meta property="telegram:channel" content="@cor_bee">
    <!-- site_verification property must be present, but @content could be empty (no IVBot-side verification for now?) -->
    <meta data-rh="true" property="al:android:app_name" content="Medium" />
    <!-- published_time property must be present, but you could leave @content empty if $published_date isn't needed -->
    <meta property="article:published_time" content="2020-02-03T23:10:04.654Z">
</head>

<body>
    <div class="article">
        <article class="article__content">
            <!-- your "IV-compliant" article body goes here -->
            <!-- for general idea of what "IV-compliant" HTML is refer to IV documentation: 
                https://instantview.telegram.org/docs#supported-types (HTML counterpart and allowed children columns) -->

            <!-- if first element in article is figure it's going to be set/used as article $cover-->
             <figure>
                <img src="https://res.cloudinary.com/pipedreamin/image/upload/v1563319174/icons/HTTP_2x_pwu9ax.svg" />
                <figcaption>figcaption</figcaption>
            </figure> 

            <p>Hello world</p>
        </article>
    </div>
</body>

</html>
`;
  }
});

// src/iinl/bot.js

var ki = JSON.stringify({
  "inline_keyboard": [
    [{
      "text": "L",
      "callback_data": "LLLL"
    }, {
      "text": ":RE",
      "callback_data": "re"
    }]
  ]
});
var kk = JSON.stringify({
  "inline_keyboard": [
    [{
      "text": "L",
      "callback_data": "LLLL"
    }, {
      "text": ":RE",
      "switch_inline_query_current_chat": ""
    }, {
      "text": "LL",
      "callback_data": "LL"
    }, {
      "text": "D",
      "switch_inline_query_current_chat": "D"
    }]
  ]
});
var kg = JSON.stringify({ "resize_keyboard": true, "keyboard": [
  [{
    "request_location": true,
    "text": "GEO"
  }, "#M", "$LLL", "@IEEII", "X.co"]
] });
async function bot(update) {
  var bot2 = new Bot(TOKEN, update);
  var bus = new CommandBus();
  bus.on(/\/add/, function() {

  	
    B.reply_markup = JSON.stringify({ "remove_keyboard": true });
    this.replyToSender("iinl.ml");
  });
  bus.on(/\/help/, function() {
  
    B.reply_markup = JSON.stringify({
      "inline_keyboard": [
        [{
          "text": "LINK",
          "url": `https://t.me/iinllbot?start=${req.chat}`
        }]
      ]
    });
    this.replyToSender(JSON.stringify(v, null, 4));
  });
  bus.on(/^(?=.*photo)(?=.*reply_to).*$/, reply);
  bus.on(/\/_\s*([A-Za-z0-9_]+)?_\s*([A-Za-z0-9_]+)?/, randomJoke);
  bus.on(/\/start \s*([A-Za-z0-9_]+)?/, deep);
  bus.on(/#\s*([A-я0-9_]+)?/, rH);
  bus.on(/\/_\s*([A-Za-z0-9_]+)?/, randomJ);
  bot2.register(bus);
  if (update) {
    bot2.process();
  }
}
async function rH(x) {
	//console.info(x)
	

  
  B.reply_markup = kg;
  this.replyToSender(x);
}
async function deep(x) {
  
  B.reply_markup = kg;
  this.replyToSender(x);
}
async function reply(x) {
  B.reply_markup = kg;
  this.replyToSender(x);
}
async function randomJ(x) {
  B.text = x;
  B.reply_markup = kg;
  this.replyToSender(x);
}
async function randomJoke(name, surname) {
  var firstName = name || null;
  var lastName = surname || null;
  var url = "https://api.icndb.com/jokes/random?escape=javascript";
  if (firstName)
    url = url + "&firstName=" + firstName;
  if (lastName)
    url = url + "&lastName=" + lastName;
  return await fetch(url).then(async (r) => {
    r = await r.json();
    r = r.value.joke;
    B.reply_markup = kk;
    return await this.replyToSender(r);
  });
}
function Bot(token, update) {
  this.token = token;
  this.update = update;
  this.handlers = [];
}
Bot.prototype.register = function(handler) {
  this.handlers.push(handler);
};
Bot.prototype.process = function() {
  for (var i in this.handlers) {
    var event = this.handlers[i];
    return event.handle(this);
  }
};
Bot.prototype.request = async function(method, data) {
};
Bot.prototype.replyToSender = function(text) {
  B.text = text;
  if (B.text)
    B.method = "sendMessage";
};
function CommandBus() {
  this.commands = [];
}
CommandBus.prototype.on = function(regexp, callback) {
  this.commands.push({
    "regexp": regexp,
    "callback": callback
  });
};
CommandBus.prototype.handle = function(bot2) {
  for (var i in this.commands) {
    var cmd = this.commands[i];
    var x = JSON.stringify(bot2.update);
    var tokens = cmd.regexp.exec(x);
    if (tokens != null) {
      return cmd.callback.apply(bot2, tokens.splice(1));
    }
  }
  return bot2.replyToSender(tokens);
}

// src/iinl/66o.js
var import_upd = __toESM(require_upd());
var J = ["jirrj", "wo_va", "shas4a", "rul0n", "cokemonn"]
require_console();
var db = require_db();
globalThis.Z = async function(r) {
  try {
    await (0, import_upd.upd)(r);
  } catch (err) {
    console.warn(err);
  }
  // if (J.indexOf(req.from) < 0)
  //   return new Response(console.warn(req), { status: 200 });
  globalThis.v = await db.get(req.from);
  B.chat_id = req.chat;
  if (req.ref) {
    await db.add({ ref: req.ref }, req.from);
  }
    if (req.photo) {
  	var t = ''
  	 if (!v.ref) t += " noRef! "
  	 	if (!v.ll) t += " noLL! "
    B.text = t
    B.method = "sendmessage";
  }
  if (req.photo && v.ref && v.ll) {
  	
    var t = ("%20" + v.ll + "%20" + v.ref + "%20" +  req.caption + "%20").toUpperCase().replace(/ /g, "%20").replace(/,/g, "%20");
    req.width = req.width > 960 ? req.width : 960
    var nn = '/' //`l_y_vtx3zo,x_0.17,y_-100/`
   // nn = ''
req.photo = `https://res.cloudinary.com/o6/image/fetch/w_960/g_north,l_${v.pic},y_-480/b_rgb:f5e6e4,c_fill,co_black,g_north,l_text:roboto%20mono_96_center_bold:${t},w_960/${nn}${req.photo}`
//h
    //req.photo = `https://res.cloudinary.com/o6/image/fetch/w_${req.width}/fl_relative,g_north_west,h_300,l_${v.pic},w_300/b_rgb:f5e6e4,c_fit,co_rgb:21211f,fl_relative,g_north_west,l_text:Yanone%20Kaffeesatz_42_bold_center:${t},w_300,y_300/${nn}${req.photo}`;
    B.text = await fetch(`https://api.imgbb.com/1/upload?key=9245767bac1ebd9783f91024150db0f2&name=${v.ll}&image=${encodeURIComponent(req.photo)}`).then((r2) => r2.json()).then(async (r2) => {
  // console.info(r2)
	    var i = r2.data.id;
      r2 = [  "ibb.co/" + i, "www.google.com/maps?q=" + v.ll].join("\n")
      var o = { id: i, date: Date.now(), ref: v.ref, ll: v.ll, from: req.from, is: 1 };
      await db.put(o, i);
      return r2;
    });
    B.method = "sendmessage";
  }
  if (req.result_id) {
    await db.put({ is: -1 }, req.result_id)
  }
  if (req.location && !req.id && !req.result_id) {
    //B.photo = `https://www.mapquestapi.com/staticmap/v5/map?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&banner=${req.location}|lg-21211f-f5e6e4&type=hyb&zoom=17&size=400,400@2x&locations=${req.location}|circle-lg-21211f-f5e6e4`;
  B.photo = `https://www.mapquestapi.com/staticmap/v5/map?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&type=hyb&zoom=17&size=480,240@2x&locations=${req.location}|circle-lg-21211f-f5e6e4`;

    await fetch(`https://api.cloudinary.com/v1_1/o6/image/upload?upload_preset=o6oooo&file=${encodeURIComponent(B.photo)}`).then((r2) => r2.json()).then(async (r2) => {
      await db.add({ ll: req.location, pic: r2.public_id }, req.from);
    });
	B.reply_markup =   {
  "inline_keyboard": [
    [{
      "text": "L",
        "switch_inline_query": ""
    }, {
      "text": ":RE",
      "switch_inline_query_current_chat": ""
    }]
  ]
}
    B.method = "sendphoto";
  }
  if (req.type == "inline_query") {
    var rrr = await db.list(req.query);
    var l = rrr.length;
    rrr = await rrr.map(({ ref, date, from, ll, id }, o) => ({
      type: "article",
      id,
      title: l - o + " - " + id,
      "description": ref,
      "thumb_url": `https://i.ibb.co/${id}/i.png`,
      "input_message_content": {
        "message_text": [ref, "ibb.co/" + id, "www.google.com/maps?q=" + ll].join("\n")
      }
    }));
    B = {
      method: "answerInlineQuery",
      cache_time: 0,
      is_personal: true,
      inline_query_id: req.id,
      results: rrr
    };
  }
  try {
    if (!B.method && !B.photo && !B.cache_time)
    //console.info(req)
      await bot(req);
  } catch (err) {
    console.warn(err);
  }
  if (req.message_id)
    await fetch(`https://api.telegram.org/bot${TOKEN}/deleteMessage?chat_id=${req.chat}&message_id=${req.message_id}`);
}

// src/index.js
var import_html = __toESM(require_html());

if (typeof L === "undefined")
  globalThis.L = {};
var src_default = {
  async fetch(request, env, ctx) {
    globalThis.B = {};
    if (request.method === "GET")
      return new Response((0, import_html.html)(JSON.stringify(request.cf, null, 4)), { headers: {
        "content-type": "text/html"
      } });
    
    try {
     
      await Z(request);
    } catch (err) {
      console.warn(err);
    }
    
    return new Response(JSON.stringify(B, null, 4), {
      headers: {
        "content-type": "application/json"
      }
    });
  }
};
export {
  src_default as default
};
