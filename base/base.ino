// Variables
int delayValue = 500;

void setup() {
  Serial.begin(9600);
  
  pinMode(8, INPUT);
  pinMode(9, INPUT);
  pinMode(10, INPUT);
  pinMode(11, INPUT);
  
  digitalWrite(8, HIGH);
  digitalWrite(9, HIGH);
  digitalWrite(10, HIGH);
  digitalWrite(11, HIGH);
}

void loop() {
  if (!digitalRead(8)) {
    sendMeat();
  } else if (!digitalRead(9)) {
    sendFish();
  } else if (!digitalRead(10)) {
    sendVegetarian();
  } else if (!digitalRead(11)) {
    sendDiet();
  }
}

void sendMeat() {
  Serial.println(0);
  delay(delayValue);
}

void sendFish() {
  Serial.println(1);
  delay(delayValue);
}

void sendVegetarian() {
  Serial.println(2);
  delay(delayValue);
}

void sendDiet() {
  Serial.println(3);
  delay(delayValue);
}
