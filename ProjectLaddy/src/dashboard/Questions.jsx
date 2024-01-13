import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Divider,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function Questions() {
  const [consentAnswer, setGivenConsent] = useState("yes");
  const [gender, setGender] = useState(null);
  const [commStyle, setCommStyle] = useState(0);
  const [feedbackGiving, setFeedbackGiving] = useState(null);
  const [feedbackReceiving, setFeedbackReceiving] = useState(null);
  const [workingHours, setWorkingHours] = useState(null);
  const [meetingHours, setMeetingHours] = useState(null);
  const [workingApproach, setWorkingApproach] = useState(null);
  const [manageDeadlines, setManageDeadlines] = useState(null);
  const [workConsistency, setWorkConsistency] = useState(null);
  const [timeCommittment, setTimeCommittment] = useState(null);
  const [meetingStyle, setMeetingStyle] = useState(null);
  const [meetingFrequency, setMeetingFrequency] = useState(null);
  const [mistakeHandling, setMistakeHandling] = useState(null);
  const [adaptingComfort, setAdaptingComfort] = useState(null);
  const [effectiveCommunication, setEffectiveCommunication] = useState(null);
  const [initiatingConvo, setInitiatingConvo] = useState(null);
  const [initiatingFrequency, setInitiatingFrequency] = useState(null);
  const [challengePreference, setChallengePreference] = useState(null);
  const [exploringComfort, setExploringComfort] = useState(null);
  const [conflictManagement, setConflictManagement] = useState(null);

  function submitQuestionnaire(e) {
    e.preventDefault();
  }

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
        <div>Major</div>
        <br />
        <TextField id="userMajor" fullWidth />
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>Gender</div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={commStyle}
            name="Question 3"
          >
            <FormControlLabel
              checked={gender == 0}
              onClick={(e) => {
                setGender(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="Male"
            />
            <FormControlLabel
              checked={gender == 1}
              onClick={(e) => {
                setGender(e.target.value);
              }}
              value={1}
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              checked={gender == 0.5}
              onClick={(e) => {
                setGender(e.target.value);
              }}
              value={0.5}
              control={<Radio />}
              label="Other"
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
              checked={feedbackGiving == 0}
              onClick={(e) => {
                setFeedbackGiving(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="Negative feedback"
            />
            <FormControlLabel
              checked={feedbackGiving == 1}
              onClick={(e) => {
                setFeedbackGiving(e.target.value);
              }}
              value={1}
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
              checked={feedbackReceiving == 0}
              onClick={(e) => {
                setFeedbackReceiving(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="Negative feedback"
            />
            <FormControlLabel
              checked={feedbackReceiving == 1}
              onClick={(e) => {
                setFeedbackReceiving(e.target.value);
              }}
              value={1}
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
              checked={workingHours == 0}
              onClick={(e) => {
                setWorkingHours(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="Early Bird"
            />
            <FormControlLabel
              checked={workingHours == 1}
              onClick={(e) => {
                setWorkingHours(e.target.value);
              }}
              value={1}
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
              checked={meetingHours == 0}
              onClick={(e) => {
                setMeetingHours(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="Morning"
            />
            <FormControlLabel
              checked={meetingHours == 1}
              onClick={(e) => {
                setMeetingHours(e.target.value);
              }}
              value={1}
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
              checked={workingApproach == 0}
              onClick={(e) => {
                setWorkingApproach(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="Do first, think later"
            />
            <FormControlLabel
              checked={workingApproach == 1}
              onClick={(e) => {
                setWorkingApproach(e.target.value);
              }}
              value={1}
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
              checked={manageDeadlines == 0}
              onClick={(e) => {
                setManageDeadlines(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="1 - Very poor"
            />
            <FormControlLabel
              checked={manageDeadlines == 0.25}
              onClick={(e) => {
                setManageDeadlines(e.target.value);
              }}
              value={0.25}
              control={<Radio />}
              label="2 - Poor"
            />
            <FormControlLabel
              checked={manageDeadlines == 0.5}
              onClick={(e) => {
                setManageDeadlines(e.target.value);
              }}
              value={0.5}
              control={<Radio />}
              label="3 - Average"
            />
            <FormControlLabel
              checked={manageDeadlines == 0.75}
              onClick={(e) => {
                setManageDeadlines(e.target.value);
              }}
              value={0.75}
              control={<Radio />}
              label="4 - Very good"
            />
            <FormControlLabel
              checked={manageDeadlines == 1}
              onClick={(e) => {
                setManageDeadlines(e.target.value);
              }}
              value={1}
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
              checked={workConsistency == 0}
              onClick={(e) => {
                setWorkConsistency(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="Work consistently"
            />
            <FormControlLabel
              checked={workConsistency == 1}
              onClick={(e) => {
                setWorkConsistency(e.target.value);
              }}
              value={1}
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
              checked={timeCommittment == 0}
              onClick={(e) => {
                setTimeCommittment(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="Less than 2 hours"
            />
            <FormControlLabel
              checked={timeCommittment == 0.2}
              onClick={(e) => {
                setTimeCommittment(e.target.value);
              }}
              value={0.2}
              control={<Radio />}
              label="2-4 hours"
            />
            <FormControlLabel
              checked={timeCommittment == 0.4}
              onClick={(e) => {
                setTimeCommittment(e.target.value);
              }}
              value={0.4}
              control={<Radio />}
              label="4-6 hours"
            />
            <FormControlLabel
              checked={timeCommittment == 0.6}
              onClick={(e) => {
                setTimeCommittment(e.target.value);
              }}
              value={0.6}
              control={<Radio />}
              label="6-8 hours"
            />
            <FormControlLabel
              checked={timeCommittment == 0.8}
              onClick={(e) => {
                setTimeCommittment(e.target.value);
              }}
              value={0.8}
              control={<Radio />}
              label="8-10 hours"
            />
            <FormControlLabel
              checked={timeCommittment == 1}
              onClick={(e) => {
                setTimeCommittment(e.target.value);
              }}
              value={1}
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
              checked={meetingStyle == 0}
              onClick={(e) => {
                setMeetingStyle(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="In Person meetings"
            />
            <FormControlLabel
              checked={meetingStyle == 1}
              onClick={(e) => {
                setMeetingStyle(e.target.value);
              }}
              value={1}
              control={<Radio />}
              label="Online meetings"
            />
            <FormControlLabel
              checked={meetingStyle == 0.5}
              onClick={(e) => {
                setMeetingStyle(e.target.value);
              }}
              value={0.5}
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
              checked={meetingFrequency == 0}
              onClick={(e) => {
                setMeetingFrequency(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="As minimal as possible"
            />
            <FormControlLabel
              checked={meetingFrequency == 0.25}
              onClick={(e) => {
                setMeetingFrequency(e.target.value);
              }}
              value={0.25}
              control={<Radio />}
              label="Once every 2 weeks"
            />
            <FormControlLabel
              checked={meetingFrequency == 0.5}
              onClick={(e) => {
                setMeetingFrequency(e.target.value);
              }}
              value={0.5}
              control={<Radio />}
              label="Once every week"
            />
            <FormControlLabel
              checked={meetingFrequency == 0.75}
              onClick={(e) => {
                setMeetingFrequency(e.target.value);
              }}
              value={0.75}
              control={<Radio />}
              label="Twice a week"
            />
            <FormControlLabel
              checked={meetingFrequency == 1}
              onClick={(e) => {
                setMeetingFrequency(e.target.value);
              }}
              value={1}
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
              checked={mistakeHandling == 0}
              onClick={(e) => {
                setMistakeHandling(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="Keep it to yourself"
            />
            <FormControlLabel
              checked={mistakeHandling == 0.25}
              onClick={(e) => {
                setMistakeHandling(e.target.value);
              }}
              value={0.25}
              control={<Radio />}
              label="PM the person who made the mistake"
            />
            <FormControlLabel
              checked={mistakeHandling == 0.5}
              onClick={(e) => {
                setMistakeHandling(e.target.value);
              }}
              value={0.5}
              control={<Radio />}
              label="PM someone who you trust to correct the mistake"
            />
            <FormControlLabel
              checked={mistakeHandling == 0.75}
              onClick={(e) => {
                setMistakeHandling(e.target.value);
              }}
              value={0.75}
              control={<Radio />}
              label="Openly point it out in the form of constructive criticism"
            />
            <FormControlLabel
              checked={mistakeHandling == 1}
              onClick={(e) => {
                setMistakeHandling(e.target.value);
              }}
              value={1}
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
              checked={adaptingComfort == 0}
              onClick={(e) => {
                setAdaptingComfort(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="1 - Very uncomfortable"
            />
            <FormControlLabel
              checked={adaptingComfort == 0.25}
              onClick={(e) => {
                setAdaptingComfort(e.target.value);
              }}
              value={0.25}
              control={<Radio />}
              label="2 - Mildly uncomfortable"
            />
            <FormControlLabel
              checked={adaptingComfort == 0.5}
              onClick={(e) => {
                setAdaptingComfort(e.target.value);
              }}
              value={0.5}
              control={<Radio />}
              label="3 - More than comfortable"
            />
            <FormControlLabel
              checked={adaptingComfort == 0.75}
              onClick={(e) => {
                setAdaptingComfort(e.target.value);
              }}
              value={0.75}
              control={<Radio />}
              label="4 - Very comfortable"
            />
            <FormControlLabel
              checked={adaptingComfort == 1}
              onClick={(e) => {
                setAdaptingComfort(e.target.value);
              }}
              value={1}
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
              checked={commStyle == 0}
              onClick={(e) => {
                setCommStyle(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="Assertive"
            />
            <FormControlLabel
              checked={commStyle == 0.5}
              onClick={(e) => {
                setCommStyle(e.target.value);
              }}
              value={0.5}
              control={<Radio />}
              label="Collaborative"
            />
            <FormControlLabel
              checked={commStyle == 1}
              onClick={(e) => {
                setCommStyle(e.target.value);
              }}
              value={1}
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
            How important is effective communication within a project group to
            you?
          </div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Question 15"
          >
            <FormControlLabel
              checked={effectiveCommunication == 0}
              onClick={(e) => {
                setEffectiveCommunication(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="1 - Each person just independently does what they're assigned"
            />
            <FormControlLabel
              checked={effectiveCommunication == 0.25}
              onClick={(e) => {
                setEffectiveCommunication(e.target.value);
              }}
              value={0.25}
              control={<Radio />}
              label="2 - Rare communication"
            />
            <FormControlLabel
              checked={effectiveCommunication == 0.5}
              onClick={(e) => {
                setEffectiveCommunication(e.target.value);
              }}
              value={0.5}
              control={<Radio />}
              label="3 - Occasional communication"
            />
            <FormControlLabel
              checked={effectiveCommunication == 0.75}
              onClick={(e) => {
                setEffectiveCommunication(e.target.value);
              }}
              value={0.75}
              control={<Radio />}
              label="4 - Frequent communication"
            />
            <FormControlLabel
              checked={effectiveCommunication == 1}
              onClick={(e) => {
                setEffectiveCommunication(e.target.value);
              }}
              value={1}
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
              checked={initiatingConvo == 0}
              onClick={(e) => {
                setInitiatingConvo(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="1 - Very uncomfortable"
            />
            <FormControlLabel
              checked={initiatingConvo == 0.25}
              onClick={(e) => {
                setInitiatingConvo(e.target.value);
              }}
              value={0.25}
              control={<Radio />}
              label="2 - Mildly uncomfortable"
            />
            <FormControlLabel
              checked={initiatingConvo == 0.5}
              onClick={(e) => {
                setInitiatingConvo(e.target.value);
              }}
              value={0.5}
              control={<Radio />}
              label="3 - Generally comfortable"
            />
            <FormControlLabel
              checked={initiatingConvo == 0.75}
              onClick={(e) => {
                setInitiatingConvo(e.target.value);
              }}
              value={0.75}
              control={<Radio />}
              label="4 - Very comfortable"
            />
            <FormControlLabel
              checked={initiatingConvo == 1}
              onClick={(e) => {
                setInitiatingConvo(e.target.value);
              }}
              value={1}
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
              checked={initiatingFrequency == 0}
              onClick={(e) => {
                setInitiatingFrequency(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="1 - Not at all"
            />
            <FormControlLabel
              checked={initiatingFrequency == 0.25}
              onClick={(e) => {
                setInitiatingFrequency(e.target.value);
              }}
              value={0.25}
              control={<Radio />}
              label="2 - Rarely"
            />
            <FormControlLabel
              checked={initiatingFrequency == 0.5}
              onClick={(e) => {
                setInitiatingFrequency(e.target.value);
              }}
              value={0.5}
              control={<Radio />}
              label="3 - Generally"
            />
            <FormControlLabel
              checked={initiatingFrequency == 0.75}
              onClick={(e) => {
                setInitiatingFrequency(e.target.value);
              }}
              value={0.75}
              control={<Radio />}
              label="4 - Frequently"
            />
            <FormControlLabel
              checked={initiatingFrequency == 1}
              onClick={(e) => {
                setInitiatingFrequency(e.target.value);
              }}
              value={1}
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
              checked={challengePreference == 0}
              onClick={(e) => {
                setChallengePreference(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="Rather do repetitive work that I find easier"
            />
            <FormControlLabel
              checked={challengePreference == 1}
              onClick={(e) => {
                setChallengePreference(e.target.value);
              }}
              value={1}
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
              checked={exploringComfort == 0}
              onClick={(e) => {
                setExploringComfort(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="1 - Not open at all"
            />
            <FormControlLabel
              checked={exploringComfort == 0.25}
              onClick={(e) => {
                setExploringComfort(e.target.value);
              }}
              value={0.25}
              control={<Radio />}
              label="2 - Rarely open"
            />
            <FormControlLabel
              checked={exploringComfort == 0.5}
              onClick={(e) => {
                setExploringComfort(e.target.value);
              }}
              value={0.5}
              control={<Radio />}
              label="3 - Generally open"
            />
            <FormControlLabel
              checked={exploringComfort == 0.75}
              onClick={(e) => {
                setExploringComfort(e.target.value);
              }}
              value={0.75}
              control={<Radio />}
              label="4 - Frequently open"
            />
            <FormControlLabel
              checked={exploringComfort == 1}
              onClick={(e) => {
                setExploringComfort(e.target.value);
              }}
              value={1}
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
              checked={conflictManagement == 0}
              onClick={(e) => {
                setConflictManagement(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="Conflict avoidant"
            />
            <FormControlLabel
              checked={conflictManagement == 1}
              onClick={(e) => {
                setConflictManagement(e.target.value);
              }}
              value={1}
              control={<Radio />}
              label="Conflict confrontational"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Button
        variant="contained"
        onClick={submitQuestionnaire}
        sx={{
          borderRadius: 20,
          fontSize: 10,
          padding: 1.5,
          fontWeight: "bold",
          backgroundImage: "linear-gradient(#B27FC6, #E98356)",
        }}
      >
        Submit Questionnaire
      </Button>
    </div>
  );
}
