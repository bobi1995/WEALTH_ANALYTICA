import React, { useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";

const CALENDAR_ID =
  "628496264326-8k8kd103aps2hottiri1q6qqgdkf2l98.apps.googleusercontent.com";
const API_KEY = "AIzaSyDKrJKYOJ507vkFJQgLfPO_PZvA9Noox6U";
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

const WACalendar = () => {
  const localizer = momentLocalizer(moment);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
        //setAlertMessage("Wrong username or password");
      });
  }, []);
  return <Calendar localizer={localizer} events={[]} />;
};

export default WACalendar;
