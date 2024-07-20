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
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={consentAnswer}
            name="Question 1"
          >
            <FormControlLabel
              checked={consentAnswer == "yes"}
              onClick={(e) => {
                setConsentAnswer(e.target.value);
              }}
              value="yes"
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel
              checked={consentAnswer == "no"}
              onClick={(e) => {
                setConsentAnswer(e.target.value);
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
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={gender}
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
            <FormControlLabel
              checked={gender == 0.75}
              onClick={(e) => {
                setGender(e.target.value);
              }}
              value={0.75}
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
            aria-labelledby="demo-radio-buttons-group-label"
            name="university"
            value={university}
          >
            <FormControlLabel
              checked={university == 0}
              onClick={(e) => {
                setUniversity(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="NUS"
            />
            <FormControlLabel
              checked={university == 0.2}
              onClick={(e) => {
                setUniversity(e.target.value);
              }}
              value={0.2}
              control={<Radio />}
              label="SMU"
            />
            <FormControlLabel
              checked={university == 0.4}
              onClick={(e) => {
                setUniversity(e.target.value);
              }}
              value={0.4}
              control={<Radio />}
              label="NTU"
            />
            <FormControlLabel
              checked={university == 0.6}
              onClick={(e) => {
                setUniversity(e.target.value);
              }}
              value={0.6}
              control={<Radio />}
              label="SIM"
            />
            <FormControlLabel
              checked={university == 0.8}
              onClick={(e) => {
                setUniversity(e.target.value);
              }}
              value={0.8}
              control={<Radio />}
              label="SUSS"
            />
            <FormControlLabel
              checked={university == 1}
              onClick={(e) => {
                setUniversity(e.target.value);
              }}
              value={1}
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
        <FormControl>
          <div>Faculty</div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Faculty"
            value={faculty}
          >
            <FormControlLabel
              checked={faculty == 0}
              onClick={(e) => {
                setFaculty(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="College of Humanities and Sciences"
            />
            <FormControlLabel
              checked={faculty == 0.11}
              onClick={(e) => {
                setFaculty(e.target.value);
              }}
              value={0.11}
              control={<Radio />}
              label="College of Design and Engineering"
            />
            <FormControlLabel
              checked={faculty == 0.22}
              onClick={(e) => {
                setFaculty(e.target.value);
              }}
              value={0.22}
              control={<Radio />}
              label="Faculty of Business"
            />
            <FormControlLabel
              checked={faculty == 0.33}
              onClick={(e) => {
                setFaculty(e.target.value);
              }}
              value={0.33}
              control={<Radio />}
              label="Faculty of Medicine"
            />
            <FormControlLabel
              checked={faculty == 0.44}
              onClick={(e) => {
                setFaculty(e.target.value);
              }}
              value={0.44}
              control={<Radio />}
              label="Faculty of Computing"
            />
            <FormControlLabel
              checked={faculty == 0.55}
              onClick={(e) => {
                setFaculty(e.target.value);
              }}
              value={0.55}
              control={<Radio />}
              label="Faculty of Dentistry"
            />
            <FormControlLabel
              checked={faculty == 0.66}
              onClick={(e) => {
                setFaculty(e.target.value);
              }}
              value={0.66}
              control={<Radio />}
              label="Faculty of Law"
            />
            <FormControlLabel
              checked={faculty == 0.77}
              onClick={(e) => {
                setFaculty(e.target.value);
              }}
              value={0.77}
              control={<Radio />}
              label="Faculty of Music"
            />
            <FormControlLabel
              checked={faculty == 0.88}
              onClick={(e) => {
                setFaculty(e.target.value);
              }}
              value={0.88}
              control={<Radio />}
              label="Faculty of Nursing"
            />
            <FormControlLabel
              checked={faculty == 1}
              onClick={(e) => {
                setFaculty(e.target.value);
              }}
              value={1}
              control={<Radio />}
              label="Faculty of Pharmacy"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>Major</div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="Major"
            value={major}
            onClick={(e) => setMajor(e.target.value)}
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="Computer Engineering"
            />
            <FormControlLabel
              value={0.02}
              control={<Radio />}
              label="Biomedical Engineering"
            />
            <FormControlLabel
              value={0.04}
              control={<Radio />}
              label="Chemical Engineering"
            />
            <FormControlLabel
              value={0.06}
              control={<Radio />}
              label="Civil Engineering"
            />
            <FormControlLabel
              value={0.08}
              control={<Radio />}
              label="Electrical Engineering"
            />
            <FormControlLabel
              value={0.1}
              control={<Radio />}
              label="Engineering Science"
            />
            <FormControlLabel
              value={0.12}
              control={<Radio />}
              label="Environmental Engineering"
            />
            <FormControlLabel
              value={0.14}
              control={<Radio />}
              label="Industrial & Systems Engineering"
            />
            <FormControlLabel
              value={0.16}
              control={<Radio />}
              label="Infrastructure & Project Management"
            />
            <FormControlLabel
              value={0.18}
              control={<Radio />}
              label="Materials Science & Engineering"
            />
            <FormControlLabel
              value={0.20}
              control={<Radio />}
              label="Mechanical Engineering"
            />
            <FormControlLabel
              value={0.22}
              control={<Radio />}
              label="Data Science and Economics"
            />
            <FormControlLabel
              value={0.24}
              control={<Radio />}
              label="Environmental Studies"
            />
            <FormControlLabel
              value={0.26}
              control={<Radio />}
              label="Food Science and Technology"
            />
            <FormControlLabel
              value={0.28}
              control={<Radio />}
              label="Anthropology"
            />
            <FormControlLabel
              value={0.30}
              control={<Radio />}
              label="Chinese Language"
            />
            <FormControlLabel
              value={0.32}
              control={<Radio />}
              label="Chinese Studies"
            />
            <FormControlLabel
              value={0.34}
              control={<Radio />}
              label="Communications and New Media"
            />
            <FormControlLabel
              value={0.36}
              control={<Radio />}
              label="Economics"
            />
            <FormControlLabel
              value={0.38}
              control={<Radio />}
              label="English Language"
            />
            <FormControlLabel
              value={0.40}
              control={<Radio />}
              label="English Literature"
            />
            <FormControlLabel
              value={0.42}
              control={<Radio />}
              label="Geography"
            />
            <FormControlLabel
              value={0.44}
              control={<Radio />}
              label="Global Studies"
            />
            <FormControlLabel
              value={0.46}
              control={<Radio />}
              label="History"
            />
            <FormControlLabel
              value={0.48}
              control={<Radio />}
              label="Japanese Studies"
            />
            <FormControlLabel
              value={0.50}
              control={<Radio />}
              label="Malay Studies"
            />
            <FormControlLabel
              value={0.52}
              control={<Radio />}
              label="Philosophy"
            />
            <FormControlLabel
              value={0.54}
              control={<Radio />}
              label="Political Science"
            />
            <FormControlLabel
              value={0.56}
              control={<Radio />}
              label="Psychology"
            />
            <FormControlLabel
              value={0.58}
              control={<Radio />}
              label="Social Work"
            />
            <FormControlLabel
              value={0.60}
              control={<Radio />}
              label="Sociology"
            />
            <FormControlLabel
              value={0.62}
              control={<Radio />}
              label="South Asian Studies"
            />
            <FormControlLabel
              value={0.64}
              control={<Radio />}
              label="Southeast Asian Studies"
            />
            <FormControlLabel
              value={0.66}
              control={<Radio />}
              label="Theatre Studies"
            />
            <FormControlLabel
              value={0.68}
              control={<Radio />}
              label="Chemistry"
            />
            <FormControlLabel
              value={0.70}
              control={<Radio />}
              label="Data Science and Analytics"
            />
            <FormControlLabel
              value={0.72}
              control={<Radio />}
              label="Life Sciences"
            />
            <FormControlLabel
              value={0.192}
              control={<Radio />}
              label="Mathematics"
            />
            <FormControlLabel
              value={0.74}
              control={<Radio />}
              label="Physics"
            />
            <FormControlLabel
              value={0.76}
              control={<Radio />}
              label="Quantitative Finance"
            />
            <FormControlLabel
              value={0.78}
              control={<Radio />}
              label="Statistics"
            />
            <FormControlLabel
              value={0.80}
              control={<Radio />}
              label="Pharmaceutical Science"
            />
            <FormControlLabel
              value={0.82}
              control={<Radio />}
              label="Philosophy, Politics, and Economics"
            />
            <FormControlLabel
              value={0.84}
              control={<Radio />}
              label="Business Administration"
            />
            <FormControlLabel
              value={0.86}
              control={<Radio />}
              label="Business Administration (Accountancy)"
            />
            <FormControlLabel
              value={0.88}
              control={<Radio />}
              label="Real Estate"
            />
            <FormControlLabel
              value={0.90}
              control={<Radio />}
              label="Business Analytics"
            />
            <FormControlLabel
              value={0.92}
              control={<Radio />}
              label="Computer Science"
            />
            <FormControlLabel
              value={0.94}
              control={<Radio />}
              label="Information Security"
            />
            <FormControlLabel
              value={0.96}
              control={<Radio />}
              label="Information Systems"
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="Law"
            />
          </RadioGroup>
        </FormControl>
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
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>IEX Topic Interest</div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="iex"
          >
            <FormControlLabel
              checked={iexinterest == 0}
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
              value={0}
              control={<Radio />}
              label="Waste Management in Bandung"
            />
            <FormControlLabel
              value={0.048}
              control={<Radio />}
              label="Social Design as Worldmaking in Singapore"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.096}
              control={<Radio />}
              label="Bajautopia in Sabah"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.144}
              control={<Radio />}
              label="Tourist Development in Thailand"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.192}
              control={<Radio />}
              label="Inclusion in Education"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.24}
              control={<Radio />}
              label="100% Housing"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.288}
              control={<Radio />}
              label="Digital Documentation of Indonesian Arts Communities"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.336}
              control={<Radio />}
              label="Communities and Heritage Conservation"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.384}
              control={<Radio />}
              label="Postconflict Cambodia"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.432}
              control={<Radio />}
              label="Education (Innov-Ed) in Vietnam"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.48}
              control={<Radio />}
              label="Self-help + Communities"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.528}
              control={<Radio />}
              label="Project Chiang Mai"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.576}
              control={<Radio />}
              label="Gender Matters Everyday"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.624}
              control={<Radio />}
              label="Inclusive Research for Social Change"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.672}
              control={<Radio />}
              label="Rohingya Refugees in Malaysia"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.72}
              control={<Radio />}
              label="Farming in an Urban Nation"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.768}
              control={<Radio />}
              label="Bamboo Differences - Philippines"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.816}
              control={<Radio />}
              label="The Practical Realities of Well-Being"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.864}
              control={<Radio />}
              label="Technology for Social Good"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.912}
              control={<Radio />}
              label="Let's Green this Little Red Dot!"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={0.96}
              control={<Radio />}
              label="Environmental and Community Impact - Cambodia"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="Digital Communities"
              onClick={(e) => {
                setIEXInterest(e.target.value);
              }}
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
            aria-labelledby="demo-radio-buttons-group-label"
            name="Collaboration"
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="Start the discussion off by sharing a few of your ideas; let’s start with those and see what everyone thinks"
              onClick={(e) => setBrainstorming(e.target.value)}
            />
            <FormControlLabel
              value={0.5}
              control={<Radio />}
              label="Let’s gather everyone's ideas first and then discuss them one by one."
              onClick={(e) => setBrainstorming(e.target.value)}
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="Wait for others to start the discussion and listen to them first before sharing your ideas."
              onClick={(e) => setBrainstorming(e.target.value)}
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
            aria-labelledby="demo-radio-buttons-group-label"
            name="feedbackGiving"
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="Focus on the missed deadlines and the need to adhere to the project timeline."
              onClick={(e) => setFeedbackGiving(e.target.value)}
            />
            <FormControlLabel
              value={0.33}
              control={<Radio />}
              label="Praise their high-quality work without mentioning the missed deadlines."
              onClick={(e) => setFeedbackGiving(e.target.value)}
            />
            <FormControlLabel
              value={0.66}
              control={<Radio />}
              label="Suggest future strategies for meeting deadlines without focusing on past mistakes."
              onClick={(e) => setFeedbackGiving(e.target.value)}
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="Highlight their high-quality work first and then discuss the missed deadlines, suggesting ways to improve time management."
              onClick={(e) => setFeedbackGiving(e.target.value)}
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
            aria-labelledby="demo-radio-buttons-group-label"
            name="feedbackReceiving"
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="Just be direct with me and focus on the missed deadlines and the need for punctuality."
              onClick={(e) => setFeedbackReceiving(e.target.value)}
            />
            <FormControlLabel
              value={0.33}
              control={<Radio />}
              label="Praise my work quality without dwelling too much on the deadlines."
              onClick={(e) => setFeedbackReceiving(e.target.value)}
            />
            <FormControlLabel
             
             value={0.66}
             control={<Radio />}
             label="Have a conversation with me about future strategies for meeting deadlines without focusing on past mistakes."
             onClick={(e) => setFeedbackReceiving(e.target.value)}
           />
           <FormControlLabel
             value={1}
             control={<Radio />}
             label="Highlight the quality of my work first and then discuss the missed deadlines with suggestions for improvement."
             onClick={(e) => setFeedbackReceiving(e.target.value)}
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
           aria-labelledby="demo-radio-buttons-group-label"
           name="workingHours"
         >
           <FormControlLabel
             value={0}
             control={<Radio />}
             label="Early Bird"
             onClick={(e) => setWorkingHours(e.target.value)}
           />
           <FormControlLabel
             value={1}
             control={<Radio />}
             label="Night Owl"
             onClick={(e) => setWorkingHours(e.target.value)}
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
           aria-labelledby="demo-radio-buttons-group-label"
           name="meetingHours"
         >
           <FormControlLabel
             value={0}
             control={<Radio />}
             label="Morning"
             onClick={(e) => setMeetingHours(e.target.value)}
           />
           <FormControlLabel
             value={1}
             control={<Radio />}
             label="Evening/Night"
             onClick={(e) => setMeetingHours(e.target.value)}
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
           aria-labelledby="demo-radio-buttons-group-label"
           name="workingApproach"
         >
           <FormControlLabel
             value={0}
             control={<Radio />}
             label="Jump right into research and adjust as needed along the way."
             onClick={(e) => setWorkingApproach(e.target.value)}
           />
           <FormControlLabel
             value={0.25}
             control={<Radio />}
             label="Quickly outline a rough plan and then start researching."
             onClick={(e) => setWorkingApproach(e.target.value)}
           />
           <FormControlLabel
             value={0.5}
             control={<Radio />}
             label="Create a detailed plan before starting any research."
             onClick={(e) => setWorkingApproach(e.target.value)}
           />
           <FormControlLabel
             value={0.75}
             control={<Radio />}
             label="Thoroughly plan every detail and follow the plan closely."
             onClick={(e) => setWorkingApproach(e.target.value)}
           />
           <FormControlLabel
             value={1}
             control={<Radio />}
             label="Spend significant time on planning and ensure all possible issues are considered before starting."
             onClick={(e) => setWorkingApproach(e.target.value)}
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
           aria-labelledby="demo-radio-buttons-group-label"
           name="manageDeadlines"
         >
           <FormControlLabel
             value={0}
             control={<Radio />}
             label="I prefer to complete each task close to or just before its deadline."
             onClick={(e) => setManageDeadlines(e.target.value)}
           />
           <FormControlLabel
             value={0.25}
             control={<Radio />}
             label="I finish tasks with a small buffer before each deadline."
             onClick={(e) => setManageDeadlines(e.target.value)}
           />
           <FormControlLabel
             value={0.5}
             control={<Radio />}
             label="I manage to complete tasks well before their deadlines."
             onClick={(e) => setManageDeadlines(e.target.value)}
           />
           <FormControlLabel
             value={0.75}
             control={<Radio />}
             label="I usually complete tasks quite early, ensuring a comfortable buffer before deadlines."
             onClick={(e) => setManageDeadlines(e.target.value)}
           />
           <FormControlLabel
             value={1}
             control={<Radio />}
             label="I finish tasks almost immediately after they are assigned."
             onClick={(e) => setManageDeadlines(e.target.value)}
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
           name="workConsistency"
         >
           <FormControlLabel
             value={0}
             control={<Radio />}
             label="Works consistently"
             onClick={(e) => setWorkConsistency(e.target.value)}
           />
           <FormControlLabel
             value={1}
             control={<Radio />}
             label="In bursts of effort"
             onClick={(e) => setWorkConsistency(e.target.value)}
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
           aria-labelledby="demo-radio-buttons-group-label"
           name="meetingStyle"
         >
           <FormControlLabel
             value={0}
             control={<Radio />}
             label="In-Person meetings"
             onClick={(e) => setMeetingStyle(e.target.value)}
           />
           <FormControlLabel
             value={1}
             control={<Radio />}
             label="Online meetings"
             onClick={(e) => setMeetingStyle(e.target.value)}
           />
           <FormControlLabel
             value={0.5}
             control={<Radio />}
             label="Hybrid"
             onClick={(e) => setMeetingStyle(e.target.value)}
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
           name="meetingFrequency"
         >
           <FormControlLabel
             value={0}
             control={<Radio />}
             label="As minimal as possible"
             onClick={(e) => setMeetingFrequency(e.target.value)}
           />
           <FormControlLabel
             value={0.25}
             control={<Radio />}
             label="Once every two weeks"
             onClick={(e) => setMeetingFrequency(e.target.value)}
           />
           <FormControlLabel
             value={0.5}
             control={<Radio />}
             label="Once every week"
             onClick={(e) => setMeetingFrequency(e.target.value)}
           />
           <FormControlLabel
             value={0.75}
             control={<Radio />}
             label="Twice a week"
             onClick={(e) => setMeetingFrequency(e.target.value)}
           />
           <FormControlLabel
             value={1}
             control={<Radio />}
             label="More than twice a week"
             onClick={(e) => setMeetingFrequency(e.target.value)}
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
            aria-labelledby="demo-radio-buttons-group-label"
            name="adaptingComfort"
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="I prefer maintaining the original plan but can make changes with guidance."
              onClick={(e) => setAdaptingComfort(e.target.value)}
            />
            <FormControlLabel
              value={0.25}
              control={<Radio />}
              label="I can make necessary adjustments with some effort and find ways to improve."
              onClick={(e) => setAdaptingComfort(e.target.value)}
            />
            <FormControlLabel
              value={0.5}
              control={<Radio />}
              label="I am comfortable with making adjustments based on feedback and can adapt with little time."
              onClick={(e) => setAdaptingComfort(e.target.value)}
            />
            <FormControlLabel
              value={0.75}
              control={<Radio />}
              label="I welcome feedback and make adjustments smoothly and efficiently."
              onClick={(e) => setAdaptingComfort(e.target.value)}
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="I embrace feedback and adapt quickly to make the necessary changes with enthusiasm."
              onClick={(e) => setAdaptingComfort(e.target.value)}
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
            aria-labelledby="demo-radio-buttons-group-label"
            name="effectiveCommunication"
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="Not important; I believe in working independently and managing my tasks."
              onClick={(e) => setEffectiveCommunication(e.target.value)}
            />
            <FormControlLabel
              value={0.25}
              control={<Radio />}
              label="Somewhat important; occasional feedback is sufficient for me."
              onClick={(e) => setEffectiveCommunication(e.target.value)}
            />
            <FormControlLabel
              value={0.5}
              control={<Radio />}
              label="Moderately important; regular updates and feedback are useful but not critical."
              onClick={(e) => setEffectiveCommunication(e.target.value)}
            />
            <FormControlLabel
              value={0.75}
              control={<Radio />}
              label="Important; frequent updates and feedback sessions help keep me aligned with the team."
              onClick={(e) => setEffectiveCommunication(e.target.value)}
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="Very important; I rely on constant updates and feedback to ensure the project's success."
              onClick={(e) => setEffectiveCommunication(e.target.value)}
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
            aria-labelledby="demo-radio-buttons-group-label"
            name="initiatingConvo"
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="I prefer to listen as I find it very difficult to initiate conversations."
              onClick={(e) => setInitiatingConvo(e.target.value)}
            />
            <FormControlLabel
              value={0.25}
              control={<Radio />}
              label="I feel somewhat uncomfortable but can participate when necessary."
              onClick={(e) => setInitiatingConvo(e.target.value)}
            />
            <FormControlLabel
              value={0.5}
              control={<Radio />}
              label="I am moderately comfortable and can contribute to discussions with some effort."
              onClick={(e) => setInitiatingConvo(e.target.value)}
            />
            <FormControlLabel
              value={0.75}
              control={<Radio />}
              label="I am comfortable initiating and maintaining conversations, and I participate actively."
              onClick={(e) => setInitiatingConvo(e.target.value)}
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="I am very comfortable and enjoy leading and contributing to conversations regularly."
              onClick={(e) => setInitiatingConvo(e.target.value)}
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
            aria-labelledby="demo-radio-buttons-group-label"
            name="initiatingFrequency"
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="Never; I hope the issue resolves itself or someone else addresses it."
              onClick={(e) => setInitiatingFrequency(e.target.value)}
            />
            <FormControlLabel
              value={0.25}
              control={<Radio />}
              label="Rarely; I communicate only when absolutely necessary."
              onClick={(e) => setInitiatingFrequency(e.target.value)}
            />
            <FormControlLabel
              value={0.5}
              control={<Radio />}
              label="Sometimes; I initiate discussions when I have specific updates or questions."
              onClick={(e) => setInitiatingFrequency(e.target.value)}
            />
            <FormControlLabel
              value={0.75}
              control={<Radio />}
              label="Often; I regularly check in and share updates with my team."
              onClick={(e) => setInitiatingFrequency(e.target.value)}
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="Always; I consistently initiate communication and ensure everyone is informed."
              onClick={(e) => setInitiatingFrequency(e.target.value)}
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
            aria-labelledby="demo-radio-buttons-group-label"
            name="challengePreference"
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="I prefer to avoid such workshops and focus on routine tasks."
              onClick={(e) => setChallengePreference(e.target.value)}
            />
            <FormControlLabel
              value={0.25}
              control={<Radio />}
              label="I participate if required but don't actively seek out these opportunities."
              onClick={(e) => setChallengePreference(e.target.value)}
            />
            <FormControlLabel
              value={0.5}
              control={<Radio />}
              label="I find these workshops somewhat enjoyable and participate occasionally."
              onClick={(e) => setChallengePreference(e.target.value)}
            />
            <FormControlLabel
              value={0.75}
              control={<Radio />}
              label="I look forward to these workshops and actively participate in them."
              onClick={(e) => setChallengePreference(e.target.value)}
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="I thoroughly enjoy these workshops and actively seek out opportunities to engage in creative problem-solving."
              onClick={(e) => setChallengePreference(e.target.value)}
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
            aria-labelledby="demo-radio-buttons-group-label"
            name="exploringComfort"
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="I prefer sticking to traditional methods that have worked in the past."
              onClick={(e) => setExploringComfort(e.target.value)}
            />
            <FormControlLabel
              value={0.25}
              control={<Radio />}
              label="I am hesitant but willing to consider new approaches if necessary."
              onClick={(e) => setExploringComfort(e.target.value)}
            />
            <FormControlLabel
              value={0.5}
              control={<Radio />}
              label="I am somewhat open and will try new approaches if they seem beneficial."
              onClick={(e) => setExploringComfort(e.target.value)}
            />
            <FormControlLabel
              value={0.75}
              control={<Radio />}
              label="I prefer to explore and implement more innovative approaches."
              onClick={(e) => setExploringComfort(e.target.value)}
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="I try to find and explore innovative approaches first if I am able to."
              onClick={(e) => setExploringComfort(e.target.value)}
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
            aria-labelledby="demo-radio-buttons-group-label"
            name="conflictManagement"
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="Keep it to yourself, assuming someone else will notice it and address it."
              onClick={(e) => setConflictManagement(e.target.value)}
            />
            <FormControlLabel
              value={0.25}
              control={<Radio />}
              label="After the meeting, privately message the person who made the mistake to correct it."
              onClick={(e) => setConflictManagement(e.target.value)}
            />
            <FormControlLabel
              value={0.5}
              control={<Radio />}
              label="Privately message a more capable team member to address the mistake."
              onClick={(e) => setConflictManagement(e.target.value)}
            />
            <FormControlLabel
              value={0.75}
              control={<Radio />}
              label="Point out the error in the meeting positively to ensure it is corrected."
              onClick={(e) => setConflictManagement(e.target.value)}
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="Point out the mistake directly in the meeting and ask the person to rectify it."
              onClick={(e) => setConflictManagement(e.target.value)}
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
            aria-labelledby="demo-radio-buttons-group-label"
            name="conflictManagement"
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="I am very uncomfortable and would prefer someone else handle it."
              onClick={(e) => setConflictManagement(e.target.value)}
            />
            <FormControlLabel
              value={0.25}
              control={<Radio />}
              label="I am somewhat uncomfortable but can try to manage if necessary."
              onClick={(e) => setConflictManagement(e.target.value)}
            />
            <FormControlLabel
              value={0.5}
              control={<Radio />}
              label="I am moderately comfortable and can step in to help resolve the conflict."
              onClick={(e) => setConflictManagement(e.target.value)}
            />
            <FormControlLabel
              value={0.75}
              control={<Radio />}
              label="I am comfortable and willing to handle the conflict to reach a resolution."
              onClick={(e) => setConflictManagement(e.target.value)}
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="I am very comfortable and prefer to take the lead in resolving conflicts and disagreements."
              onClick={(e) => setConflictManagement(e.target.value)}
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
            aria-labelledby="demo-radio-buttons-group-label"
            name="stressManagement"
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="Take deep breaths, assess priorities, and break tasks into smaller, manageable steps alone."
              onClick={(e) => setStressManagement(e.target.value)}
            />
            <FormControlLabel
              value={0.25}
              control={<Radio />}
              label="I use positive reinforcement to keep the team’s morale high while quickly resolving the issue."
              onClick={(e) => setStressManagement(e.target.value)}
            />
            <FormControlLabel
              value={0.5}
              control={<Radio />}
              label="I become highly focused and driven, using the stress to motivate myself and others."
              onClick={(e) => setStressManagement(e.target.value)}
            />
            <FormControlLabel
              value={0.75}
              control={<Radio />}
              label="Seek support from colleagues and communicate openly about challenges to stay calm."
              onClick={(e) => setStressManagement(e.target.value)}
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="I rely on structured routines and clear plans to manage my stress."
              onClick={(e) => setStressManagement(e.target.value)}
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
            aria-labelledby="demo-radio-buttons-group-label"
            name="idealGroupSize"
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="4"
              onClick={(e) => setIdealGroupSize(e.target.value)}
            />
            <FormControlLabel
              value={0.5}
              control={<Radio />}
              label="5"
              onClick={(e) => setIdealGroupSize(e.target.value)}
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="6"
              onClick={(e) => setIdealGroupSize(e.target.value)}
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
            aria-labelledby="demo-radio-buttons-group-label"
            name="hangoutActivities"
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="Outdoor adventure / exercise e.g., hiking or rock climbing"
              onClick={(e) => setHangoutActivities(e.target.value)}
            />
            <FormControlLabel
              value={0.25}
              control={<Radio />}
              label="Social gatherings e.g., dinner or a game night"
              onClick={(e) => setHangoutActivities(e.target.value)}
            />
            <FormControlLabel
              value={0.5}
              control={<Radio />}
              label="Cultural/Event exploration e.g., food festivals, museums or exploring local cultural events"
              onClick={(e) => setHangoutActivities(e.target.value)}
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="Creative pursuits e.g., art and craft session, cooking or baking together"
              onClick={(e) => setHangoutActivities(e.target.value)}
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

