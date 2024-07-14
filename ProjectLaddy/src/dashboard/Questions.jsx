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
import axios from "axios";

export default function Questions({
  startMatching,
  closeQuestionnaire,
  activeClass,
  userData,
}) {
  const [consentAnswer, setConsentAnswer] = useState("yes");
  const [gender, setGender] = useState(null);
  const [university, setUniversity] = useState(null);
  const [major, setMajor] = useState("");
  const [secondMajor, setSecondMajor] = useState("");
  const [brainstorming, setBrainstorming] = useState(null);
  const [feedbackGiving, setFeedbackGiving] = useState(null);
  const [feedbackReceiving, setFeedbackReceiving] = useState(null);
  const [workingHours, setWorkingHours] = useState(null);
  const [meetingHours, setMeetingHours] = useState(null);
  const [workingApproach, setWorkingApproach] = useState(null);
  const [manageDeadlines, setManageDeadlines] = useState(null);
  const [workConsistency, setWorkConsistency] = useState(null);
  const [meetingStyle, setMeetingStyle] = useState(null);
  const [meetingFrequency, setMeetingFrequency] = useState(null);
  const [adaptingComfort, setAdaptingComfort] = useState(null);
  const [effectiveCommunication, setEffectiveCommunication] = useState(null);
  const [initiatingConvo, setInitiatingConvo] = useState(null);
  const [initiatingFrequency, setInitiatingFrequency] = useState(null);
  const [challengePreference, setChallengePreference] = useState(null);
  const [exploringComfort, setExploringComfort] = useState(null);
  const [conflictManagement, setConflictManagement] = useState(null);
  const [stressManagement, setStressManagement] = useState(null);
  const [idealGroupSize, setIdealGroupSize] = useState(null);
  const [hangoutActivities, setHangoutActivities] = useState(null);

  const URL = "https://iex-backend.onrender.com";

  function submitQuestionnaire(e) {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: "Bearer YOUR_TOKEN",
      },
    };

    const heteroWeights = [
      gender,
      adaptingComfort,
      initiatingConvo,
      initiatingFrequency,
      conflictManagement,
    ];

    const homoWeights = [
      feedbackGiving,
      feedbackReceiving,
      workingHours,
      meetingHours,
      workingApproach,
      manageDeadlines,
      workConsistency,
      meetingStyle,
      meetingFrequency,
      effectiveCommunication,
      challengePreference,
      exploringComfort,
      stressManagement,
      idealGroupSize,
      hangoutActivities,
    ];

    const feedback = [
      feedbackGiving,
      feedbackReceiving,
    ];

    const combinedArr = [
      activeClass,
      userData.id,
      consentAnswer,
      major,
      secondMajor,
      homoWeights,
      heteroWeights,
      feedback,
    ];

    console.log("USER_ID", userData.id);
    startMatching(true);
    closeQuestionnaire();

    combinedArr.includes(null)
      ? alert("Please answer all questions")
      : axios
          .post(URL + "/questiondata", combinedArr, config)
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              startMatching();
              closeQuestionnaire();
            } else {
              alert("Submission error");
            }
          })
          .catch((err) => {
            console.log(err);
          });
  }

  return (
    <div
      style={{
        textAlign: "left",
        color: "black",
      }}
    >
      <div style={{ textAlign: "left", fontWeight: "bold" }}>
        <div>Please note that ALL questions are required</div>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <div>
          Do you consent to the collection of personal information by Team LADDY
          via this form to be used in further research and testing for Team
          LADDY's Impact Experience Project on Group Matchmaking?{" "}
        </div>
        <br />
        <FormControl>
          <RadioGroup
            aria-labelledby="consent-radio-group-label"
            value={consentAnswer}
            name="consent"
            onChange={(e) => setConsentAnswer(e.target.value)}
          >
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel
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
        <div>Name</div>
        <br />
        <TextField id="userName" fullWidth />
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>Gender</div>
          <br />
          <RadioGroup
            aria-labelledby="gender-radio-group-label"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel
              value="Male"
              control={<Radio />}
              label="Male"
            />
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="Other"
              control={<Radio />}
              label="Other"
            />
            <FormControlLabel
              value="Prefer not to say"
              control={<Radio />}
              label="Prefer not to say"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>University</div>
          <br />
          <RadioGroup
            aria-labelledby="university-radio-group-label"
            name="university"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          >
            <FormControlLabel
              value="NUS"
              control={<Radio />}
              label="NUS"
            />
            <FormControlLabel
              value="SMU"
              control={<Radio />}
              label="SMU"
            />
            <FormControlLabel
              value="NTU"
              control={<Radio />}
              label="NTU"
            />
            <FormControlLabel
              value="SIM"
              control={<Radio />}
              label="SIM"
            />
            <FormControlLabel
              value="SUSS"
              control={<Radio />}
              label="SUSS"
            />
            <FormControlLabel
              value="Others/Exchange"
              control={<Radio />}
              label="Others/Exchange"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <div>Major (Fully spelled out)</div>
        <br />
        <TextField
          id="userMajor"
          fullWidth
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        />
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <div>2nd Major/Degree (if applicable)</div>
        <br />
        <TextField
          id="userSecondMajor"
          fullWidth
          value={secondMajor}
          onChange={(e) => setSecondMajor(e.target.value)}
        />
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      {/* Repeat the University question */}
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>IEX Topic Interest</div>
          <br />
          <RadioGroup
            aria-labelledby="university-radio-group-label"
            name="university"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          >
            <FormControlLabel
              value="Waste Management in Bandung"
              control={<Radio />}
              label="Waste Management in Bandung"
            />
            <FormControlLabel
              value="Social Design as Worldmaking in Singapore"
              control={<Radio />}
              label="Social Design as Worldmaking in Singapore"
            />
            <FormControlLabel
              value="Bajautopic in Sabah"
              control={<Radio />}
              label="Bajautopia in Sabah"
            />
            <FormControlLabel
              value="Tourist Development in Thailand"
              control={<Radio />}
              label="Tourist Development in Thailand"
            />
            <FormControlLabel
              value="Inclusion in Education"
              control={<Radio />}
              label="Inclusion in Education"
            />
            <FormControlLabel
              value="100% Housing"
              control={<Radio />}
              label="100% Housing"
            />
            <FormControlLabel
              value="Digital Documentation of Indonesian Arts Communities"
              control={<Radio />}
              label="Digital Documentation of Indonesian Arts Communities"
            />
            <FormControlLabel
              value="Communities and Heritage Conservation"
              control={<Radio />}
              label="Communities and Heritage Conservation"
            />
            <FormControlLabel
              value="Postconflict Cambodia"
              control={<Radio />}
              label="Postconflict Cambodia"
            />
            <FormControlLabel
              value="Education (Innov-Ed) in Vietnam"
              control={<Radio />}
              label="Education (Innov-Ed) in Vietnam"
            />
            <FormControlLabel
              value="Self-help + Communities"
              control={<Radio />}
              label="Self-help + Communities"
            />
            <FormControlLabel
              value="Project Chiang Mai"
              control={<Radio />}
              label="Project Chiang Mai"
            />
            <FormControlLabel
              value="Gender Matters Everyday"
              control={<Radio />}
              label="Gender Matters Everyday"
            />
            <FormControlLabel
              value="Inclusive Research for Social Change"
              control={<Radio />}
              label="Inclusive Research for Social Change"
            />
            <FormControlLabel
              value="Rohingya Refugees in Malaysia"
              control={<Radio />}
              label="Rohingya Refugees in Malaysia"
            />
            <FormControlLabel
              value="Farming in an Urban Nation"
              control={<Radio />}
              label="Farming in an Urban Nation"
            />
            <FormControlLabel
              value="Bamboo Differences - Philippines"
              control={<Radio />}
              label="Bamboo Differences - Philippines"
            />
            <FormControlLabel
              value="The Practical Realities of Well-Being"
              control={<Radio />}
              label="The Practical Realities of Well-Being"
            />
            <FormControlLabel
              value="Technology for Social Good"
              control={<Radio />}
              label="Technology for Social Good"
            />
            <FormControlLabel
              value="Let's Green this Little Red Dot!"
              control={<Radio />}
              label="Let's Green this Little Red Dot!"
            />
            <FormControlLabel
              value="Environmental and Community Impact - Cambodia"
              control={<Radio />}
              label="Environmental and Community Impact - Cambodia"
            />
            <FormControlLabel
              value="Digital Communities"
              control={<Radio />}
              label="Digital Communities"
            /> 
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>As the meeting starts, how would you suggest initiating the brainstorming session?</div>
          <br />
          <RadioGroup
            aria-labelledby="brainstorming-radio-group-label"
            name="brainstorming"
            value={brainstorming}
            onChange={(e) => setBrainstorming(e.target.value)}
          >
            <FormControlLabel
              value="Start the discussion off by sharing a few of your ideas; let’s start with those and see what everyone thinks"
              control={<Radio />}
              label="Start the discussion off by sharing a few of your ideas; let’s start with those and see what everyone thinks"
            />
            <FormControlLabel
              value="Let’s gather everyone's ideas first and then discuss them one by one."
              control={<Radio />}
              label="Let’s gather everyone's ideas first and then discuss them one by one."
            />
            <FormControlLabel
              value="Wait for others to start the discussion and listen to them first before sharing your ideas."
              control={<Radio />}
              label="Wait for others to start the discussion and listen to them first before sharing your ideas."
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>One of your team members consistently delivers high-quality work but missed a few deadlines. How do you provide feedback?</div>
          <br />
          <RadioGroup
            aria-labelledby="feedback-giving-radio-group-label"
            name="feedbackGiving"
            value={feedbackGiving}
            onChange={(e) => setFeedbackGiving(e.target.value)}
          >
            <FormControlLabel
              value="Focus on the missed deadlines and the need to adhere to the project timeline."
              control={<Radio />}
              label="Focus on the missed deadlines and the need to adhere to the project timeline."
            />
            <FormControlLabel
              value="Praise their high-quality work without mentioning the missed deadlines."
              control={<Radio />}
              label="Praise their high-quality work without mentioning the missed deadlines."
            />
            <FormControlLabel
              value="Suggest future strategies for meeting deadlines without focusing on past mistakes."
              control={<Radio />}
              label="Suggest future strategies for meeting deadlines without focusing on past mistakes."
            />
            <FormControlLabel
              value="Highlight their high-quality work first and then discuss the missed deadlines, suggesting ways to improve time management."
              control={<Radio />}
              label="Highlight their high-quality work first and then discuss the missed deadlines, suggesting ways to improve time management."
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>During your feedback session, your team leader points out that while your work quality is excellent, you missed a few deadlines. How would you prefer to receive this feedback?</div>
          <br />
          <RadioGroup
            aria-labelledby="feedback-receiving-radio-group-label"
            name="feedbackReceiving"
            value={feedbackReceiving}
            onChange={(e) => setFeedbackReceiving(e.target.value)}
          >
            <FormControlLabel
              value="Just be direct with me and focus on the missed deadlines and the need for punctuality."
              control={<Radio />}
              label="Just be direct with me and focus on the missed deadlines and the need for punctuality."
            />
            <FormControlLabel
              value="Praise my work quality without dwelling too much on the deadlines."
              control={<Radio />}
              label="Praise my work quality without dwelling too much on the deadlines."
            />
            <FormControlLabel
              value="Have a conversation with me about future strategies for meeting deadlines without focusing on past mistakes."
              control={<Radio />}
              label="Have a conversation with me about future strategies for meeting deadlines without focusing on past mistakes."
            />
            <FormControlLabel
              value="Highlight the quality of my work first and then discuss the missed deadlines with suggestions for improvement."
              control={<Radio />}
              label="Highlight the quality of my work first and then discuss the missed deadlines with suggestions for improvement."
            />
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
            aria-labelledby="working-hours-radio-group-label"
            name="workingHours"
            value={workingHours}
            onChange={(e) => setWorkingHours(e.target.value)}
          >
            <FormControlLabel
              value="Early Bird"
              control={<Radio />}
              label="Early Bird"
            />
            <FormControlLabel
              value="Night Owl"
              control={<Radio />}
              label="Night Owl"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>Do you prefer taking meetings in the morning or towards the end of the day/evening?</div>
          <br />
          <RadioGroup
            aria-labelledby="meeting-hours-radio-group-label"
            name="meetingHours"
            value={meetingHours}
            onChange={(e) => setMeetingHours(e.target.value)}
          >
            <FormControlLabel
              value="Morning"
              control={<Radio />}
              label="Morning"
            />
            <FormControlLabel
              value="Evening/Night"
              control={<Radio />}
              label="Evening/Night"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>You have a tight deadline to develop a new research presentation. How would you prefer to start the project?</div>
          <br />
          <RadioGroup
            aria-labelledby="working-approach-radio-group-label"
            name="workingApproach"
            value={workingApproach}
            onChange={(e) => setWorkingApproach(e.target.value)}
          >
            <FormControlLabel
              value="Jump right into research and adjust as needed along the way."
              control={<Radio />}
              label="Jump right into research and adjust as needed along the way."
            />
            <FormControlLabel
              value="Quickly outline a rough plan and then start researching."
              control={<Radio />}
              label="Quickly outline a rough plan and then start researching."
            />
            <FormControlLabel
              value="Create a detailed plan before starting any research."
              control={<Radio />}
              label="Create a detailed plan before starting any research."
            />
            <FormControlLabel
              value="Thoroughly plan every detail and follow the plan closely."
              control={<Radio />}
              label="Thoroughly plan every detail and follow the plan closely."
            />
            <FormControlLabel
              value="Spend significant time on planning and ensure all possible issues are considered before starting."
              control={<Radio />}
              label="Spend significant time on planning and ensure all possible issues are considered before starting."
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>You are juggling several tasks, each with its own deadline. Some tasks are interdependent, requiring careful scheduling to ensure timely completion of the overall project. How do you handle multiple tasks with overlapping deadlines?</div>
          <br />
          <RadioGroup
            aria-labelledby="manage-deadlines-radio-group-label"
            name="manageDeadlines"
            value={manageDeadlines}
            onChange={(e) => setManageDeadlines(e.target.value)}
          >
            <FormControlLabel
              value="I prefer to complete each task close to or just before its deadline."
              control={<Radio />}
              label="I prefer to complete each task close to or just before its deadline."
            />
            <FormControlLabel
              value="I finish tasks with a small buffer before each deadline."
              control={<Radio />}
              label="I finish tasks with a small buffer before each deadline."
            />
            <FormControlLabel
              value="I manage to complete tasks well before their deadlines."
              control={<Radio />}
              label="I manage to complete tasks well before their deadlines."
            />
            <FormControlLabel
              value="I usually complete tasks quite early, ensuring a comfortable buffer before deadlines."
              control={<Radio />}
              label="I usually complete tasks quite early, ensuring a comfortable buffer before deadlines."
            />
            <FormControlLabel
              value="I finish tasks almost immediately after they are assigned."
              control={<Radio />}
              label="I finish tasks almost immediately after they are assigned."
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
            aria-labelledby="work-consistency-radio-group-label"
            name="workConsistency"
            value={workConsistency}
            onChange={(e) => setWorkConsistency(e.target.value)}
          >
            <FormControlLabel
              value="Works consistently"
              control={<Radio />}
              label="Works consistently"
            />
            <FormControlLabel
              value="In bursts of effort"
              control={<Radio />}
              label="In bursts of effort"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>Do you prefer in-person meetings, online meetings, or a mix of both?</div>
          <br />
          <RadioGroup
            aria-labelledby="meeting-style-radio-group-label"
            name="meetingStyle"
            value={meetingStyle}
            onChange={(e) => setMeetingStyle(e.target.value)}
          >
            <FormControlLabel
              value="In-Person meetings"
              control={<Radio />}
              label="In-Person meetings"
            />
            <FormControlLabel
              value="Online meetings"
              control={<Radio />}
              label="Online meetings"
            />
            <FormControlLabel
              value="Hybrid"
              control={<Radio />}
              label="Hybrid"
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
            aria-labelledby="meeting-frequency-radio-group-label"
            name="meetingFrequency"
            value={meetingFrequency}
            onChange={(e) => setMeetingFrequency(e.target.value)}
          >
            <FormControlLabel
              value="As minimal as possible"
              control={<Radio />}
              label="As minimal as possible"
            />
            <FormControlLabel
              value="Once every two weeks"
              control={<Radio />}
              label="Once every two weeks"
            />
            <FormControlLabel
              value="Once every week"
              control={<Radio />}
              label="Once every week"
            />
            <FormControlLabel
              value="Twice a week"
              control={<Radio />}
              label="Twice a week"
            />
            <FormControlLabel
              value="More than twice a week"
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
          <div>After presenting a project demo to the client, you receive feedback that requires several adjustments to meet the client's new expectations. This will involve reworking some parts of the project. How comfortable are you in adapting to feedback and making necessary adjustments to the project?</div>
          <br />
          <RadioGroup
            aria-labelledby="adapting-comfort-radio-group-label"
            name="adaptingComfort"
            value={adaptingComfort}
            onChange={(e) => setAdaptingComfort(e.target.value)}
          >
            <FormControlLabel
              value="I prefer maintaining the original plan but can make changes with guidance."
              control={<Radio />}
              label="I prefer maintaining the original plan but can make changes with guidance."
            />
            <FormControlLabel
              value="I can make necessary adjustments with some effort and find ways to improve."
              control={<Radio />}
              label="I can make necessary adjustments with some effort and find ways to improve."
            />
            <FormControlLabel
              value="I am comfortable with making adjustments based on feedback and can adapt with little time."
              control={<Radio />}
              label="I am comfortable with making adjustments based on feedback and can adapt with little time."
            />
            <FormControlLabel
              value="I welcome feedback and make adjustments smoothly and efficiently."
              control={<Radio />}
              label="I welcome feedback and make adjustments smoothly and efficiently."
            />
            <FormControlLabel
              value="I embrace feedback and adapt quickly to make the necessary changes with enthusiasm."
              control={<Radio />}
              label="I embrace feedback and adapt quickly to make the necessary changes with enthusiasm."
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>During the project, regular updates and feedback sessions are scheduled to ensure everyone is aligned and any issues are addressed promptly. The success of the project depends on how well the team communicates. How important are these regular updates and feedback sessions to you?</div>
          <br />
          <RadioGroup
            aria-labelledby="effective-communication-radio-group-label"
            name="effectiveCommunication"
            value={effectiveCommunication}
            onChange={(e) => setEffectiveCommunication(e.target.value)}
          >
            <FormControlLabel
              value="Not important; I believe in working independently and managing my tasks."
              control={<Radio />}
              label="Not important; I believe in working independently and managing my tasks."
            />
            <FormControlLabel
              value="Somewhat important; occasional feedback is sufficient for me."
              control={<Radio />}
              label="Somewhat important; occasional feedback is sufficient for me."
            />
            <FormControlLabel
              value="Moderately important; regular updates and feedback are useful but not critical."
              control={<Radio />}
              label="Moderately important; regular updates and feedback are useful but not critical."
            />
            <FormControlLabel
              value="Important; frequent updates and feedback sessions help keep me aligned with the team."
              control={<Radio />}
              label="Important; frequent updates and feedback sessions help keep me aligned with the team."
            />
            <FormControlLabel
              value="Very important; I rely on constant updates and feedback to ensure the project's success."
              control={<Radio />}
              label="Very important; I rely on constant updates and feedback to ensure the project's success."
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>Your team holds regular meetings to discuss project progress, share updates, and brainstorm new ideas. You often need to initiate and contribute to discussions to ensure effective collaboration. How comfortable are you in initiating and maintaining professional conversations with colleagues during these meetings?</div>
          <br />
          <RadioGroup
            aria-labelledby="initiating-convo-radio-group-label"
            name="initiatingConvo"
            value={initiatingConvo}
            onChange={(e) => setInitiatingConvo(e.target.value)}
          >
            <FormControlLabel
              value="I prefer to listen as I find it very difficult to initiate conversations."
              control={<Radio />}
              label="I prefer to listen as I find it very difficult to initiate conversations."
            />
            <FormControlLabel
              value="I feel somewhat uncomfortable but can participate when necessary."
              control={<Radio />}
              label="I feel somewhat uncomfortable but can participate when necessary."
            />
            <FormControlLabel
              value="I am moderately comfortable and can contribute to discussions with some effort."
              control={<Radio />}
              label="I am moderately comfortable and can contribute to discussions with some effort."
            />
            <FormControlLabel
              value="I am comfortable initiating and maintaining conversations, and I participate actively."
              control={<Radio />}
              label="I am comfortable initiating and maintaining conversations, and I participate actively."
            />
            <FormControlLabel
              value="I am very comfortable and enjoy leading and contributing to conversations regularly."
              control={<Radio />}
              label="I am very comfortable and enjoy leading and contributing to conversations regularly."
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>Your team is working on a complex task that requires close collaboration and regular updates. Open communication is essential to ensure everyone is aligned and issues are addressed promptly. How often do you initiate communication or discussions about the task with your teammates?</div>
          <br />
          <RadioGroup
            aria-labelledby="initiating-frequency-radio-group-label"
            name="initiatingFrequency"
            value={initiatingFrequency}
            onChange={(e) => setInitiatingFrequency(e.target.value)}
          >
            <FormControlLabel
              value="Never; I hope the issue resolves itself or someone else addresses it."
              control={<Radio />}
              label="Never; I hope the issue resolves itself or someone else addresses it."
            />
            <FormControlLabel
              value="Rarely; I communicate only when absolutely necessary."
              control={<Radio />}
              label="Rarely; I communicate only when absolutely necessary."
            />
            <FormControlLabel
              value="Sometimes; I initiate discussions when I have specific updates or questions."
              control={<Radio />}
              label="Sometimes; I initiate discussions when I have specific updates or questions."
            />
            <FormControlLabel
              value="Often; I regularly check in and share updates with my team."
              control={<Radio />}
              label="Often; I regularly check in and share updates with my team."
            />
            <FormControlLabel
              value="Always; I consistently initiate communication and ensure everyone is informed."
              control={<Radio />}
              label="Always; I consistently initiate communication and ensure everyone is informed."
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>Your team participates in a workshop designed to solve complex problems through creative and critical thinking exercises. Each team member is encouraged to contribute innovative ideas and think critically about potential solutions. How do you feel about participating in workshops that focus on creative and critical thinking?</div>
          <br />
          <RadioGroup
            aria-labelledby="challenge-preference-radio-group-label"
            name="challengePreference"
            value={challengePreference}
            onChange={(e) => setChallengePreference(e.target.value)}
          >
            <FormControlLabel
              value="I prefer to avoid such workshops and focus on routine tasks."
              control={<Radio />}
              label="I prefer to avoid such workshops and focus on routine tasks."
            />
            <FormControlLabel
              value="I participate if required but don't actively seek out these opportunities."
              control={<Radio />}
              label="I participate if required but don't actively seek out these opportunities."
            />
            <FormControlLabel
              value="I find these workshops somewhat enjoyable and participate occasionally."
              control={<Radio />}
              label="I find these workshops somewhat enjoyable and participate occasionally."
            />
            <FormControlLabel
              value="I look forward to these workshops and actively participate in them."
              control={<Radio />}
              label="I look forward to these workshops and actively participate in them."
            />
            <FormControlLabel
              value="I thoroughly enjoy these workshops and actively seek out opportunities to engage in creative problem-solving."
              control={<Radio />}
              label="I thoroughly enjoy these workshops and actively seek out opportunities to engage in creative problem-solving."
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>Your team has been tasked with improving a current process that has become outdated. You have the opportunity to implement innovative approaches to streamline and enhance efficiency. How open are you to exploring and implementing innovative approaches to improve the process?</div>
          <br />
          <RadioGroup
            aria-labelledby="exploring-comfort-radio-group-label"
            name="exploringComfort"
            value={exploringComfort}
            onChange={(e) => setExploringComfort(e.target.value)}
          >
            <FormControlLabel
              value="I prefer sticking to traditional methods that have worked in the past."
              control={<Radio />}
              label="I prefer sticking to traditional methods that have worked in the past."
            />
            <FormControlLabel
              value="I am hesitant but willing to consider new approaches if necessary."
              control={<Radio />}
              label="I am hesitant but willing to consider new approaches if necessary."
            />
            <FormControlLabel
              value="I am somewhat open and will try new approaches if they seem beneficial."
              control={<Radio />}
              label="I am somewhat open and will try new approaches if they seem beneficial."
            />
            <FormControlLabel
              value="I prefer to explore and implement more innovative approaches."
              control={<Radio />}
              label="I prefer to explore and implement more innovative approaches."
            />
            <FormControlLabel
              value="I try to find and explore innovative approaches first if I am able to."
              control={<Radio />}
              label="I try to find and explore innovative approaches first if I am able to."
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>Your team is working on a critical project, and you notice a significant mistake in the work submitted by one of your colleagues. The mistake could impact the project's outcome if not addressed promptly. How do you handle this mistake within the project group?</div>
          <br />
          <RadioGroup
            aria-labelledby="conflict-management-radio-group-label"
            name="conflictManagement"
            value={conflictManagement}
            onChange={(e) => setConflictManagement(e.target.value)}
          >
            <FormControlLabel
              value="Keep it to yourself, assuming someone else will notice it and address it."
              control={<Radio />}
              label="Keep it to yourself, assuming someone else will notice it and address it."
            />
            <FormControlLabel
              value="After the meeting, privately message the person who made the mistake to correct it."
              control={<Radio />}
              label="After the meeting, privately message the person who made the mistake to correct it."
            />
            <FormControlLabel
              value="Privately message a more capable team member to address the mistake."
              control={<Radio />}
              label="Privately message a more capable team member to address the mistake."
            />
            <FormControlLabel
              value="Point out the error in the meeting positively to ensure it is corrected."
              control={<Radio />}
              label="Point out the error in the meeting positively to ensure it is corrected."
            />
            <FormControlLabel
              value="Point out the mistake directly in the meeting and ask the person to rectify it."
              control={<Radio />}
              label="Point out the mistake directly in the meeting and ask the person to rectify it."
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>During a team meeting to discuss project strategies, two team members have a heated disagreement about the best approach to take. The conflict is disrupting the meeting, and a resolution is needed to move forward. How comfortable are you in handling this conflict within the project group?</div>
          <br />
          <RadioGroup
            aria-labelledby="conflict-management-radio-group-label"
            name="conflictManagement"
            value={conflictManagement}
            onChange={(e) => setConflictManagement(e.target.value)}
          >
            <FormControlLabel
              value="I am very uncomfortable and would prefer someone else handle it."
              control={<Radio />}
              label="I am very uncomfortable and would prefer someone else handle it."
            />
            <FormControlLabel
              value="I am somewhat uncomfortable but can try to manage if necessary."
              control={<Radio />}
              label="I am somewhat uncomfortable but can try to manage if necessary."
            />
            <FormControlLabel
              value="I am moderately comfortable and can step in to help resolve the conflict."
              control={<Radio />}
              label="I am moderately comfortable and can step in to help resolve the conflict."
            />
            <FormControlLabel
              value="I am comfortable and willing to handle the conflict to reach a resolution."
              control={<Radio />}
              label="I am comfortable and willing to handle the conflict to reach a resolution."
            />
            <FormControlLabel
              value="I am very comfortable and prefer to take the lead in resolving conflicts and disagreements."
              control={<Radio />}
              label="I am very comfortable and prefer to take the lead in resolving conflicts and disagreements."
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>Your team is working on a project with an extremely tight deadline. There have been unexpected setbacks, and everyone is feeling the pressure. The project must be completed on time, and the stress levels are high. How do you manage stress and maintain composure in this high-pressure situation?</div>
          <br />
          <RadioGroup
            aria-labelledby="stress-management-radio-group-label"
            name="stressManagement"
            value={stressManagement}
            onChange={(e) => setStressManagement(e.target.value)}
          >
            <FormControlLabel
              value="Take deep breaths, assess priorities, and break tasks into smaller, manageable steps alone."
              control={<Radio />}
              label="Take deep breaths, assess priorities, and break tasks into smaller, manageable steps alone."
            />
            <FormControlLabel
              value="I use positive reinforcement to keep the team’s morale high while quickly resolving the issue."
              control={<Radio />}
              label="I use positive reinforcement to keep the team’s morale high while quickly resolving the issue."
            />
            <FormControlLabel
              value="I become highly focused and driven, using the stress to motivate myself and others."
              control={<Radio />}
              label="I become highly focused and driven, using the stress to motivate myself and others."
            />
            <FormControlLabel
              value="Seek support from colleagues and communicate openly about challenges to stay calm."
              control={<Radio />}
              label="Seek support from colleagues and communicate openly about challenges to stay calm."
            />
            <FormControlLabel
              value="I rely on structured routines and clear plans to manage my stress."
              control={<Radio />}
              label="I rely on structured routines and clear plans to manage my stress."
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>If it were up to you, what is your ideal group size?</div>
          <br />
          <RadioGroup
            aria-labelledby="ideal-group-size-radio-group-label"
            name="idealGroupSize"
            value={idealGroupSize}
            onChange={(e) => setIdealGroupSize(e.target.value)}
          >
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="4"
            />
            <FormControlLabel
              value="5"
              control={<Radio />}
              label="5"
            />
            <FormControlLabel
              value="6"
              control={<Radio />}
              label="6"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <div>Please provide some reasons for your ideal group size (just for our analysis, does not impact)</div>
        <br />
        <TextField id="groupSizeReason" fullWidth />
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>If you could hang out with your project mates, what kind of activities would you like to do?</div>
          <br />
          <RadioGroup
            aria-labelledby="hangout-activities-radio-group-label"
            name="hangoutActivities"
            value={hangoutActivities}
            onChange={(e) => setHangoutActivities(e.target.value)}
          >
            <FormControlLabel
              value="Outdoor adventure / exercise e.g., hiking or rock climbing"
              control={<Radio />}
              label="Outdoor adventure / exercise e.g., hiking or rock climbing"
            />
            <FormControlLabel
              value="Social gatherings e.g., dinner or a game night"
              control={<Radio />}
              label="Social gatherings e.g., dinner or a game night"
            />
            <FormControlLabel
              value="Cultural/Event exploration e.g., food festivals, museums or exploring local cultural events"
              control={<Radio />}
              label="Cultural/Event exploration e.g., food festivals, museums or exploring local cultural events"
            />
            <FormControlLabel
              value="Creative pursuits e.g., art and craft session, cooking or baking together"
              control={<Radio />}
              label="Creative pursuits e.g., art and craft session, cooking or baking together"
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
          backgroundColor: "#F86204",
        }}
      >
        Submit Questionnaire
      </Button>
    </div>
  );
}
