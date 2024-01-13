import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Divider,
} from "@mui/material";
import { useState } from "react";

export default function Questions() {
  const [consentAnswer, setGivenConsent] = useState("yes");
  const [commStyle, setCommStyle] = useState("");
  const [feedbackGiving, setFeedbackGiving] = useState("");
  const [feedbackReceiving, setFeedbackReceiving] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [meetingHours, setMeetingHours] = useState("");
  const [workingApproach, setWorkingApproach] = useState("");
  const [manageDeadlines, setManageDeadlines] = useState("");
  const [workConsistency, setWorkConsistency] = useState("");
  const [timeCommittment, setTimeCommittment] = useState("");
  const [meetingStyle, setMeetingStyle] = useState("");
  const [meetingFrequency, setMeetingFrequency] = useState("");
  const [mistakeHandling, setMistakeHandling] = useState("");
  const [adaptingComfort, setAdaptingComfort] = useState("");
  const [effectiveCommunication, setEffectiveCommunication] = useState("");
  const [initiatingConvo, setInitiatingConvo] = useState("");
  const [initiatingFrequency, setInitiatingFrequency] = useState("");
  const [challengePreference, setChallengePreference] = useState("");
  const [exploringComfort, setExploringComfort] = useState("");
  const [conflictManagement, setConflictManagement] = useState("");

  return (
    <div
      style={{
        textAlign: "left",
        color: "black",
      }}
    >
      <div style={{ textAlign: "left" }}>
        <div>
          Do you consent to the collection of personal information by Team LADDY
          via this form to be used in further research and testing for Team
          LADDY's Impact Experience Project on Group Matchmaking?{" "}
        </div>
        <br />
        {/* <fieldset>
          <legend>Select a maintenance drone:</legend>

          <div>
            <input type="radio" id="huey" name="drone" value="huey" checked />
            <label for="huey">Huey</label>
          </div>

          <div>
            <input type="radio" id="dewey" name="drone" value="dewey" />
            <label for="dewey">Dewey</label>
          </div>

          <div>
            <input type="radio" id="louie" name="drone" value="louie" />
            <label for="louie">Louie</label>
          </div>
        </fieldset> */}
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={consentAnswer}
            name="Question 1"
          >
            <FormControlLabel
              checked={consentAnswer == "yes"}
              onClick={(e) => {
                setGivenConsent(e.target.value);
              }}
              value="yes"
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel
              checked={consentAnswer == "no"}
              onClick={(e) => {
                setGivenConsent(e.target.value);
              }}
              value="no"
              control={<Radio />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>
            What is your preferred communication style within a professional
            team or project group?
          </div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={commStyle}
            name="Question 2"
          >
            <FormControlLabel
              checked={commStyle == "assertive"}
              onClick={(e) => {
                setCommStyle(e.target.value);
              }}
              value="assertive"
              control={<Radio />}
              label="Assertive"
            />
            <FormControlLabel
              checked={commStyle == "collaborative"}
              onClick={(e) => {
                setCommStyle(e.target.value);
              }}
              value="collaborative"
              control={<Radio />}
              label="Collaborative"
            />
            <FormControlLabel
              checked={commStyle == "avoidant"}
              onClick={(e) => {
                setCommStyle(e.target.value);
              }}
              value="avoidant"
              control={<Radio />}
              label="Avoidant"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>
            How do you typically give feedback to others?
            {/* (feedforward entails
            providing corrective feedback based on future behavior or
            performance. This method of feedback focuses on behavior that should
            be avoided/continued in the future) */}
          </div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 3"
          >
            <FormControlLabel
              checked={feedbackGiving == "negative"}
              onClick={(e) => {
                setFeedbackGiving(e.target.value);
              }}
              value="negative"
              control={<Radio />}
              label="Negative feedback"
            />
            <FormControlLabel
              checked={feedbackGiving == "positive"}
              onClick={(e) => {
                setFeedbackGiving(e.target.value);
              }}
              value="positive"
              control={<Radio />}
              label="Positive feedback"
            />
            {/* <FormControlLabel
              value="negative_feedforward"
              control={<Radio />}
              label="Negative feed-forward"
            />
            <FormControlLabel
              value="positive_feedforward"
              control={<Radio />}
              label="Positive feed-forward"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>How do you prefer to receive feedback from others?</div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 4"
          >
            <FormControlLabel
              checked={feedbackReceiving == "negative"}
              onClick={(e) => {
                setFeedbackReceiving(e.target.value);
              }}
              value="negative"
              control={<Radio />}
              label="Negative feedback"
            />
            <FormControlLabel
              checked={feedbackReceiving == "positive"}
              onClick={(e) => {
                setFeedbackReceiving(e.target.value);
              }}
              value="positive"
              control={<Radio />}
              label="Positive feedback"
            />
            {/* <FormControlLabel
              value="negative_feedforward"
              control={<Radio />}
              label="Negative feed-forward"
            />
            <FormControlLabel
              value="positive_feedforward"
              control={<Radio />}
              label="Positive feed-forward"
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>Are you an early bird or a night owl?</div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 5"
          >
            <FormControlLabel
              checked={workingHours == "early_bird"}
              onClick={(e) => {
                setWorkingHours(e.target.value);
              }}
              value="early_bird"
              control={<Radio />}
              label="Early Bird"
            />
            <FormControlLabel
              checked={workingHours == "night_owl"}
              onClick={(e) => {
                setWorkingHours(e.target.value);
              }}
              value="night_owl"
              control={<Radio />}
              label="Night owl"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>
            Do you prefer taking meetings in the morning or towards the end of
            the day / evening?
          </div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 6"
          >
            <FormControlLabel
              checked={meetingHours == "morning"}
              onClick={(e) => {
                setMeetingHours(e.target.value);
              }}
              value="morning"
              control={<Radio />}
              label="Morning"
            />
            <FormControlLabel
              checked={meetingHours == "evening_night"}
              onClick={(e) => {
                setMeetingHours(e.target.value);
              }}
              value="evening_night"
              control={<Radio />}
              label="Evening / Night"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>
            Are you more of "Do first, think later" or "Plan first, do later"
            individual?
          </div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 7"
          >
            <FormControlLabel
              checked={workingApproach == "do_first"}
              onClick={(e) => {
                setWorkingApproach(e.target.value);
              }}
              value="do_first"
              control={<Radio />}
              label="Do first, think later"
            />
            <FormControlLabel
              checked={workingApproach == "plan_first"}
              onClick={(e) => {
                setWorkingApproach(e.target.value);
              }}
              value="plan_first"
              control={<Radio />}
              label="Plan first, do later"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>
            On a scale of 1 to 5, where 1 is 'very poor' , and 5 is 'excellent,'
            how would you rate your ability to manage deadlines? Please choose
            only one number that best represents your overall performance.
          </div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 8"
          >
            <FormControlLabel
              checked={manageDeadlines == "very_poor"}
              onClick={(e) => {
                setManageDeadlines(e.target.value);
              }}
              value="very_poor"
              control={<Radio />}
              label="1 - Very poor"
            />
            <FormControlLabel
              checked={manageDeadlines == "poor"}
              onClick={(e) => {
                setManageDeadlines(e.target.value);
              }}
              value="poor"
              control={<Radio />}
              label="2 - Poor"
            />
            <FormControlLabel
              checked={manageDeadlines == "average"}
              onClick={(e) => {
                setManageDeadlines(e.target.value);
              }}
              value="average"
              control={<Radio />}
              label="3 - Average"
            />
            <FormControlLabel
              checked={manageDeadlines == "very_good"}
              onClick={(e) => {
                setManageDeadlines(e.target.value);
              }}
              value="very_good"
              control={<Radio />}
              label="4 - Very good"
            />
            <FormControlLabel
              checked={manageDeadlines == "excellent"}
              onClick={(e) => {
                setManageDeadlines(e.target.value);
              }}
              value="excellent"
              control={<Radio />}
              label="5 - Excellent"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>Do you typically work consistently or in bursts?</div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 9"
          >
            <FormControlLabel
              checked={workConsistency == "consistent"}
              onClick={(e) => {
                setWorkConsistency(e.target.value);
              }}
              value="consistent"
              control={<Radio />}
              label="Work consistently"
            />
            <FormControlLabel
              checked={workConsistency == "burst"}
              onClick={(e) => {
                setWorkConsistency(e.target.value);
              }}
              value="burst"
              control={<Radio />}
              label="Bursts of effort"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>
            How much time are you willing to commit to a group project in a
            week?
          </div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 10"
          >
            <FormControlLabel
              checked={timeCommittment == "less_than_2"}
              onClick={(e) => {
                setTimeCommittment(e.target.value);
              }}
              value="less_than_2"
              control={<Radio />}
              label="Less than 2 hours"
            />
            <FormControlLabel
              checked={timeCommittment == "two_four"}
              onClick={(e) => {
                setTimeCommittment(e.target.value);
              }}
              value="two_four"
              control={<Radio />}
              label="2-4 hours"
            />
            <FormControlLabel
              checked={timeCommittment == "four_six"}
              onClick={(e) => {
                setTimeCommittment(e.target.value);
              }}
              value="four_six"
              control={<Radio />}
              label="4-6 hours"
            />
            <FormControlLabel
              checked={timeCommittment == "six_eight"}
              onClick={(e) => {
                setTimeCommittment(e.target.value);
              }}
              value="six_eight"
              control={<Radio />}
              label="6-8 hours"
            />
            <FormControlLabel
              checked={timeCommittment == "eight_ten"}
              onClick={(e) => {
                setTimeCommittment(e.target.value);
              }}
              value="eight_ten"
              control={<Radio />}
              label="8-10 hours"
            />
            <FormControlLabel
              checked={timeCommittment == "more_than_ten"}
              onClick={(e) => {
                setTimeCommittment(e.target.value);
              }}
              value="more_than_ten"
              control={<Radio />}
              label="More than 10 hours"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>Do you prefer in person meetings, online or a mix of both</div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 11"
          >
            <FormControlLabel
              checked={meetingStyle == "in_person"}
              onClick={(e) => {
                setMeetingStyle(e.target.value);
              }}
              value="in_person"
              control={<Radio />}
              label="In Person meetings"
            />
            <FormControlLabel
              checked={meetingStyle == "online"}
              onClick={(e) => {
                setMeetingStyle(e.target.value);
              }}
              value="online"
              control={<Radio />}
              label="Online meetings"
            />
            <FormControlLabel
              checked={meetingStyle == "hybrid"}
              onClick={(e) => {
                setMeetingStyle(e.target.value);
              }}
              value="hybrid"
              control={<Radio />}
              label="Hybrid meetings"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>How often do you like to hold meetings for a project?</div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 12"
          >
            <FormControlLabel
              checked={meetingFrequency == "minimal"}
              onClick={(e) => {
                setMeetingFrequency(e.target.value);
              }}
              value="minimal"
              control={<Radio />}
              label="As minimal as possible"
            />
            <FormControlLabel
              checked={meetingFrequency == "weekly"}
              onClick={(e) => {
                setMeetingFrequency(e.target.value);
              }}
              value="weekly"
              control={<Radio />}
              label="Once every week"
            />
            <FormControlLabel
              checked={meetingFrequency == "biweekly"}
              onClick={(e) => {
                setMeetingFrequency(e.target.value);
              }}
              value="biweekly"
              control={<Radio />}
              label="Once every 2 weeks"
            />
            <FormControlLabel
              checked={meetingFrequency == "twice_a_week"}
              onClick={(e) => {
                setMeetingFrequency(e.target.value);
              }}
              value="twice_a_week"
              control={<Radio />}
              label="Twice a week"
            />
            <FormControlLabel
              checked={meetingFrequency == "more_than_twice"}
              onClick={(e) => {
                setMeetingFrequency(e.target.value);
              }}
              value="more_than_twice"
              control={<Radio />}
              label="More than twice a week"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>How do you handle mistakes within a project group?</div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 13"
          >
            <FormControlLabel
              checked={mistakeHandling == "private"}
              onClick={(e) => {
                setMistakeHandling(e.target.value);
              }}
              value="private"
              control={<Radio />}
              label="Keep it to yourself"
            />
            <FormControlLabel
              checked={mistakeHandling == "pm"}
              onClick={(e) => {
                setMistakeHandling(e.target.value);
              }}
              value="pm"
              control={<Radio />}
              label="PM the person who made the mistake"
            />
            <FormControlLabel
              checked={mistakeHandling == "pm_third"}
              onClick={(e) => {
                setMistakeHandling(e.target.value);
              }}
              value="pm_third"
              control={<Radio />}
              label="PM someone who you trust to correct the mistake"
            />
            <FormControlLabel
              checked={mistakeHandling == "openly_positive"}
              onClick={(e) => {
                setMistakeHandling(e.target.value);
              }}
              value="openly_positive"
              control={<Radio />}
              label="Openly point it out in the form of constructive criticism"
            />
            <FormControlLabel
              checked={mistakeHandling == "openly_negative"}
              onClick={(e) => {
                setMistakeHandling(e.target.value);
              }}
              value="openly_negative"
              control={<Radio />}
              label="Openly point out the mistake and charge the person to rectify it immediately"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      {/* <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>
            How do you manage stress and maintain composure in high-pressure
            situations?
          </div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="breathe"
              control={<Radio />}
              label="Take deep breaths, assess priorities, and break tasks into manageable steps"
            />
            <FormControlLabel
              value="impulse"
              control={<Radio />}
              label="React impulsively"
            />
            <FormControlLabel
              value="delegate"
              control={<Radio />}
              label="Delegate tasks to others"
            />
            <FormControlLabel
              value="support"
              control={<Radio />}
              label="Seek support from colleagues and communicate openly about challenges"
            />
            <FormControlLabel
              value="openly_negative"
              control={<Radio />}
              label="Openly point it out as a mistake and charge the person to rectify it immediately"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br /> */}
      <div>
        <FormControl>
          <div>
            How comfortable are you in adapting to changing project requirements
            and circumstances?
          </div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 14"
          >
            <FormControlLabel
              checked={adaptingComfort == "very_uncomfortable"}
              onClick={(e) => {
                setAdaptingComfort(e.target.value);
              }}
              value="very_uncomfortable"
              control={<Radio />}
              label="1 - Very uncomfortable"
            />
            <FormControlLabel
              checked={adaptingComfort == "mildly_uncomfortable"}
              onClick={(e) => {
                setAdaptingComfort(e.target.value);
              }}
              value="mildly_uncomfortable"
              control={<Radio />}
              label="2 - Mildly uncomfortable"
            />
            <FormControlLabel
              checked={adaptingComfort == "more_than_comfortable"}
              onClick={(e) => {
                setAdaptingComfort(e.target.value);
              }}
              value="more_than_comfortable"
              control={<Radio />}
              label="3 - More than comfortable"
            />
            <FormControlLabel
              checked={adaptingComfort == "very_comfortable"}
              onClick={(e) => {
                setAdaptingComfort(e.target.value);
              }}
              value="very_comfortable"
              control={<Radio />}
              label="4 - Very comfortable"
            />
            <FormControlLabel
              checked={adaptingComfort == "extremely_comfortable"}
              onClick={(e) => {
                setAdaptingComfort(e.target.value);
              }}
              value="extremely_comfortable"
              control={<Radio />}
              label="5 - Extremely comfortable"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>
            How important is effective communication within a project group to
            you?
          </div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 15"
          >
            <FormControlLabel
              checked={effectiveCommunication == "independent"}
              onClick={(e) => {
                setEffectiveCommunication(e.target.value);
              }}
              value="independent"
              control={<Radio />}
              label="1 - Each person just independently does what they're assigned"
            />
            <FormControlLabel
              checked={effectiveCommunication == "rare_communication"}
              onClick={(e) => {
                setEffectiveCommunication(e.target.value);
              }}
              value="rare_communication"
              control={<Radio />}
              label="2 - Rare communication"
            />
            <FormControlLabel
              checked={effectiveCommunication == "occasional_communication"}
              onClick={(e) => {
                setEffectiveCommunication(e.target.value);
              }}
              value="occasional_communication"
              control={<Radio />}
              label="3 - Occasional communication"
            />
            <FormControlLabel
              checked={effectiveCommunication == "frequent_communication"}
              onClick={(e) => {
                setEffectiveCommunication(e.target.value);
              }}
              value="frequent_communication"
              control={<Radio />}
              label="4 -Frequent communication"
            />
            <FormControlLabel
              checked={effectiveCommunication == "constant_communication"}
              onClick={(e) => {
                setEffectiveCommunication(e.target.value);
              }}
              value="constant_communication"
              control={<Radio />}
              label="5 - Constant communication throughout duration of project"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>
            How comfortable are you in initiating and maintaining professional
            conversations with colleagues or collaborators?
          </div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 16"
          >
            <FormControlLabel
              checked={initiatingConvo == "very_uncomfortable"}
              onClick={(e) => {
                setInitiatingConvo(e.target.value);
              }}
              value="very_uncomfortable"
              control={<Radio />}
              label="1 - Very uncomfortable"
            />
            <FormControlLabel
              checked={initiatingConvo == "mildly_uncomfortable"}
              onClick={(e) => {
                setInitiatingConvo(e.target.value);
              }}
              value="mildly_uncomfortable"
              control={<Radio />}
              label="2 - Mildly uncomfortable"
            />
            <FormControlLabel
              checked={initiatingConvo == "more_than_comfortable"}
              onClick={(e) => {
                setInitiatingConvo(e.target.value);
              }}
              value="more_than_comfortable"
              control={<Radio />}
              label="3 - More than comfortable"
            />
            <FormControlLabel
              checked={initiatingConvo == "very_comfortable"}
              onClick={(e) => {
                setInitiatingConvo(e.target.value);
              }}
              value="very_comfortable"
              control={<Radio />}
              label="4 - Very comfortable"
            />
            <FormControlLabel
              checked={initiatingConvo == "extremely_comfortable"}
              onClick={(e) => {
                setInitiatingConvo(e.target.value);
              }}
              value="extremely_comfortable"
              control={<Radio />}
              label="5 - Extremely comfortable"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>
            How often do you initiate communication or discussions within a
            project group?
          </div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 17"
          >
            <FormControlLabel
              checked={initiatingFrequency == "not_at_all"}
              onClick={(e) => {
                setInitiatingFrequency(e.target.value);
              }}
              value="not_at_all"
              control={<Radio />}
              label="1 - Not at all"
            />
            <FormControlLabel
              checked={initiatingFrequency == "rarely"}
              onClick={(e) => {
                setInitiatingFrequency(e.target.value);
              }}
              value="rarely"
              control={<Radio />}
              label="2 - Rarely"
            />
            <FormControlLabel
              checked={initiatingFrequency == "more_often_than_not"}
              onClick={(e) => {
                setInitiatingFrequency(e.target.value);
              }}
              value="more_often_than_not"
              control={<Radio />}
              label="3 - More often than not"
            />
            <FormControlLabel
              checked={initiatingFrequency == "frequently"}
              onClick={(e) => {
                setInitiatingFrequency(e.target.value);
              }}
              value="frequently"
              control={<Radio />}
              label="4 - Frequently"
            />
            <FormControlLabel
              checked={initiatingFrequency == "always_open"}
              onClick={(e) => {
                setInitiatingFrequency(e.target.value);
              }}
              value="always_open"
              control={<Radio />}
              label="5 - Always open"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>
            Do you prefer challenges and projects that require creative and
            critical thinking?
          </div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 18"
          >
            <FormControlLabel
              checked={challengePreference == "repetitive_easy"}
              onClick={(e) => {
                setChallengePreference(e.target.value);
              }}
              value="repetitive_easy"
              control={<Radio />}
              label="Rather do repetitive work that I find easier"
            />
            <FormControlLabel
              checked={challengePreference == "challenging"}
              onClick={(e) => {
                setChallengePreference(e.target.value);
              }}
              value="challenging"
              control={<Radio />}
              label="Give me a challenge"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>
            How open are you to exploring new ideas, approaches, and experiences
            in your professional work?
          </div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 19"
          >
            <FormControlLabel
              checked={exploringComfort == "not_open_at_all"}
              onClick={(e) => {
                setExploringComfort(e.target.value);
              }}
              value="not_open_at_all"
              control={<Radio />}
              label="1 - Not open at all"
            />
            <FormControlLabel
              checked={exploringComfort == "rarely_open"}
              onClick={(e) => {
                setExploringComfort(e.target.value);
              }}
              value="rarely_open"
              control={<Radio />}
              label="2 - Rarely open"
            />
            <FormControlLabel
              checked={exploringComfort == "more_often_than_not"}
              onClick={(e) => {
                setExploringComfort(e.target.value);
              }}
              value="more_often_than_not"
              control={<Radio />}
              label="3 - More often than not open"
            />
            <FormControlLabel
              checked={exploringComfort == "frequently_open"}
              onClick={(e) => {
                setExploringComfort(e.target.value);
              }}
              value="frequently_open"
              control={<Radio />}
              label="4 - Frequently open"
            />
            <FormControlLabel
              checked={exploringComfort == "always_open"}
              onClick={(e) => {
                setExploringComfort(e.target.value);
              }}
              value="always_open"
              control={<Radio />}
              label="5 - Always open"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>
            Are you comfortable handling conflicts and disagreements within a
            project group or would you rather someone else?
          </div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 20"
          >
            <FormControlLabel
              checked={conflictManagement == "uncomfortable_deescalating"}
              onClick={(e) => {
                setConflictManagement(e.target.value);
              }}
              value="uncomfortable_deescalating"
              control={<Radio />}
              label="Conflict avoidant"
            />
            <FormControlLabel
              checked={conflictManagement == "comfortable_deescalating"}
              onClick={(e) => {
                setConflictManagement(e.target.value);
              }}
              value="comfortable_deescalating"
              control={<Radio />}
              label="Conflict Confrontational"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}
