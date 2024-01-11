import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Button,
  Checkbox,
  Grid,
  Container,
  Paper,
  Divider,
  Stack,
  Slider,
} from "@mui/material";
import { useState } from "react";

export default function Questions() {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            defaultValue="yes"
            name="radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
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
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="assertive"
              control={<Radio />}
              label="Assertive"
            />
            <FormControlLabel
              value="collaborative"
              control={<Radio />}
              label="Collaborative"
            />
            <FormControlLabel
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
            How do you typically give feedback to others? (feedforward entails
            providing corrective feedback based on future behavior or
            performance. This method of feedback focuses on behavior that should
            be avoided/continued in the future)
          </div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="negative_feedback"
              control={<Radio />}
              label="Negative feedback"
            />
            <FormControlLabel
              value="positive_feedback"
              control={<Radio />}
              label="Positive feedback"
            />
            <FormControlLabel
              value="negative_feedforward"
              control={<Radio />}
              label="Negative feed-forward"
            />
            <FormControlLabel
              value="positive_feedforward"
              control={<Radio />}
              label="Positive feed-forward"
            />
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
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="negative_feedback"
              control={<Radio />}
              label="Negative feedback"
            />
            <FormControlLabel
              value="positive_feedback"
              control={<Radio />}
              label="Positive feedback"
            />
            <FormControlLabel
              value="negative_feedforward"
              control={<Radio />}
              label="Negative feed-forward"
            />
            <FormControlLabel
              value="positive_feedforward"
              control={<Radio />}
              label="Positive feed-forward"
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
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="early_bird"
              control={<Radio />}
              label="Early Bird"
            />
            <FormControlLabel
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
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="morning"
              control={<Radio />}
              label="Morning"
            />
            <FormControlLabel
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
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="do_first"
              control={<Radio />}
              label="Do first, think later"
            />
            <FormControlLabel
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
          <div>How do you manage your deadlines?</div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="works_close"
              control={<Radio />}
              label="Work closer to deadlines"
            />
            <FormControlLabel
              value="plan_first"
              control={<Radio />}
              label="Work ahead of time"
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
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="consistent"
              control={<Radio />}
              label="Work consistently"
            />
            <FormControlLabel
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
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="less_than_2"
              control={<Radio />}
              label="Less than 2 hours"
            />
            <FormControlLabel
              value="two_four"
              control={<Radio />}
              label="2-4 hours"
            />
            <FormControlLabel
              value="four_six"
              control={<Radio />}
              label="4-6 hours"
            />
            <FormControlLabel
              value="six_eight"
              control={<Radio />}
              label="6-8 hours"
            />
            <FormControlLabel
              value="eight_ten"
              control={<Radio />}
              label="8-10 hours"
            />
            <FormControlLabel
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
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="in_person"
              control={<Radio />}
              label="In Person meetings"
            />
            <FormControlLabel
              value="online"
              control={<Radio />}
              label="Online meetings"
            />
            <FormControlLabel
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
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="minimal"
              control={<Radio />}
              label="As minimal as possible"
            />
            <FormControlLabel
              value="weekly"
              control={<Radio />}
              label="Once every week"
            />
            <FormControlLabel
              value="biweekly"
              control={<Radio />}
              label="Once every 2 weeks"
            />
            <FormControlLabel
              value="twice_a_week"
              control={<Radio />}
              label="Twice a week"
            />
            <FormControlLabel
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
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="private"
              control={<Radio />}
              label="Keep it to yourself"
            />
            <FormControlLabel
              value="pm"
              control={<Radio />}
              label="PM the person who made the mistake"
            />
            <FormControlLabel
              value="pm_third"
              control={<Radio />}
              label="PM someone who you trust to correct the mistake"
            />
            <FormControlLabel
              value="openly_positive"
              control={<Radio />}
              label="Openly point it out in the form of constructive criticism"
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
      <br />
      <div style={{ textAlign: "left" }}>
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
      <br />
      <div style={{ textAlign: "left" }}>
        <FormControl>
          <div>
            If you could hang out with your project mates, what kind of
            activities would you like to do?
          </div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="outdoor"
              control={<Radio />}
              label="Outdoor adventure / exercise e.g, hiking or rockclimbing"
            />
            <FormControlLabel
              value="gathering"
              control={<Radio />}
              label="Social gatherings e.g. dinner or a game night"
            />
            <FormControlLabel
              value="culture"
              control={<Radio />}
              label="Cultural/Event exploration e.g.Food festivals, museums or exploring local cultural events"
            />
            <FormControlLabel
              value="creative"
              control={<Radio />}
              label="Creative Pursuits e.g. Art and craft session, Cooking or baking together"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <Divider sx={{ borderBottomWidth: 2, borderBottomColor: "black" }} />
      <br />
      <div>
        <FormControl>
          <div>
            How comfortable are you in adapting to changing project requirements
            and circumstances?
          </div>
          <br />
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="least_"
              control={<Radio />}
              label="1 - Very uncomfortable"
            />
            <FormControlLabel value="gathering" control={<Radio />} label="2" />
            <FormControlLabel value="culture" control={<Radio />} label="3" />
            <FormControlLabel value="creative" control={<Radio />} label="4" />
            <FormControlLabel
              value="creative"
              control={<Radio />}
              label="5 - Very comfortable"
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
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="least_"
              control={<Radio />}
              label="1 - Each person just independently does what they're assigned"
            />
            <FormControlLabel value="gathering" control={<Radio />} label="2" />
            <FormControlLabel value="culture" control={<Radio />} label="3" />
            <FormControlLabel value="creative" control={<Radio />} label="4" />
            <FormControlLabel
              value="creative"
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
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="least_"
              control={<Radio />}
              label="1 - Very uncomfortable"
            />
            <FormControlLabel value="gathering" control={<Radio />} label="2" />
            <FormControlLabel value="culture" control={<Radio />} label="3" />
            <FormControlLabel value="creative" control={<Radio />} label="4" />
            <FormControlLabel
              value="creative"
              control={<Radio />}
              label="5 - Very comfortable"
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
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="least_"
              control={<Radio />}
              label="1 - Never"
            />
            <FormControlLabel value="gathering" control={<Radio />} label="2" />
            <FormControlLabel value="culture" control={<Radio />} label="3" />
            <FormControlLabel value="creative" control={<Radio />} label="4" />
            <FormControlLabel
              value="creative"
              control={<Radio />}
              label="5 - Always"
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
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="repetitive_easy"
              control={<Radio />}
              label="Rather do repetitive work that I find easier"
            />
            <FormControlLabel
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
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="least_"
              control={<Radio />}
              label="1 - Not open at all"
            />
            <FormControlLabel value="gathering" control={<Radio />} label="2" />
            <FormControlLabel value="culture" control={<Radio />} label="3" />
            <FormControlLabel value="creative" control={<Radio />} label="4" />
            <FormControlLabel
              value="creative"
              control={<Radio />}
              label="5 - Very open"
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
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="uncomfortable_deescalating"
              control={<Radio />}
              label="Conflict avoidant"
            />
            <FormControlLabel
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
