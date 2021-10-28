"use strict";

const formatDigit = (digit) => `0${digit}`.slice(-2);

const update = (time) => {
  const seconds = document.getElementById("sec");
  const minutes = document.getElementById("min");
  const hours = document.getElementById("hours");
  const days = document.getElementById("days");

  const amountSec = time % 60;
  const amountMin = Math.floor((time % (60 * 60)) / 60);
  const amountHours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
  const amountDays = Math.floor(time / (60 * 60 * 24));

  seconds.textContent = formatDigit(amountSec);
  minutes.textContent = formatDigit(amountMin);
  hours.textContent = formatDigit(amountHours);
  days.textContent = formatDigit(amountDays);
};

const countdown = (time) => {
  const stopCount = () => clearInterval(id);

  const count = () => {
    if (time === 0) {
      stopCount();
    }
    update(time);
    time--;
  };
  const id = setInterval(count, 1000);
};

const timeLeft = () => {
  const eventDate = new Date("2021-10-29 20:00:00");
  const today = Date.now();

  return Math.floor((eventDate - today) / 1000);
};

countdown(timeLeft());
