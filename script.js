// (() => {
//   const inputEl = document.getElementById("js-input");
//   inputEl.addEventListener("change", () => {
//     console.log("Change evengt");
//   });

// })();
const useDebounce = (callbackFn, time = 500) => {
  let timer = null;
  return function (...event) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callbackFn(...event);
    }, time);
  };
};

const handleChange = useDebounce((element, event) => {
  console.log(this);
  console.log("handle Change function", element, event.target.value);
}, 1000);

const handleImageChange = async (element, event) => {
  const image = await getBase64(element.files[0]);
  console.log(image);
};

function getBase64(file) {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
      reject(error);
    };
  });
}

const handleSubmit = (element, event) => {
  const formResponse = new FormData(element);
  // for (const [name, value] of formResponse) {
  //   console.log(`Name: ${name}, Value: ${value}`);
  //   formData[name] = value;
  // }
  const formData = Object.fromEntries(formResponse);

  console.log(formData);
  return false;
};

const user = {
  first: "First",
  second: "Second",
  role: "USER",
  gender: "female",
  section: "C",
};

const form = document.forms["js-user-form"];
for (var i = 0; i < form.elements.length; i++) {
  if (user[form.elements[i].name] && form.elements[i].type !== "radio") {
    form.elements[i].value = user[form.elements[i].name];
  } 
  else if (
    form.elements[i].type === "radio" &&
    user[form.elements[i].name] === form.elements[i].value
  ) {
    form.elements[i].checked = true;
  }
}
