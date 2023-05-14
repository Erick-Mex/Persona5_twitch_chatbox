// Mi progreso: https://rretta.online/elephant/exodia.htm
// Para el que quiera jugar: https://rretta.online/elephant/
const ChatBox = ({ text = "hola" }) => {
  let font_size = 16;
  if (text.length > 25) {
    font_size -= text.length / 25;
  }

  return (
    <div clasName="wrapper">
      <svg className="container" xmlns="http://www.w3.org/2000/svg" width={500} height={170}>
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
          d="M164.508 8.925h307.496v165.511H164.508z"
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
          style={{
            fontSize: font_size,
            whiteSpace: "pre",
            shapeInside: "url(#b)",
            fill: "#fff",
            wordWrap: "break-word"
          }}
        >
          <tspan x={168.986} y={57.324}>
            {text}
          </tspan>
        </text>
      </svg>
      <svg>
        <path
          d="M164.508 8.925h307.496v165.511H164.508z"
          style={{
            fill: "#000"
          }}
          transform="skewX(-21.731) scale(1 .92893)"
        />
      </svg>
    </div>
  );
};

export default ChatBox;
