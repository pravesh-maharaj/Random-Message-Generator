//1.create object of string arrays to store messages

const messages = [
  "Well done",
  "Keep up the good work",
  "Failure is a stepping stone to success",
  "It is better to try and fails than fail to try",
  "Dream big, Work hard",
  "Follow your passion and success will follow you",
  "Belive in yourself, that's what matters",
];

//2.create a function to ramdomaly select a message
const randomNumber = () => {
  return Math.floor(Math.random() * 7 + 1);
};

//console.log(randomNumber());

//display the message
//display the message based on the randomNumber()
const generateMessage = (num) => {
  console.log(num);
  switch (num) {
    case 1:
      return messages[0];
      break;
    case 2:
      return messages[1];
      break;
    case 3:
      return messages[2];
      break;
    case 4:
      return messages[3];
      break;
    case 5:
      return messages[4];
      break;
    case 6:
      return messages[5];
      break;
    case 7:
      return messages[6];
      break;
    default:
      return "Have a blessed day";
  }
};

//test the generateMessage function
console.log(generateMessage(7));
