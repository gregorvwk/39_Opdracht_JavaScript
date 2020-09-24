const idea = document.getElementById("idea");
const button = document.getElementById("gen_button");
const jokes = document.getElementById("dadjokes");
const dadjokesBtn = document.getElementById("dadjokes_button");

async function getData() {
  try {
    const res = await fetch("https://itsthisforthat.com/api.php?json", {
      method: "GET",
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

const data = async () => {
  const res = await getData();
  console.log(res);
  console.log("So, Basically, It's like a " + res.this + " for " + res.that);
  const ideaText =
    "So, Basically, It's like a " + res.this + " for " + res.that;
  const pTag = document.createElement("p");
  pTag.append(ideaText);
  idea.append(pTag);
};

async function getDadData() {
  try {
    const resdad = await fetch(
      "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes",
      {
        method: "GET",
      }
    );
    return await resdad.json();
  } catch (error) {
    console.log(error);
  }
}

const dadData = async () => {
  const restDad = await getDadData();
  console.log(restDad);
  const dadText = restDad.setup + " " + restDad.punchline;
  const pTag = document.createElement("p");
  pTag.append(dadText);
  jokes.append(pTag);
};

dadjokesBtn.addEventListener("click", function () {
  jokes.innerHTML = "";
  dadData();
});

button.addEventListener("click", function () {
  idea.innerHTML = "";
  data();
});
