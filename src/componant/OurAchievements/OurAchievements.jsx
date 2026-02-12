import "./OurAchievements.css";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import AchievementCard from "../AchievementCard/AchievementCard.jsx";

export const OurAchievements = ({ title, desc }) => {
  const sectionInfo = {
    title: "Our Achievements",
    brief:
      "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.",
  };
  const achievements = [
    {
      key: 1,
      achievement: "3+ Years of Excellence",
      brief:
        "With over 3 years in the industry, we've amassed a wealth of knowledge and experience.",
    },
    {
      key: 2,
      achievement: "Happy Clients",
      brief:
        "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
    },
    {
      key: 3,
      achievement: "Industry Recognition",
      brief:
        "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
    },
  ];
  return (
    <div className="hala-our-achievements-section">
      <SectionHeader
        sectionTitle={sectionInfo.title}
        sectionBrief={sectionInfo.brief}
      />
      <div className="hala-our-achievements-cards-section">
        {achievements.map((achievement) => (
          <AchievementCard
            cardTitle={achievement.achievement}
            cardBrief={achievement.brief}
          />
        ))}
      </div>
    </div>
  );
};

export default OurAchievements;
