import "./App.css";
// import "./styles.css";

const skillList = [
  { name: "HTML", color: "green", level: "intermidiate" },
  { name: "CSS", color: "yellow", level: "baby" },
  { name: "NodeJS", color: "blue", level: "intermidiate" },
  { name: "ExpressJS", color: "red", level: "intermidiate" },
  { name: "ReactJS", color: "orange", level: "master" },
  { name: "NextJS", color: "pink", level: "intermidiate" },
  { name: "MongoDB", color: "gray", level: "baby" },
  { name: "SQL", color: "brown", level: "master" },
];

function Avatar() {
  return (
    <div className="avt">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnBMRpeTZMe5Eor3OaVopPi5N0Em-obWJsKQ&s"
        alt="avt"
      />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Jennie Kim</h1>
      <div className="skillText">
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora
          suscipit quibusdam quo? Impedit et hic exercitationem modi, incidunt
          alias enim quis quos, neque ut saepe assumenda, quidem esse velit.
        </h5>
      </div>
    </div>
  );
}

function Skill({ skill }) {
  return (
    <div className="skillList" style={{ backgroundColor: skill.color }}>
      <p className={`skill ${skill.color} ${skill.level}`}>{skill.name}</p>
      <span>
        {skill.level === "intermidiate"
          ? "👱"
          : skill.level === "master"
          ? "👨"
          : "👶"}
      </span>
    </div>
  );
}

function SkillList() {
  const skills = skillList;
  const skillNum = skills.length;
  return (
    <div>
      <Intro />
      {skillNum > 0 ? (
        <div className="skills">
          {skills.map((element) => {
            return <Skill key={element.name} skill={element} />;
          })}
        </div>
      ) : (
        <p>My skills will be updated later!</p>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Avatar />
      <SkillList />
    </div>
  );
}
