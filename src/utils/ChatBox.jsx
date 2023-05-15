// Mi progreso: https://rretta.online/elephant/exodia.htm
// Para el que quiera jugar: https://rretta.online/elephant/

// Cosas que voy asumir
// NO haras biblias (Mucho Texto yoda)
// NO escribira un texto pegado (sin espacios)
import style from "./ChatBox.module.css";

const TextParser = (msg) => {
  const limit = 20;
  const words = msg.split(" ");

  let line_sentence = [];
  let line = [];
  let len_line = 0;

  if (msg.length < limit) {
    line.push(msg);
  } else {
    words.forEach((word) => {
      if (len_line + word.length > limit) {
        len_line = 0;
        line.push(line_sentence.join(" "));
        line_sentence = [];
        line_sentence.push(word);
      } else {
        len_line += word.length;
        line_sentence.push(word);
      }
    });
    line.push(line_sentence.join(" "));
  }
  return line;
};

const ChatBox = ({ msg }) => {
  //x = 500
  //y = 170
  const origin_X = 165;
  const origin_Y = 25;
  const width_chatbox = 500;
  const height_chatbox = 150;
  const sentences = TextParser(msg);

  return (
    <div className={style.container}>
      {/* path */}
      {/* M[SI] [pos_vertical] h[width] v[height] H[II]z*/}
      <svg
        className="container"
        xmlns="http://www.w3.org/2000/svg"
        width={width_chatbox}
        height={height_chatbox}
      >
        <defs>
          <path id="b" d="M168.986 42.726h228.995v80.652H168.986z" />
        </defs>
        <path
          d="M147.321.905h352.565L421.3 168.878H79.131Z"
          style={{
            fill: "#fff",
            strokeWidth: 0.444291,
          }}
        />
        <path
          d="M164.508 8.925h307.496v145.511H164.508z"
          // d={`M164.508 ${38}h${width_chatbox-origin_X-15}v${100}H164.508z`}
          style={{
            fill: "#000",
            strokeWidth: 0.418081,
          }}
          transform="skewX(-21.731) scale(1 .92893)"
        />
        <path
          d="m136.855 42.488-30.64 21.886-15.047-25.99-91.373 101.77 76.327-29 6.84 11.764 30.366-8.754z"
          style={{
            fill: "#fff",
            strokeWidth: 0.40295,
          }}
        />
        <path
          d="m145.883 50.968-44.319 31.188-14.773-27.357-56.356 64.563L82.414 98.57l8.207 12.585 37.206-10.396z"
          style={{
            fill: "#000",
            strokeWidth: 0.40295,
          }}
        />
        <text
          xmlSpace="preserve"
          x={origin_X}
          y={origin_Y}
          style={{
            whiteSpace: "pre",
            shapeInside: "url(#b)",
            fill: "#fff",
          }}
        >
          {sentences.map((line, index) => {
            return (
              <tspan key={index} x={origin_X} dy="1em">
                {line}
              </tspan>
            );
          })}
        </text>
      </svg>
    </div>
  );
};

export default ChatBox;
